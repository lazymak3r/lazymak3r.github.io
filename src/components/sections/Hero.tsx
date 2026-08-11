import {Suspense, lazy} from 'react';
import {motion} from 'framer-motion';

import {ArrowRight} from '../../assets/icons/ArrowRight';
import {HeroDotField} from '../ui/HeroDotField';
import {useIsDesktop} from '../../hooks/useIsDesktop';
import {ScrollIndicator} from '../ui/ScrollIndicator';
import {AnimatedHeadline} from '../ui/AnimatedHeadline';
import {useMouseParallax} from '../../hooks/useMouseParallax';
import {useShouldRenderCanvas} from '../../hooks/useShouldRenderCanvas';
import {easeStandard} from '../../lib/motion';

const HeroScene = lazy(() =>
  import('../three/HeroScene').then((m) => ({default: m.HeroScene})),
);

export function Hero() {
  const mousePos = useMouseParallax();
  const renderCanvas = useShouldRenderCanvas();
  const isDesktop = useIsDesktop();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{background: 'var(--gradient-hero)'}}
    >
      <div className="absolute inset-0 pointer-events-none" style={{zIndex: 0}}>
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(90rem 60rem at 78% 18%, rgba(255,88,38,0.10) 0%, transparent 60%), radial-gradient(70rem 50rem at 8% 88%, rgba(255,88,38,0.06) 0%, transparent 62%), radial-gradient(60rem 40rem at 50% 0%, #ffffff 0%, transparent 70%)',
          }}
        />
        <HeroDotField />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, var(--color-bg-deep) 12%, rgba(250,250,250,0.82) 42%, rgba(250,250,250,0.25) 72%, transparent 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, var(--color-bg-deep) 0%, transparent 18%, transparent 78%, var(--color-bg-deep) 100%)',
          }}
        />
      </div>

      <div
        className="relative flex flex-col flex-1 section-container lg:max-w-[1400px]"
        style={{zIndex: 'var(--z-hero-content)' as unknown as number}}
      >
        <div className="flex flex-col lg:flex-row items-center flex-1 gap-8 py-24 justify-center lg:justify-start">
          <div className="w-full lg:w-2/5">
            <motion.h1
              initial={{opacity: 0, y: 40}}
              animate={{opacity: 1, y: 0}}
              transition={{
                duration: 0.5,
                ease: easeStandard,
                delay: 0.12,
              }}
              className="font-display font-bold text-text-primary mb-6"
              style={{fontSize: 'clamp(2rem, 5vw, 4rem)'}}
            >
              <span className="block">
                Build and ship <AnimatedHeadline />
              </span>
              <span className="block">AI systems</span>
            </motion.h1>

            <motion.p
              initial={{opacity: 0, y: 30}}
              animate={{opacity: 1, y: 0}}
              transition={{
                duration: 0.5,
                ease: easeStandard,
                delay: 0.22,
              }}
              className="text-text-secondary text-lg leading-relaxed mb-6"
            >
              I'm{' '}
              <span className="text-text-primary font-medium">
                Aram Suqiasyan
              </span>
              , a senior engineer with 10+ years building production systems,
              now focused on LLM-powered automation - agentic pipelines on
              Claude, GPT, and Gemini, with the measurement layer underneath:
              rubric-based evaluation, human-calibrated review gates, tracing,
              and cost and latency control.
            </motion.p>

            <motion.p
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{
                duration: 0.5,
                ease: easeStandard,
                delay: 0.27,
              }}
              className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-text-muted mb-10"
            >
              <span>Yerevan, Armenia (GMT+4)</span>
              <span aria-hidden="true">·</span>
              <span className="text-brand-soft">Open to Remote</span>
            </motion.p>

            <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{
                duration: 0.4,
                ease: easeStandard,
                delay: 0.32,
              }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="pressable inline-flex items-center gap-2 px-6 py-3 rounded-button font-display font-semibold text-white"
                style={{
                  background: 'var(--gradient-brand)',
                }}
              >
                View My Work
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="pressable inline-flex items-center gap-2 px-6 py-3 rounded-button font-display font-semibold text-text-primary bg-bg-elevated border border-[var(--color-separator)] hover:border-[var(--color-brand-vivid-a40)] transition-colors duration-300"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>

          {renderCanvas && isDesktop && (
            <div className="w-3/5 self-stretch relative">
              <Suspense fallback={null}>
                <HeroScene mousePos={mousePos} />
              </Suspense>
            </div>
          )}
        </div>
      </div>

      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 0.8, duration: 0.4}}
        className="relative flex justify-center pb-10"
        style={{zIndex: 'var(--z-hero-content)' as unknown as number}}
      >
        <ScrollIndicator />
      </motion.div>
    </section>
  );
}
