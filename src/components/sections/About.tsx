import {motion} from 'framer-motion';

import lazyImg from '../../assets/images/lazy.jpg';
import trakioImg from '../../assets/images/trakio.png';
import melomanImg from '../../assets/images/meloman.png';
import localingoImg from '../../assets/images/localingo.png';
import musicdropImg from '../../assets/images/musicdrop.png';
import appStoreBadge from '../../assets/images/download_on_the_app_store.svg';
import telegramBadge from '../../assets/images/open_in_telegram.svg';
import playStoreBadge from '../../assets/images/get_It_on_google_play.svg';
import {ArrowRight} from '../../assets/icons/ArrowRight';
import {IconGlobe} from '../../assets/icons/IconGlobe';
import {SectionWrapper} from '../ui/SectionWrapper';
import {springSnappy, springDefault} from '../../lib/motion';

const highlights = [
  {icon: '🤖', label: 'Architect and ship agentic pipelines end to end'},
  {icon: '📊', label: 'Build eval layers: LLM-as-judge, golden datasets, regressions'},
  {icon: '🔎', label: 'Design RAG and hybrid retrieval over your own data'},
  {icon: '🔀', label: 'Multi-provider routing with runtime fallback and cost control'},
  {icon: '🛠️', label: 'Take a system from MVP to unattended production'},
];

const myApps = [
  {
    name: 'Meloman',
    tagline: 'Music Quiz Challenge',
    description:
      'Solo-built music quiz on the App Store, Google Play, and as a Telegram Mini App. Uses AI source separation to isolate melody from vocals for Instrumental Mode, real-time multiplayer Duels over WebSockets, and StoreKit and Telegram payment flows; runs Telegram bots and long-running agent processes continuously in production, with reconnection and state recovery so live matches survive restarts.',
    icon: melomanImg,
    iconBg: null,
    url: 'https://playmeloman.app',
    telegram: 'https://t.me/playmeloman_bot/meloman',
    appStore:
      'https://apps.apple.com/us/app/meloman-music-quiz-challenge/id6759525943',
    playStore: 'https://play.google.com/store/apps/details?id=com.meloman',
  },
  {
    name: 'Localingo',
    tagline: 'Local Translation',
    description:
      'Offline translator and peer-to-peer chat running translation models entirely on device via Google ML Kit. Two phones pair over local Wi-Fi or hotspot for real-time translated conversation with no network dependency and no data collection - local inference chosen for privacy and zero-latency operation.',
    icon: localingoImg,
    iconBg: null,
    appStore:
      'https://apps.apple.com/us/app/localingo-local-translation/id6754503625',
  },
  {
    name: 'Trakio',
    tagline: 'Budget & Expenses',
    description:
      'Personal and small-business finance tracker on the App Store, with recurring transaction scheduling and subscription billing.',
    icon: trakioImg,
    iconBg: null,
    appStore: 'https://apps.apple.com/us/app/trakio/id6748575726',
    playStore: 'https://play.google.com/store/apps/details?id=com.trakio',
  },
  {
    name: 'MusicDrop',
    tagline: 'Audio Library Management',
    description: 'Audio library management app, shipped independently.',
    icon: musicdropImg,
    iconBg: null,
    appStore:
      'https://apps.apple.com/us/app/musicdrop-music-playlists/id6705131153',
  },
];

export function About() {
  return (
    <SectionWrapper id="about">
      <div className="section-container">
        <div className="mb-14">
          <p className="text-brand-soft text-sm font-medium tracking-widest uppercase mb-3">
            Who I am
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary">
            About <span className="gradient-brand-text">Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{opacity: 0, x: -50}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true, amount: 0.3}}
            transition={{duration: 0.45, ease: 'easeOut'}}
            className="space-y-5"
          >
            <p className="text-text-secondary leading-relaxed">
              Senior product engineer with 10+ years in production systems and
              B2B iGaming platform delivery, now building LLM automations and
              agentic systems with a strong focus on evals and RAG.
            </p>
            <p className="text-text-secondary leading-relaxed">
              I architect and ship agentic pipelines on Claude, OpenAI models,
              and Gemini using provider-native SDKs and custom MCP integrations,
              with runtime provider fallback, retries, and per-run cost and
              latency tracking. I've shipped an evaluation layer with
              LLM-as-judge scoring, golden datasets, regression suites that run
              on prompt or model change, and tracing across multi-step runs.
            </p>
            <p className="text-text-secondary leading-relaxed">
              I built a generation-to-QA-to-publish workflow for the Atlassian
              ecosystem that runs unattended at volume, with idempotency,
              rate-limit handling, and failure isolation as first-class
              concerns. I've delivered B2B iGaming platform systems including a
              bonus engine, player account management, and fraud detection,
              alongside Telegram Mini Apps and long-running Telegram bots in
              production.
            </p>

            <div className="pt-4 space-y-3">
              <p className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-3">
                How I can help you
              </p>
              {highlights.map((h) => (
                <div key={h.label} className="flex items-center gap-3">
                  <span className="text-base">{h.icon}</span>
                  <span className="text-text-secondary text-sm">{h.label}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="#contact"
                className="pressable inline-flex items-center gap-2 px-6 py-3 rounded-button font-medium text-sm text-white"
                style={{
                  background: 'var(--gradient-brand)',
                }}
              >
                Get in touch
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{opacity: 0, x: 50}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true, amount: 0.3}}
            transition={{duration: 0.45, ease: 'easeOut', delay: 0.1}}
            whileHover={{scale: 1.02, transition: springDefault}}
            className="relative"
          >
            <div className="card-gradient-border relative">
              <div className="p-8 text-center space-y-6">
                <img
                  src={lazyImg}
                  alt="Aram Suqiasyan"
                  className="w-32 h-32 mx-auto rounded-full object-cover"
                />
                <div>
                  <h3 className="font-display font-bold text-xl text-text-primary">
                    Aram Suqiasyan
                  </h3>
                  <p className="text-brand-soft text-sm mt-1 text-balance">
                    Senior AI Product Engineer - Agentic Systems, AI
                    Automations, LLM Evals and RAG
                  </p>
                </div>
                <div className="flex justify-center gap-6 pt-2">
                  <div className="text-center">
                    <p className="font-bold text-2xl gradient-brand-text font-display">
                      10+
                    </p>
                    <p className="text-text-muted text-xs mt-1">Years exp.</p>
                  </div>
                  <div className="w-px bg-[var(--color-separator)]" />
                  <div className="text-center">
                    <p className="font-bold text-2xl gradient-brand-text font-display">
                      5
                    </p>
                    <p className="text-text-muted text-xs mt-1">Domains</p>
                  </div>
                  <div className="w-px bg-[var(--color-separator)]" />
                  <div className="text-center">
                    <p className="font-bold text-2xl gradient-brand-text font-display">
                      Remote
                    </p>
                    <p className="text-text-muted text-xs mt-1">GMT+4</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{opacity: 0, y: 40}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, amount: 0.15}}
          transition={{duration: 0.45, ease: 'easeOut'}}
          className="mt-20"
        >
          <div className="mb-8">
            <p className="text-brand-soft text-sm font-medium tracking-widest uppercase mb-3">
              Indie Dev Projects
            </p>
            <h3 className="font-display font-bold text-2xl md:text-3xl text-text-primary">
              Apps I've <span className="gradient-brand-text">Shipped</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {myApps.map((app, i) => (
              <motion.div
                key={app.name}
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, amount: 0.2}}
                transition={{duration: 0.35, delay: i * 0.07, ease: 'easeOut'}}
                className="card-gradient-border"
              >
                <div className="p-6 space-y-4 h-full flex flex-col">
                  <div className="flex items-center gap-4">
                    <div className="relative shrink-0 w-16 h-16">
                      <img
                        src={app.icon}
                        alt=""
                        aria-hidden="true"
                        className="absolute inset-0 w-full h-full rounded-2xl object-cover scale-110 blur-xl opacity-70"
                      />
                      <img
                        src={app.icon}
                        alt={app.name}
                        className="relative w-full h-full rounded-2xl object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-text-primary text-lg leading-tight">
                        {app.name}
                      </h4>
                      <p className="text-brand-soft text-xs font-medium mt-0.5">
                        {app.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-text-secondary text-sm leading-relaxed">
                    {app.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 pt-1 mt-auto">
                    {app.url && (
                      <motion.a
                        href={app.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{scale: 1.06}}
                        whileTap={{scale: 0.97}}
                        transition={springSnappy}
                        className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-[var(--color-n950)] bg-[var(--color-n950)] px-3 text-white"
                        style={{transformOrigin: 'center'}}
                      >
                        <IconGlobe className="w-4 h-4 shrink-0" />
                        <span className="flex flex-col leading-none text-left">
                          <span className="text-[8px] tracking-[0.08em] uppercase opacity-70">
                            Visit
                          </span>
                          <span className="text-[13px] font-semibold leading-tight">
                            {app.url.replace('https://', '')}
                          </span>
                        </span>
                      </motion.a>
                    )}
                    {app.appStore && (
                      <motion.a
                        href={app.appStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{scale: 1.06}}
                        whileTap={{scale: 0.97}}
                        transition={springSnappy}
                        className="inline-block"
                        style={{transformOrigin: 'center'}}
                      >
                        <img
                          src={appStoreBadge}
                          alt="Download on the App Store"
                          className="h-9"
                        />
                      </motion.a>
                    )}
                    {app.playStore && (
                      <motion.a
                        href={app.playStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{scale: 1.06}}
                        whileTap={{scale: 0.97}}
                        transition={springSnappy}
                        className="inline-block"
                        style={{transformOrigin: 'center'}}
                      >
                        <img
                          src={playStoreBadge}
                          alt="Get it on Google Play"
                          className="h-9"
                        />
                      </motion.a>
                    )}
                    {app.telegram && (
                      <motion.a
                        href={app.telegram}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{scale: 1.06}}
                        whileTap={{scale: 0.97}}
                        transition={springSnappy}
                        className="inline-block"
                        style={{transformOrigin: 'center'}}
                      >
                        <img
                          src={telegramBadge}
                          alt="Open in Telegram"
                          className="h-9"
                        />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
