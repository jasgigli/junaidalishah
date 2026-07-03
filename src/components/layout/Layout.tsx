import { ReactNode, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useTheme } from "next-themes";
import { siteConfig } from "@/config/site";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  keywords?: string;
}

export const Layout = ({
  children,
  title = siteConfig.title,
  description = siteConfig.description,
  canonicalUrl = siteConfig.url,
  ogImage = siteConfig.avatar,
  keywords = "Junaid Ali Shah Gigli, Full-Stack Software Engineer, React, Node.js, TypeScript, AWS, Microservices, Portfolio",
}: LayoutProps) => {
  const { theme } = useTheme();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: canonicalUrl,
    jobTitle: "Full-Stack Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Giant Tech Solutions LLC",
    },
    sameAs: [
      siteConfig.links.github,
      siteConfig.links.linkedin,
      siteConfig.links.twitter,
    ],
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${siteConfig.name} Portfolio`,
    url: canonicalUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${canonicalUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <Helmet>
        {/* Basic Meta */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={siteConfig.name} />
        <meta name="language" content="en" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="theme-color" content={theme === "dark" ? "#0f172a" : "#ffffff"} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content={`${siteConfig.name} Portfolio`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={canonicalUrl} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:creator" content="@jasgiigli" />

        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />

        {/* DNS Prefetch & Preconnect for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        <title>{title}</title>

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify([structuredData, websiteData])}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        {children}
      </div>
    </>
  );
};
