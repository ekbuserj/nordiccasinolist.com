import { Helmet } from 'react-helmet-async';

export default function SeoHead({ title, description, ogTitle, ogDescription, canonical }) {
  const base = 'https://www.nordiccasinolist.com';
  const fullCanonical = canonical ? `${base}${canonical}` : base;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="NordicCasinoList" />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:url" content={fullCanonical} />
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
}
