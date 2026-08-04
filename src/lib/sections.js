// All site content lives here. Edit this file; the components read from it.
//
// Each section becomes one slide. Fields:
//   id       url hash and menu anchor
//   title    slide heading
//   kicker   small label above the title
//   year     right-aligned in the menu
//   blurb    one or two sentences, sets the frame
//   points   [{ label, text }] — the substance
//   links    [{ label, href }]
//   group    menu grouping
//   draft    true = unfinished. Visible in `npm run dev` with a marker,
//            omitted entirely from production builds.
//
// Because drafts are dropped at build time they never reach the prerendered
// HTML, so an unfinished section can sit here indefinitely without leaking.

import { dev } from '$app/environment';

export const profile = {
  name: 'Matt Mankins',
  handle: '@mankins',
  email: 'mankins@gmail.com',
  tagline: 'Builder. Engineer. Systems for humans and AI.',
  intro:
    '25+ years building production systems and the organizations around them. ' +
    'A decade shipping AI. Currently building an open-source agentic runtime.',
  links: [
    { label: 'GitHub', href: 'https://github.com/mankins' },
    { label: 'Thanks, Computer', href: 'https://www.thanks.computer' },
    { label: 'Email', href: 'mailto:mankins@gmail.com' }
  ]
};

const allSections = [
  {
    id: 'thanks-computer',
    group: 'Now',
    kicker: 'Lorem Labs · open source, MPL-2.0',
    title: 'Thanks, Computer',
    year: '2024–',
    blurb:
      'An agent runtime built on the idea that the hard part is not the model, ' +
      'it is everything around it: durability, evidence, and being able to say ' +
      'what happened.',
    points: [
      {
        label: 'Agent runtime',
        text:
          'Small operations — JSON in, JSON out, any language — compose into op ' +
          'stacks dispatched by trigger conditions that route work across models, ' +
          'tools, and services. An alternative to LangGraph with durability and ' +
          'human review as first-class concerns.'
      },
      {
        label: 'Exactly-once durable execution',
        text:
          'Continuations suspend a run for a slow model, a webhook, or a human ' +
          'reviewer and resume days later — exactly once, surviving restarts. ' +
          'Idempotency is the contract, not a retry policy bolted on afterward.'
      },
      {
        label: 'Root cause analysis as a first-class surface',
        text:
          'Step-by-step replay of every decision, so a run that did something ' +
          'surprising three days ago can be walked forward rather than guessed at.'
      },
      {
        label: 'Cost and reliability instrumentation',
        text:
          'Token and cost accounting with explicit model provenance — requested, ' +
          'effective, response — presence-gated so an absent value never reads as ' +
          'zero, O(1) memory over unbounded streams, non-fatal by construction.'
      },
      {
        label: 'Developer productivity as the default',
        text:
          'A CLI and TUI, a Homebrew tap the release workflow bumps automatically ' +
          'and gates on non-prerelease tags, a four-platform GitHub Actions matrix ' +
          'on native runners, GHCR plus a self-hosted OCI registry.'
      },
      {
        label: 'Speaks protocols that already exist',
        text:
          'Email/SMTP, HTTP, MCP, and cron as first-class ingress. An Anthropic ' +
          'Messages gateway means an existing client points at the runtime ' +
          'unchanged and picks up policy, retrieval grounding, and cost accounting ' +
          'on the way through.'
      }
    ],
    links: [
      { label: 'thanks.computer', href: 'https://www.thanks.computer' },
      { label: 'Docs', href: 'https://www.thanks.computer/docs' }
    ]
  },

  {
    id: 'driplit',
    group: 'Now',
    kicker: 'Lorem Labs · reference application',
    title: 'Dripl.it',
    year: '2025–',
    blurb: 'Serialized reading delivered by email. Email is the entire interface.',
    points: [
      {
        label: 'Retrieval you can defend',
        text:
          'Intent parse → title/author lookup → embed → vector search under a ' +
          'relevance floor → catalog recognition → grounded reply. The model ' +
          'handles intent and prose; the database stays the source of truth, so ' +
          'recommendations cannot be hallucinated into existence.'
      },
      {
        label: 'Open Library shadow catalog',
        text:
          '3.1M popularity-ranked works distilled from ~30M, shipped as read-only ' +
          'sharded SQLite and queried locally, so naming a book the system does ' +
          'not carry never touches an external API on the request path.'
      },
      {
        label: 'One good question',
        text:
          'A conversational loop with accruing turn state that asks a single ' +
          'clarifying question rather than guessing.'
      }
    ],
    links: [{ label: 'dripl.it', href: 'https://www.dripl.it/' }]
  },

  {
    id: 'cliproom',
    group: 'Now',
    kicker: 'Lorem Labs · Mac App Store',
    title: 'ClipRoom',
    year: '2025',
    blurb:
      'Video into a searchable, AI-indexed clip library. Everything runs ' +
      'on-device — no service dependency, no upload.',
    points: [
      {
        label: 'Shot-level multimodal index',
        text:
          'Shot boundary detection, then quantized SigLIP vision and text encoders ' +
          'on ONNX Runtime embedding frames and queries into one space, so clips ' +
          'are findable by description rather than filename.'
      },
      {
        label: 'Speech',
        text:
          'whisper.cpp ASR with model tiers resolved and fetched from Hugging Face ' +
          'at first use and cached locally; pyannote diarization; word-level ' +
          'timestamps driving caption rendering.'
      },
      {
        label: 'Progressive capability unlock',
        text:
          'Processing starts immediately while optional models install in parallel. ' +
          'No setup wizard, no configure-then-wait. Tauri (Rust) with a native ' +
          'Swift helper, built against Mac App Store sandbox constraints.'
      }
    ],
    links: [
      {
        label: 'Mac App Store',
        href: 'https://apps.apple.com/us/app/cliproom-ai-video-editor/id6760618553?mt=12'
      }
    ]
  },

  {
    id: 'the-faithful',
    group: 'Now',
    kicker: 'Producer · and built the platform',
    title: 'The Faithful',
    year: '2021–',
    blurb:
      'A feature documentary by Annie Berman, and the streaming and ' +
      'virtual-cinema platform that released it through its festival run.',
    points: [
      {
        label: 'Title launch, end to end',
        text:
          'Scheduled screenings and ticketing, Stripe checkout, entitlement-gated ' +
          'playback (HLS through Mux, SMPTE timecode), a virtual theatre with live ' +
          'chat, and an admin surface.'
      },
      {
        label: 'Built to run itself',
        text:
          'SvelteKit on Cloud Run, Cloud Functions, and Firebase Hosting, with ' +
          'secrets resolved per environment from Secret Manager and a pub/sub ' +
          'video processing pipeline.'
      }
    ],
    links: [{ label: 'the-faithful.com', href: 'https://www.the-faithful.com/' }]
  },

  {
    id: 'in-a-moon',
    group: 'Lorem Labs',
    kicker: 'Creator payments',
    title: 'In a Moon',
    year: '2022–',
    blurb:
      'A creator-payment platform built end to end — ledger, apps, extensions, ' +
      'embeddable widgets, edge, and search.',
    points: [
      {
        label: 'Web components',
        text:
          '<inamoon-like> and <inamoon-creator> let any site collect appreciation ' +
          'for named creators without adopting a platform.'
      },
      {
        label: 'Mac and iOS application',
        text:
          'Native apps wrapping a Safari Web Extension from one shared Swift ' +
          'codebase: ASWebAuthenticationSession with PKCE, Keychain-backed session ' +
          'envelopes shared to the extension via App Groups, QR-code pairing, and ' +
          'fastlane release automation.'
      },
      {
        label: 'Cross-browser extensions',
        text:
          'Manifest V3 across Chrome, Firefox, and Safari, recognizing people and ' +
          'projects on the web and awarding kudos.'
      },
      {
        label: 'Settlement',
        text:
          'A double-entry point ledger on TigerBeetle — escrow funding, chunked ' +
          'fanout, idempotent per recipient. BigQuery materializes an immutable ' +
          'per-period snapshot; reconciliation must clear tolerance thresholds ' +
          'before a period is allowed to settle.'
      }
    ],
    links: [{ label: 'inamoon.com', href: 'https://www.inamoon.com' }]
  },

  {
    id: 'emoji-print',
    group: 'Lorem Labs',
    kicker: 'Trained and served in-browser',
    title: 'Emoji-Print',
    year: '2024',
    blurb:
      'A learned embedding space that maps a page to emoji, trained and run ' +
      'entirely in the browser.',
    points: [
      {
        label: 'An embedding, not labels',
        text:
          'A TensorFlow.js model maps page signals into a latent emoji space via an ' +
          'MLP backbone plus an emoji-prototype head — chosen over flat ' +
          'classification for expressive consistency.'
      },
      {
        label: 'No train/serve skew',
        text:
          'The runtime featurizer is reused inside the trainer, so the features at ' +
          'training time are the features at inference time. Offline inference in ' +
          'an MV3 extension worker, p95 under 20ms after warmup.'
      }
    ]
  },

  {
    id: 'conde-nast',
    group: 'Work',
    kicker: 'Director of Engineering, Monetization',
    title: 'Condé Nast',
    year: '2017–2020',
    blurb:
      'Led the division’s largest engineering group — consumer revenue, martech, ' +
      'ecommerce, and ads — across every Condé Nast property. Seven engineering ' +
      'manager reports; 100+ including product and design.',
    points: [
      {
        label: 'Ads library and TTFM',
        text:
          'Rebuilt the ad library around time-to-first-money, a metric I introduced ' +
          'to align engineering and revenue. Viewability and impression ' +
          'instrumentation over Google Ad Manager, with first-money slot metrics ' +
          'that distinguish paid inventory from everything else.'
      },
      {
        label: 'Event platform',
        text:
          'The event tier behind every property — browser beacons into Kafka, ' +
          'enriched server-side, acks=all against a 15ms batching window, a ' +
          'firehose topic plus per-application topics so each consumer sets its own ' +
          'retention, indexed to Elasticsearch under a content-hash document id so ' +
          'a replayed event lands once.'
      },
      {
        label: 'Segmentation',
        text:
          'A signal service inside the ad request path: parallel fan-out to ' +
          'pluggable segmenters under a 500ms timeout, failing open rather than ' +
          'delaying the ad call, with hash-bucketed rollout per user. Behavioral, ' +
          'entitlement, and modeled lookalike audiences.'
      },
      {
        label: 'Paywall',
        text:
          'A database-less edge paywall supporting dramatic revenue growth at no ' +
          'latency cost (JWT, VCL).'
      },
      {
        label: 'The part that lasted',
        text:
          'Managers I hired and grew have since gone on to Apple, Amazon, and Google.'
      }
    ]
  },

  {
    id: 'xrpl',
    group: 'Work',
    kicker: 'Executive Director',
    title: 'XRP Ledger Foundation',
    year: '2025',
    blurb:
      'Created the foundation in France to hold the IP for the XRP Ledger, and ' +
      'built the mechanism by which validators join an $83B chain.',
    points: [
      {
        label: 'Unique Node List',
        text:
          'Architected and implemented the list responsible for consensus — how ' +
          'validator nodes are admitted to the network.'
      },
      {
        label: 'Governance to production',
        text:
          'Validator changes arrive as pull requests against a YAML source ' +
          'requiring three approvals. On merge, CI compiles YAML to JSON, ' +
          'cryptographically signs it, and publishes a timestamped artifact plus a ' +
          'staged list that a monthly cron promotes to the live endpoint. ' +
          'Multi-party approval and a staging window, applied to an artifact that ' +
          'cannot be wrong.'
      },
      {
        label: 'No direct authority',
        text:
          'Aligned independent validator operators across organizations, none of ' +
          'whom reported to anyone. Also coordinated NPM vulnerability response ' +
          'across several organizations.'
      }
    ],
    links: [{ label: 'xrplf/unl', href: 'https://github.com/xrplf/unl' }]
  },

  {
    id: 'web-monetization',
    group: 'Work',
    kicker: 'Research Fellow, Mozilla',
    title: 'Business Models for the Web',
    year: '2021–2022',
    blurb:
      'A fellowship on how the open web pays for itself after third-party ' +
      'cookies.',
    points: [
      {
        label: 'Accept-Monetization header',
        text:
          'Worked with the W3C on a content-negotiation header letting a browser ' +
          'state how it is willing to pay for a page — advertising, subscription, ' +
          'or micropayment — before the page is built.'
      },
      {
        label: 'Kudos retroactive-reward algorithm',
        text:
          'An open algorithm for retroactively rewarding the people who helped you: ' +
          'attribution treated as an incentive-design problem rather than a ' +
          'tracking one.'
      },
      {
        label: 'Privacy-preserving advertising',
        text: 'Prototyped in-Firefox advertising that does not depend on third-party identity.'
      }
    ]
  },

  {
    id: 'dmetrics',
    group: 'Work',
    kicker: 'COO / VP Engineering',
    title: 'dMetrics · Minsky',
    year: '2016',
    blurb:
      'An early AI/NLP startup with a team of PhDs. I named and shipped its ' +
      'product, Minsky — after Marvin.',
    points: [
      {
        label: 'ML training and serving infrastructure',
        text:
          'Designed the production pipeline that trained and served adaptive-learning ' +
          'NLP models — offline training runs and the online path both (Apache ' +
          'Spark, Java, AWS microservices).'
      },
      {
        label: 'Research to production',
        text:
          'Led the ML/NLP researchers, and built the interfaces that made model ' +
          'output legible to the ad agencies and pharmaceutical companies who ' +
          'bought it. Taking research into production is a translation problem as ' +
          'much as an engineering one.'
      }
    ],
    links: [{ label: 'minsky.ai', href: 'https://www.minsky.ai/' }]
  },

  {
    id: 'fast-company',
    group: 'Work',
    kicker: 'CTO',
    title: 'Fast Company',
    year: '2011–2014',
    blurb:
      'Grew engineering from one person to a full UX, frontend, backend, and ' +
      'infrastructure team, and moved the magazine to the cloud.',
    points: [
      {
        label: 'Event-driven rendering',
        text:
          'A microservice rendering layer keeping multiple CMSes aligned in ' +
          'production (ZeroMQ, Node.js). The same architecture Thanks, Computer is ' +
          'built on, a decade later.'
      },
      {
        label: 'Cloud migration',
        text:
          'Moved the data center to EC2, cutting infrastructure cost about 25% ' +
          'while absorbing millions of monthly readers and several production ' +
          'releases a day.'
      },
      {
        label: 'NLP auto-linking',
        text:
          'Machine learning over editorial copy for navigation, SEO, and ad ' +
          'context — text-based algorithms to engage readers by interest. ML that ' +
          'showed up in revenue.'
      }
    ],
    links: [
      {
        label: 'diginomica interview, 2014',
        href: 'https://diginomica.com/running-media-cloud-style-qa-fast-company-cto-matt-mankins'
      }
    ]
  },

  {
    id: 'kudos',
    group: 'Earlier',
    kicker: 'Developer rewards infrastructure',
    title: 'Kudos',
    year: '2022–',
    blurb: 'Paying the people whose open-source work everything else is built on.',
    points: [
      {
        label: 'Firehose and analysis',
        text:
          'A GitHub firehose ingester recording realtime commit data (Node, Redis, ' +
          'BigQuery, Ably), plus a GitHub Action analyzing repository contributors ' +
          'via SBOM analysis (Go, Docker, Bash).'
      },
      {
        label: 'Keys and money',
        text:
          'MPC key-generation ceremonies using Go threshold signatures; addresses ' +
          'served from a custom DNS server over BIP-32 HD wallets; a ' +
          'FinCEN-compliant money-transfer architecture with built-in KYC.'
      }
    ]
  },

  {
    id: 'fair-tread',
    group: 'Earlier',
    kicker: 'Fair Tread · Adieu.io · Atri',
    title: 'Buy your own ads',
    year: '2014–2016',
    blurb:
      '“What if you could buy your own ads, and show things you want to see ' +
      'instead of things you don’t?”',
    points: [
      {
        label: 'Real-time bidding, consumer side',
        text:
          'An interface to AppNexus letting people bid on their own ad inventory ' +
          'through real-time bidding.'
      }
    ]
  },

  {
    id: 'journalism-online',
    group: 'Earlier',
    kicker: 'Developer',
    title: 'Journalism Online',
    year: '2010–2011',
    blurb: 'The first production metered paywall for newspapers.',
    points: [
      {
        label: 'One tag',
        text:
          'A single JavaScript drop-in rendered a metered paywall modal against a ' +
          'Cassandra backend — no integration project required of the publisher.'
      }
    ]
  },

  {
    id: 'lorem-ipsum-books',
    group: 'Earlier',
    kicker: 'Owner · Cambridge, Massachusetts',
    title: 'Lorem Ipsum Books',
    year: '2003–2011',
    blurb:
      'Converted a derelict bicycle shop into a bricks-and-clicks bookstore whose ' +
      'shelves were simultaneously listed on Amazon.',
    points: [
      {
        label: 'Point of sale, from scratch',
        text:
          'A custom web-based POS integrating online marketplaces and local ' +
          'peripherals (XMPP, Perl, MySQL), with Google Shopping integration and ' +
          'custom credit-card flows.'
      }
    ]
  },

  {
    id: 'vert',
    group: 'Earlier',
    kicker: 'Founder, Director of Internet',
    title: 'Vert',
    year: '2000–2002',
    blurb: 'Location-based advertising on taxi-top digital signage. VC-backed.',
    points: [
      {
        label: 'An ad server and a Linux distribution',
        text:
          'Built the ad server, and a custom Linux distribution that displayed ' +
          'advertisements on top of taxis using GPS and cellular modems. Several US ' +
          'and international patents for the general architecture.'
      }
    ]
  },

  {
    id: 'emumail',
    group: 'Earlier',
    kicker: 'Founder · sold 2001',
    title: 'EMUmail · SMTP.com',
    year: '1998–2001',
    blurb:
      'The first white-label webmail service. If you had a dot com and needed ' +
      'webmail, you came to us. The company went public.',
    points: [
      {
        label: 'Webmail before webmail',
        text:
          'Open-sourced “Webex” in 1995, probably the first webmail in the US. ' +
          'Clients included Intel, UPS, Rackspace, and Harvard.'
      },
      {
        label: 'A custom SMTP server',
        text: 'With digital signature support, in Perl, when that was an unusual idea.'
      }
    ]
  },

  {
    id: 'education',
    group: 'Earlier',
    kicker: 'Education',
    title: 'MIT Media Lab · University of Miami',
    year: '1996 · 2003',
    blurb: '',
    points: [
      {
        label: 'MIT Media Lab',
        text:
          'M.S., Media Arts & Sciences. Split between the Smart Cities and Context ' +
          'Aware Computing groups, building a bottom-up architecture for ' +
          'location-linked information. Readers: Bill Mitchell and Tim Berners-Lee.'
      },
      {
        label: 'University of Miami',
        text: 'B.S., Mathematics and Computer Science.'
      }
    ]
  },

  // ————————————————————————————————————————————————————————————
  // Below here needs your words. Delete any you don't want to include.
  // ————————————————————————————————————————————————————————————

  {
    id: 'cyan',
    group: 'Earlier',
    kicker: 'Cyan.Me',
    title: 'Cyan',
    year: '',
    blurb: '',
    draft: true,
    points: [{ label: 'What it was', text: '' }]
  },
  {
    id: 'ka-zam',
    group: 'Earlier',
    kicker: '',
    title: 'Ka-Zam',
    year: '',
    blurb: '',
    draft: true,
    points: [{ label: 'What it was', text: '' }]
  },
  {
    id: 'semicolons',
    group: 'Earlier',
    kicker: 'Semicolons.com',
    title: 'Semicolons',
    year: '',
    blurb: '',
    draft: true,
    points: [
      {
        label: 'What I know',
        text: 'SaaS dashboard — SvelteKit, Tailwind, Stripe, Redis, Ably.'
      }
    ]
  },
  {
    id: 'monetized-link',
    group: 'Earlier',
    kicker: 'Monetized.Link',
    title: 'Web2 / Web3 bridge for creators',
    year: '2022',
    blurb: '',
    draft: true,
    points: [
      {
        label: 'What I know',
        text:
          'Firebase backend and SvelteKit UI; an image service generating social ' +
          'PNGs on Canvas; multi-modal purchase flows including tokens (Solidity, ' +
          'Unlock Protocol, The Graph).'
      }
    ]
  },
  {
    id: 'votetastic',
    group: 'Earlier',
    kicker: '',
    title: 'Votetastic',
    year: '',
    blurb: '',
    draft: true,
    points: [{ label: 'What it was', text: '' }]
  },
  {
    id: 'ident-agency',
    group: 'Earlier',
    kicker: 'Ident Agency',
    title: 'Identity infrastructure',
    year: '',
    blurb: '',
    draft: true,
    points: [{ label: 'What it was', text: '' }]
  },
  {
    id: 'setler',
    group: 'Earlier',
    kicker: 'Setler',
    title: 'Setler',
    year: '',
    blurb: '',
    draft: true,
    points: [{ label: 'What it was', text: '' }]
  }
];

/** Drafts are shown while developing and dropped from production builds. */
export const sections = allSections.filter((s) => dev || !s.draft);

/** Derived from the visible set, so a group of only drafts leaves no empty heading. */
export const groups = [...new Set(sections.map((s) => s.group))];

/** Count of what's being withheld — surfaced in dev so it isn't forgotten. */
export const draftCount = allSections.length - sections.length;
