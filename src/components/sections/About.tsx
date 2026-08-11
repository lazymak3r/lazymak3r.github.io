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
import {SectionWrapper} from '../ui/SectionWrapper';
import {springSnappy, springDefault} from '../../lib/motion';

const highlights = [
  {icon: '🤖', label: 'Design and ship agentic pipelines end to end'},
  {icon: '📊', label: 'Build LLM evaluation and review-gate systems'},
  {icon: '🔍', label: 'Add tracing, cost, and latency control'},
  {icon: '🛠️', label: 'Take a system from MVP to unattended production'},
  {icon: '👥', label: 'Lead engineering teams and set standards'},
];

const myApps = [
  {
    name: 'Trakio',
    tagline: 'Finance Tracker',
    description:
      'Personal and small-business finance tracker on the App Store, with recurring transaction scheduling and subscription billing.',
    icon: trakioImg,
    iconBg: null,
    appStore: 'https://apps.apple.com/us/app/trakio/id6748575726',
    playStore: 'https://play.google.com/store/apps/details?id=com.trakio',
  },
  {
    name: 'Localingo',
    tagline: 'Local Translation',
    description:
      'Offline translator and peer-to-peer chat running translation models entirely on device via Google ML Kit. Two phones pair over local Wi-Fi or hotspot for real-time translated conversation - no network dependency, no data collection.',
    icon: localingoImg,
    iconBg: null,
    appStore:
      'https://apps.apple.com/us/app/localingo-local-translation/id6754503625',
  },
  {
    name: 'MusicDrop',
    tagline: 'Offline Music Player',
    description:
      'Audio library management app with offline playback, background playing, and high-quality audio. Shipped independently on the App Store.',
    icon: musicdropImg,
    iconBg: null,
    appStore:
      'https://apps.apple.com/us/app/musicdrop-music-playlists/id6705131153',
  },
  {
    name: 'Meloman',
    tagline: 'Music Quiz Challenge',
    description:
      'Music quiz on the App Store, Google Play, and as a Telegram Mini App. Uses AI source separation to isolate melody from vocals for Instrumental Mode, real-time multiplayer Duels over WebSockets, and StoreKit purchases - with Telegram bots and long-running agent processes in production.',
    icon: melomanImg,
    iconBg: null,
    telegram: 'https://t.me/playmeloman_bot/meloman',
    appStore:
      'https://apps.apple.com/us/app/meloman-music-quiz-challenge/id6759525943',
    playStore: 'https://play.google.com/store/apps/details?id=com.meloman',
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
              Senior software engineer with 10+ years building production
              systems across iGaming, fintech, insurance, and SaaS, now focused
              on LLM-powered automation.
            </p>
            <p className="text-text-secondary leading-relaxed">
              I ship agentic pipelines on frontier models - Claude, GPT, and
              Gemini - using provider-native tool calling, structured outputs,
              and MCP integrations, with the measurement layer underneath:
              rubric-based LLM evaluation, human-calibrated review gates,
              tracing, and cost and latency control.
            </p>
            <p className="text-text-secondary leading-relaxed">
              I build generation-to-QA-to-publish workflows that run unattended
              at volume, with idempotency, retries, and failure isolation as
              first-class concerns. I've also delivered B2B iGaming platform
              systems including a bonus engine, player account management, and
              fraud detection.
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
                    Senior AI Engineer - Agentic Systems, LLM Evaluation and
                    Production Reliability
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
                      4
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

                  <div className="flex flex-wrap gap-3 pt-1 mt-auto">
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
