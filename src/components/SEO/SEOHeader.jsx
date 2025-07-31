// src/components/SEOHeader.jsx
import { Helmet } from "react-helmet";

export default function SEOHeader({
  title = "Default Title",
  description = "Default SEO description.",
  url = "https://ripqiisyns.vercel.app",
  image = "/og-default.jpg",
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" 
        content="
          Modern Portfoilo,
          Portfolio References,
          Fullstack Portfolio, 
          Web Developer Portfolio, 
          Rifqi Synyster, 
          Web Developer, 
          Frontend Portfolio, 
          Website Portfolio" 
      />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical link */}
      <link rel="canonical" href={url} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Helmet>
  );
}
