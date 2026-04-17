import './globals.css';

/* =============================================
   SEO METADATA — Root Layout
   Domain: https://plade.web.app
   ============================================= */
export const metadata = {
  metadataBase: new URL('https://plade.web.app'),
  title: {
    default: 'PLADE — Learn Code. Shoot Targets. The FPS Coding Game.',
    template: '%s | PLADE',
  },
  description:
    'PLADE is a free first-person shooter coding game built on Unreal Engine 5. Shoot syntax targets, solve coding challenges mid-combat, and master Python, Java, and C through immersive FPS gameplay with AI-powered code evaluation.',
  keywords: [
    'PLADE',
    'PLADE game',
    'coding game',
    'FPS coding game',
    'learn to code game',
    'programming game',
    'coding education game',
    'learn programming through gaming',
    'Unreal Engine 5 coding game',
    'UE5 educational game',
    'AI code evaluation',
    'local LLM coding',
    'Ollama code grader',
    'Python Java C programming game',
    'first person shooter education',
    'gamified learning',
    'coding challenges game',
    'shoot to learn code',
    'offline coding game',
    'game-based learning programming',
    'learn programming through FPS gameplay',
    'coding game with AI evaluation',
    'Unreal Engine 5 educational shooter',
    'free coding game download Windows',
    'gamified coding education',
    'interactive programming game',
    'code learning FPS',
    'programming education game',
    'coding FPS game free download',
    'learn Python through gaming',
    'learn Java through gaming',
    'learn C programming game',
    'AI code grader game',
    'Ollama Qwen coding game',
    'UE5 FPS coding',
    'immersive coding experience',
    'game-based programming education',
    'coding shooter game',
    'syntax shooting game',
    'programming challenges FPS',
  ],
  authors: [{ name: 'PLADE Team', url: 'https://plade.web.app' }],
  creator: 'PLADE Team — CMR College of Engineering & Technology',
  publisher: 'PLADE',
  applicationName: 'PLADE',
  category: 'Education, Gaming',
  classification: 'Educational Game',

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://plade.web.app',
    siteName: 'PLADE',
    title: 'PLADE — Learn Code. Shoot Targets. The FPS Coding Education Game.',
    description:
      'The world\'s first FPS where your weapons are code. Built on Unreal Engine 5 with AI-powered code evaluation. Master Python, Java, and C through immersive shooter gameplay. Free download for Windows.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PLADE — FPS Coding Game built on Unreal Engine 5',
        type: 'image/png',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'PLADE — Learn Code. Shoot Targets.',
    description:
      'The world\'s first FPS coding game. Shoot syntax targets, solve challenges, master programming through Unreal Engine 5 gameplay.',
    images: ['/og-image.png'],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: 'https://plade.web.app',
  },

  verification: {
    // Add your Google Search Console verification code here
    // google: 'your-verification-code',
  },

  other: {
    'theme-color': '#07080C',
    'color-scheme': 'dark',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'PLADE',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#07080C',
  colorScheme: 'dark',
};

/* =============================================
   JSON-LD STRUCTURED DATA
   ============================================= */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'PLADE',
  alternateName: 'PLADE Game',
  description:
    'A first-person shooter coding education game built on Unreal Engine 5. Learn Python, Java, and C by shooting syntax targets and solving coding challenges with AI-powered code evaluation.',
  url: 'https://plade.web.app',
  applicationCategory: 'GameApplication',
  applicationSubCategory: 'EducationalGame',
  operatingSystem: 'Windows 10, Windows 11',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
  softwareVersion: '1.0.0',
  fileSize: '2GB',
  downloadUrl: 'https://plade.web.app/#download',
  screenshot: 'https://plade.web.app/og-image.png',
  author: {
    '@type': 'Organization',
    name: 'PLADE Team',
    url: 'https://plade.web.app',
    parentOrganization: {
      '@type': 'EducationalOrganization',
      name: 'CMR College of Engineering & Technology',
    },
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '120',
    bestRating: '5',
    worstRating: '1',
  },
  keywords:
    'coding game, FPS coding game, learn to code, programming game, Unreal Engine 5, AI code evaluation, gamified learning, Python, Java, C',
};

const jsonLdFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is PLADE?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PLADE is a free first-person shooter (FPS) coding education game built on Unreal Engine 5. Players shoot syntax targets, solve coding challenges mid-combat, and master Python, Java, and C through immersive gameplay with AI-powered code evaluation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is PLADE free to download?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, PLADE is completely free to download and play. No account is required. Just install, launch, and start learning to code through FPS gameplay.',
      },
    },
    {
      '@type': 'Question',
      name: 'What programming languages does PLADE support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PLADE currently supports Python, Java, and C. Each language unlocks unique challenge types and progressively harder syntax arenas.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does PLADE require an internet connection?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. PLADE works fully offline using a local LLM (Ollama with Qwen-7B) for AI code evaluation. There is zero cloud dependency.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the system requirements for PLADE?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PLADE requires Windows 10 or 11 (x64) with UE5 Runtime. A GPU with at least 4GB VRAM is recommended for smooth gameplay.',
      },
    },
  ],
};

const jsonLdWebSite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'PLADE',
  alternateName: 'PLADE — FPS Coding Game',
  url: 'https://plade.web.app',
  description:
    'PLADE is the world\'s first FPS coding game where your weapons are code. Built on Unreal Engine 5 with AI-powered evaluation.',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://plade.web.app/?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rajdhani:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&family=Outfit:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />

        {/* Structured Data — JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
