import {Suspense, lazy} from 'react';
import {motion} from 'framer-motion';

import bgImg from '../../assets/images/background.png';
import {ArrowRight} from '../../assets/icons/ArrowRight';
import {useIsDesktop} from '../../hooks/useIsDesktop';
import {ScrollIndicator} from '../ui/ScrollIndicator';
import {AnimatedHeadline} from '../ui/AnimatedHeadline';
import {useMouseParallax} from '../../hooks/useMouseParallax';
import {FloatingTechTags} from '../ui/FloatingTechTags';
import {useShouldRenderCanvas} from '../../hooks/useShouldRenderCanvas';

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
        <img
          src={bgImg}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, var(--color-bg-deep) 30%, rgba(10,8,18,0.7) 70%, rgba(10,8,18,0.4) 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, var(--color-bg-deep) 0%, transparent 15%, transparent 80%, var(--color-bg-deep) 100%)',
          }}
        />
      </div>

      {isDesktop && (
        <Suspense fallback={null}>
          <FloatingTechTags />
        </Suspense>
      )}

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
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                delay: 0.12,
              }}
              className="font-display font-bold leading-tight text-text-primary mb-6"
              style={{fontSize: 'clamp(2rem, 5vw, 4rem)'}}
            >
              Design and code <AnimatedHeadline /> apps
            </motion.h1>

            <motion.p
              initial={{opacity: 0, y: 30}}
              animate={{opacity: 1, y: 0}}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                delay: 0.22,
              }}
              className="text-text-secondary text-lg leading-relaxed mb-10"
            >
              I'm{' '}
              <span className="text-text-primary font-medium">
                Aram Suqiasyan
              </span>
              , a full-stack software engineer with 7+ years crafting
              high-performance web and mobile experiences with React, Node.js,
              and TypeScript.
            </motion.p>

            <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                delay: 0.32,
              }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-button font-display font-semibold text-white transition-all duration-300"
                style={{
                  background: 'var(--gradient-brand)',
                }}
              >
                View My Work
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-button font-display font-semibold text-text-primary transition-all duration-300"
                style={{
                  background: 'rgba(248,250,252,0.05)',
                  border: 'var(--border-subtle)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    'var(--color-brand-vivid-a40)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    'rgba(255,255,255,0.07)';
                }}
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
