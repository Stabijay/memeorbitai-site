// app/blog/[slug]/head.tsx
interface BlogHeadProps {
  params: { slug: string };
}

const getBlogData = (slug: string) => {
  // Replace with your CMS or Markdown fetching logic
  return {
    title: `Blog Post: ${slug}`,
    description: `This is a short description for ${slug} on MemeOrbit.`,
    image: `https://memeorbitai.com/images/${slug}.png`,
    datePublished: "2025-09-06",
    dateModified: "2025-09-06",
    author: "Abiodun Owolabi",
  };
};

export default function Head({ params }: BlogHeadProps) {
  const { slug } = params;
  const { title, description, image, datePublished, dateModified, author } = getBlogData(slug);

  return (
    <>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="article" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: title,
            description: description,
            image: image,
            author: {
              "@type": "Person",
              name: author,
            },
            publisher: {
              "@type": "Organization",
              name: "MemeOrbit",
              logo: {
                "@type": "ImageObject",
                url: "https://memeorbitai.com/logo.png",
              },
            },
            datePublished,
            dateModified,
          }),
        }}
      />
    </>
  );
}
