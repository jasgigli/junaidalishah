import { ReactNode, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useTheme } from "next-themes";

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
  title = "Junaid Ali Shah | Senior Full-Stack Engineer | SaaS & System Design Expert",
  description = "Senior Full-Stack Engineer specializing in modern web technologies, SaaS development, system design, and scalable, performant applications for enterprise and FAANG-level companies.",
  canonicalUrl = "https://junaid.sh",
  ogImage = "/og-image.jpg",
  keywords = "Junaid Ali Shah, Senior Full-Stack Engineer, SaaS Developer, System Design, React, Next.js, TypeScript, Node.js, FAANG portfolio",
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
    name: "Junaid Ali Shah Gigli",
    url: canonicalUrl,
    jobTitle: "Senior Full-Stack Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance / Open to Opportunities",
    },
    sameAs: [
      "https://github.com/jasgigli",
      "https://www.linkedin.com/in/jasgigli",
      "https://twitter.com/jasgigli",
    ],
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Junaid Ali Shah Portfolio",
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
        <meta name="author" content="Junaid Ali Shah Gigli" />
        <meta name="language" content="en" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="theme-color" content={theme === "dark" ? "#0f172a" : "#ffffff"} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content="Junaid Ali Shah Portfolio" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={canonicalUrl} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:creator" content="@jasgigli" />

        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />

        {/* DNS Prefetch & Preconnect for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Preload Fonts */}
        <link
          rel="preload"
          href="/fonts/inter-var-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

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
