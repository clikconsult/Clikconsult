export const posts = [
  {
    slug: 'why-your-website-speed-is-costing-you-money',
    category: 'Web Development',
    title: 'Why your website speed is costing you money — and what to do about it',
    excerpt: 'A one-second delay in page load time can cut conversions by 7%. Here\'s how to diagnose and fix the biggest performance killers on your site.',
    date: 'May 28, 2025',
    readTime: '6 min',
    color: 'from-cyan-500/10 to-blue-500/5',
    content: [
      {
        type: 'intro',
        text: 'Your website could be leaking revenue every single day — and you might not even know it. Performance research consistently shows that for every one-second increase in page load time, conversion rates drop by around 7%. For a business doing ₦500,000 a month in online sales, that\'s ₦35,000 lost for every extra second visitors wait.',
      },
      {
        type: 'h2',
        text: 'The metrics that actually matter',
      },
      {
        type: 'p',
        text: 'Google measures page performance using Core Web Vitals — three specific metrics that have a direct impact on both user experience and search rankings. Largest Contentful Paint (LCP) measures how fast your main content loads. First Input Delay (FID) measures how quickly the page responds to clicks. Cumulative Layout Shift (CLS) measures how much the page jumps around as it loads.',
      },
      {
        type: 'p',
        text: 'Most websites we audit fail at least one of these. The good news is that the fixes are well understood — they just require deliberate engineering decisions rather than guesswork.',
      },
      {
        type: 'h2',
        text: 'The five most common performance killers',
      },
      {
        type: 'list',
        items: [
          'Unoptimised images — the single biggest culprit on most sites. A full-resolution JPEG that hasn\'t been compressed or converted to WebP can be 10× larger than it needs to be.',
          'Render-blocking JavaScript — scripts that load in the page head and delay everything else from rendering. Defer non-critical JS and it can shave hundreds of milliseconds instantly.',
          'No caching headers — returning visitors download everything fresh on every visit. A proper cache-control strategy means repeat visits are near-instant.',
          'Cheap shared hosting — if your server response time (TTFB) is over 600ms, no amount of frontend optimisation will fully compensate. Move to a modern edge host.',
          'Too many third-party scripts — every analytics tag, chatbot, and ad pixel adds to your load time. Audit your tag manager and cut anything you\'re not actively using.',
        ],
      },
      {
        type: 'h2',
        text: 'How to diagnose your own site',
      },
      {
        type: 'p',
        text: 'Run your URL through Google PageSpeed Insights (free, at pagespeed.web.dev). It will give you a score out of 100 for both mobile and desktop, flag every specific issue it finds, and estimate the time savings for each fix. Start with the "Opportunities" section — those are the highest-impact items.',
      },
      {
        type: 'p',
        text: 'Also run WebPageTest.org with a real Nigerian mobile connection profile. This shows you what your actual users experience, not a server in the US. The numbers are often much worse — and much more honest.',
      },
      {
        type: 'h2',
        text: 'Quick wins you can do today',
      },
      {
        type: 'list',
        items: [
          'Convert all images to WebP format and add width/height attributes to every img tag.',
          'Add loading="lazy" to all images below the fold.',
          'Move all non-critical script tags to the bottom of the body, or add defer/async attributes.',
          'Enable Gzip or Brotli compression on your server.',
          'Set cache-control headers for static assets (CSS, JS, images) to at least 1 year.',
        ],
      },
      {
        type: 'p',
        text: 'Done correctly, these five changes alone can improve LCP by 30–50% on most sites. If you want a full performance audit of your site, we do these as part of our web development engagements — or as a standalone audit for existing sites.',
      },
    ],
  },
  {
    slug: 'react-native-vs-flutter-2025',
    category: 'Mobile Development',
    title: 'React Native vs Flutter in 2025: an honest comparison for business owners',
    excerpt: 'Not a developer comparison — a practical guide to help you decide which framework makes more sense for your app and your budget.',
    date: 'May 14, 2025',
    readTime: '8 min',
    color: 'from-violet-500/10 to-purple-500/5',
    content: [
      {
        type: 'intro',
        text: 'If you\'re planning to build a mobile app in 2025, you\'ll almost certainly hear both React Native and Flutter recommended. Both are excellent. Both can produce high-quality apps for iOS and Android from a single codebase. But they make different trade-offs, and which one is right for your project depends on factors most articles never address.',
      },
      {
        type: 'h2',
        text: 'What they have in common',
      },
      {
        type: 'p',
        text: 'Both React Native (built by Meta) and Flutter (built by Google) allow you to write one codebase and deploy to both iOS and Android. Both have mature ecosystems, large communities, and strong corporate backing. Both can deliver apps that perform smoothly and look indistinguishable from native apps to most users.',
      },
      {
        type: 'h2',
        text: 'Where they differ',
      },
      {
        type: 'p',
        text: 'React Native uses JavaScript and renders using native platform components. This means your app automatically inherits platform-specific UI conventions — a date picker on iOS looks like an iOS date picker, and on Android like an Android one. Flutter, by contrast, draws everything itself using its own rendering engine (Skia/Impeller). This gives Flutter pixel-perfect consistency across platforms, but your UI is technically the same on both rather than natively adapted.',
      },
      {
        type: 'h2',
        text: 'The practical decision framework',
      },
      {
        type: 'list',
        items: [
          'Choose React Native if your team already uses JavaScript or React for web development. The learning curve is dramatically lower, and you can potentially share code between web and mobile.',
          'Choose Flutter if UI consistency is critical — fintech dashboards, data-heavy tools, or apps where brand precision matters more than platform conventions.',
          'Choose React Native if you\'re integrating with a large JavaScript ecosystem or existing Node.js backend.',
          'Choose Flutter if your target audience is primarily on lower-end Android devices — Flutter\'s rendering engine often performs more consistently across device tiers.',
          'Choose React Native if time-to-market is the priority and you have JS developers available.',
        ],
      },
      {
        type: 'h2',
        text: 'Cost implications',
      },
      {
        type: 'p',
        text: 'From a cost perspective, both frameworks are roughly equivalent for a typical project. The bigger cost variable is talent: React Native developers are more abundant and generally command slightly lower rates because the JavaScript talent pool is deeper. Flutter developers are more specialised and harder to find in Nigeria specifically, which can affect timelines and day-rates.',
      },
      {
        type: 'h2',
        text: 'Our recommendation',
      },
      {
        type: 'p',
        text: 'For most business applications — e-commerce apps, service apps, internal tools — we default to React Native for the reasons above. Flutter is our recommendation for apps where the interface is the product: trading platforms, design tools, health-tracking apps, or anything where the visual experience needs to be absolutely controlled.',
      },
    ],
  },
  {
    slug: 'automating-your-sales-pipeline',
    category: 'Automation',
    title: 'How we automated a client\'s entire sales pipeline — and what we learned',
    excerpt: 'A behind-the-scenes look at an automation project that saved 30 hours per week and increased lead follow-up speed by 10×.',
    date: 'April 30, 2025',
    readTime: '7 min',
    color: 'from-amber-500/10 to-orange-500/5',
    content: [
      {
        type: 'intro',
        text: 'Earlier this year, we worked with a Lagos-based B2B services firm that was growing fast — but drowning in manual admin. Their sales team was spending four hours every day on tasks that had nothing to do with selling: copying data between spreadsheets, manually sending follow-up emails, updating a CRM that nobody trusted because it was always out of date.',
      },
      {
        type: 'h2',
        text: 'The problem in numbers',
      },
      {
        type: 'p',
        text: 'Before we started, we asked the team to track every manual task for one week. The results: 28 hours per week on data entry across three systems that didn\'t talk to each other. Average time from a new lead arriving to first follow-up contact: 18 hours. Leads that fell through the cracks because no one noticed them in the inbox: roughly 15% per month.',
      },
      {
        type: 'h2',
        text: 'What we built',
      },
      {
        type: 'p',
        text: 'The automation we designed had four main components. First, a web form connected directly to their CRM (HubSpot) via API — no more copying emails into spreadsheets. Second, an automated email sequence triggered the moment a lead was created: an immediate acknowledgement, a follow-up with relevant case studies at 24 hours, and a check-in at 72 hours if no reply. Third, a Slack notification to the assigned sales rep the instant a new lead came in, with all context already pulled from the CRM. Fourth, a weekly pipeline report generated automatically and emailed to the management team every Monday morning.',
      },
      {
        type: 'h2',
        text: 'The results after 60 days',
      },
      {
        type: 'list',
        items: [
          'Manual data entry time: from 28 hours/week to under 2 hours/week.',
          'Average lead response time: from 18 hours to under 12 minutes.',
          'Leads falling through the cracks: from 15% to under 1%.',
          'Sales team capacity freed up for actual selling: estimated 26 hours per week across the team.',
        ],
      },
      {
        type: 'h2',
        text: 'What we learned',
      },
      {
        type: 'p',
        text: 'The most valuable lesson from this project was that the technology was the easy part. The hard part was process design — understanding exactly what "a lead" meant in their context, what information needed to be captured, what different lead sources looked like, and what the sales team\'s actual workflow was (which differed significantly from what the management thought it was).',
      },
      {
        type: 'p',
        text: 'We always spend at least a week on process mapping before we write any automation code. Rushing that phase is how you automate a broken process and make it run faster — which is worse than doing nothing.',
      },
    ],
  },
  {
    slug: 'seo-for-nigerian-businesses-2025',
    category: 'Digital Marketing',
    title: 'SEO for Nigerian businesses in 2025: what actually works right now',
    excerpt: 'The SEO tactics that move the needle for local and regional businesses in Nigeria — from Google Business to niche content clusters.',
    date: 'April 15, 2025',
    readTime: '10 min',
    color: 'from-emerald-500/10 to-teal-500/5',
    content: [
      {
        type: 'intro',
        text: 'Nigerian SEO in 2025 is a different game from what most generic SEO guides describe. The competitive landscape, the search behaviour, the infrastructure constraints, and the Google algorithm factors that matter most are all distinct. This is what we\'ve learned running SEO campaigns for Nigerian businesses over the past six years.',
      },
      {
        type: 'h2',
        text: 'Mobile-first is not optional — it\'s everything',
      },
      {
        type: 'p',
        text: 'Over 85% of Nigerian internet traffic comes from mobile devices, often on 3G or variable 4G connections. Google knows this and ranks Nigerian search results with mobile performance as a primary signal. A site that loads in 2 seconds on a fast connection but takes 9 seconds on a Lagos mobile network will rank poorly, full stop. Every SEO engagement we run starts with a mobile performance audit.',
      },
      {
        type: 'h2',
        text: 'Local SEO: the most underutilised opportunity',
      },
      {
        type: 'p',
        text: 'An astonishing number of Nigerian businesses have unclaimed, incomplete, or incorrect Google Business profiles. For any business with a physical location or a defined service area, optimising your Google Business profile is the single highest-ROI SEO activity available. It\'s free, takes a few hours, and for local searches it often ranks above organic results entirely.',
      },
      {
        type: 'list',
        items: [
          'Claim and verify your Google Business profile if you haven\'t already.',
          'Add every service you offer as a specific service with its own description.',
          'Upload at least 10 real photos of your premises, team, and work.',
          'Actively solicit reviews from happy customers — this is the #1 local ranking factor.',
          'Post updates weekly to signal that the business is active.',
        ],
      },
      {
        type: 'h2',
        text: 'Content: go narrow and deep, not broad',
      },
      {
        type: 'p',
        text: 'The era of publishing generic "10 tips for small business owners" articles is over. Google rewards topical authority — being the most comprehensive source on a specific topic within a specific context. For a Nigerian logistics company, that means writing genuinely useful, detailed content about last-mile delivery in Lagos, customs clearance for imports, warehousing options in specific states. Content that only a real expert in the Nigerian context could write.',
      },
      {
        type: 'h2',
        text: 'Technical SEO fundamentals that still matter',
      },
      {
        type: 'list',
        items: [
          'HTTPS is non-negotiable. Google explicitly penalises non-secure sites.',
          'Make sure your site is indexed — run site:yourdomain.com in Google and check what comes up.',
          'Fix broken links. Crawl your site with Screaming Frog (free for under 500 URLs) and fix every 404.',
          'Add structured data markup for your business type — this enables rich results in search.',
          'Submit an XML sitemap to Google Search Console and monitor it for errors.',
        ],
      },
    ],
  },
  {
    slug: 'google-ads-nigeria-beginners-guide',
    category: 'Digital Marketing',
    title: 'Running Google Ads in Nigeria: a practical beginner\'s guide',
    excerpt: 'From account setup to your first campaign — everything a Nigerian business owner needs to know before spending a naira on Google Ads.',
    date: 'March 28, 2025',
    readTime: '12 min',
    color: 'from-rose-500/10 to-pink-500/5',
    content: [
      {
        type: 'intro',
        text: 'Google Ads is one of the most powerful tools available to Nigerian businesses — and one of the most commonly wasted. We\'ve seen businesses pour hundreds of thousands of naira into campaigns that generated nothing because they skipped the fundamentals. This guide covers everything you need to know before you spend a single kobo.',
      },
      {
        type: 'h2',
        text: 'What Google Ads actually is',
      },
      {
        type: 'p',
        text: 'Google Ads lets you pay to appear at the top of Google search results for specific keywords. You only pay when someone clicks your ad (Pay-Per-Click or PPC). The cost per click varies by industry, competition, and quality of your ads — in Nigeria, average CPCs are generally lower than in the US or UK, which makes it relatively affordable to get started.',
      },
      {
        type: 'h2',
        text: 'Before you create a single ad',
      },
      {
        type: 'list',
        items: [
          'You need a destination that converts. Sending ad traffic to a slow, unclear, or mobile-unfriendly website is burning money. Fix the landing page first.',
          'Set up Google Analytics 4 and connect it to your Ads account. Without conversion tracking, you\'re flying blind.',
          'Define what a "conversion" means for your business: a form submission, a phone call, a purchase. Every campaign needs a measurable goal.',
          'Do keyword research before setting budgets. Google Keyword Planner (free) shows you search volume and estimated CPC for your target keywords.',
        ],
      },
      {
        type: 'h2',
        text: 'Starting budget guidance',
      },
      {
        type: 'p',
        text: 'For Nigerian campaigns targeting local audiences, a daily budget of ₦5,000–₦15,000 is typically enough to get meaningful data in the first month. Anything less and you won\'t get enough clicks to draw valid conclusions. For national campaigns or competitive categories (insurance, finance, real estate), you\'ll need to start higher.',
      },
      {
        type: 'h2',
        text: 'Campaign structure best practices',
      },
      {
        type: 'list',
        items: [
          'Create separate campaigns for separate products or services. Don\'t mix everything into one campaign.',
          'Use Exact Match keywords to start — they give you more control and waste less budget on irrelevant searches.',
          'Write at least 3 ad variations per ad group and let Google test which performs best.',
          'Use negative keywords aggressively. If you sell "office furniture in Lagos", add "DIY" and "free" and "how to make" as negatives.',
          'Check your Search Terms report weekly — it shows what people actually typed to trigger your ads, and you\'ll always find irrelevant searches to add as negatives.',
        ],
      },
      {
        type: 'h2',
        text: 'The biggest mistakes we see',
      },
      {
        type: 'p',
        text: 'The most common mistake is running Broad Match keywords with no negative keywords and a small budget. This causes Google to spend your entire budget on loosely related searches that never convert. The second most common mistake is not having conversion tracking set up, which means you have no idea which keywords are actually generating business and which are wasting money.',
      },
    ],
  },
  {
    slug: 'when-to-build-a-mobile-app',
    category: 'Mobile Development',
    title: 'When should your business actually build a mobile app?',
    excerpt: 'Not every business needs an app. Here\'s an honest framework to decide whether a mobile app will genuinely help your growth — or just drain your budget.',
    date: 'March 10, 2025',
    readTime: '5 min',
    color: 'from-blue-500/10 to-indigo-500/5',
    content: [
      {
        type: 'intro',
        text: 'Every few months, a business owner comes to us convinced they need a mobile app. Sometimes they\'re right. More often, what they actually need is a fast, well-designed mobile website — and they\'d be better served spending their app budget on that instead. Here\'s how to tell the difference.',
      },
      {
        type: 'h2',
        text: 'When a mobile app genuinely makes sense',
      },
      {
        type: 'list',
        items: [
          'Your users need to access your service repeatedly, ideally daily or multiple times per week. Occasional use doesn\'t justify the friction of an app download.',
          'You need offline functionality — content or features that need to work without internet access.',
          'You need access to device hardware: camera, GPS, push notifications, biometrics, or Bluetooth.',
          'Your core experience is interactive and session-based — a game, a fitness tracker, a trading platform.',
          'You have enough loyal users that app downloads are a realistic expectation, not wishful thinking.',
        ],
      },
      {
        type: 'h2',
        text: 'When a mobile-optimised website is the better answer',
      },
      {
        type: 'list',
        items: [
          'You primarily need to be discoverable to new customers. Apps don\'t rank on Google; websites do.',
          'Your transactions are infrequent — once a month or less. Customers won\'t keep an app for that.',
          'You\'re an early-stage business still figuring out product-market fit. Build web first, validate, then consider app.',
          'Your budget is under $10,000. A well-built app below this budget is rare; a great website is achievable.',
        ],
      },
      {
        type: 'h2',
        text: 'The progressive web app middle ground',
      },
      {
        type: 'p',
        text: 'Progressive Web Apps (PWAs) are a genuine middle ground worth knowing about. A PWA is a website that can be installed on a phone\'s home screen, works offline, sends push notifications, and loads nearly as fast as a native app. For many business use cases — especially in Nigeria where app store friction and data costs matter — a PWA delivers most of the app experience at a fraction of the cost.',
      },
      {
        type: 'h2',
        text: 'The honest question to ask yourself',
      },
      {
        type: 'p',
        text: 'Before commissioning an app, ask: "Would my customers download this, keep it on their phone, and use it regularly?" If you can\'t answer that with confidence based on actual user research or evidence, start with web and validate demand first. We\'ve seen too many ₦3–5M app budgets produce software that nobody uses. A great website serving the same need would have been a fraction of the cost and far more effective.',
      },
    ],
  },
];

export const categoryColors = {
  'Web Development': 'text-cyan-400 border-cyan-400/30 bg-cyan-400/5',
  'Mobile Development': 'text-violet-400 border-violet-400/30 bg-violet-400/5',
  'Automation': 'text-amber-400 border-amber-400/30 bg-amber-400/5',
  'Digital Marketing': 'text-emerald-400 border-emerald-400/30 bg-emerald-400/5',
};
