import {SectionWrapper} from '../ui/SectionWrapper';
import {igamingSystems} from '../../data/igamingSystems';
import {ExpertiseCardGrid} from '../ui/ExpertiseCardGrid';

export function SystemExpertise() {
  return (
    <SectionWrapper id="system-expertise">
      <div className="section-container">
        <div className="mb-14 text-center">
          <p className="text-brand-soft text-sm font-medium tracking-widest uppercase mb-3">
            iGaming
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary">
            B2B Platform <span className="gradient-brand-text">Delivery</span>
          </h2>
          <p className="mt-4 text-text-secondary text-sm max-w-2xl mx-auto">
            Core systems delivered for a white-label online casino and
            sportsbook, licensed to operators and sold with source code, serving
            LATAM, Asia, Russia, and Middle East markets.
          </p>
        </div>

        <ExpertiseCardGrid items={igamingSystems} />
      </div>
    </SectionWrapper>
  );
}
