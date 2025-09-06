// app/head.tsx
export default function Head() {
  return (
    <>
      {/* Basic SEO */}
      <title>MemeOrbit – Your Hub for Memes and AI Fun</title>
      <meta name="description" content="MemeOrbit is your go-to site for memes and AI-powered fun. Explore, share, and enjoy!" />
      <meta name="keywords" content="memes, AI memes, MemeOrbit, fun, entertainment, viral memes" />
      <meta name="author" content="Abiodun Owolabi" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Social Sharing */}
      <meta property="og:title" content="MemeOrbit – Your Hub for Memes and AI Fun" />
      <meta property="og:description" content="MemeOrbit is your go-to site for memes and AI-powered fun. Explore, share, and enjoy!" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://memeorbitai.com" />
      <meta property="og:image" content="https://memeorbitai.com/path-to-your-logo.png" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="MemeOrbit – Your Hub for Memes and AI Fun" />
      <meta name="twitter:description" content="MemeOrbit is your go-to site for memes and AI-powered fun. Explore, share, and enjoy!" />
      <meta name="twitter:image" content="https://memeorbitai.com/path-to-your-logo.png" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
