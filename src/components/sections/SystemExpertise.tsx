import {SectionWrapper} from '../ui/SectionWrapper';
import {igamingSystems} from '../../data/igamingSystems';
import {ExpertiseCardGrid} from '../ui/ExpertiseCardGrid';

export function SystemExpertise() {
  return (
    <SectionWrapper id="system-expertise">
      <div className="section-container">
        <div className="mb-14 text-center">
          <p className="text-brand-soft text-sm font-medium tracking-widest uppercase mb-3">
            System Expertise
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary">
            Deep Technical{' '}
            <span className="gradient-brand-text">Knowledge</span>
          </h2>
          <p className="mt-4 text-text-secondary text-sm max-w-xl mx-auto">
            Critical backend domains in iGaming - from high-load infrastructure
            to compliance and real-time data pipelines.
          </p>
        </div>

        <ExpertiseCardGrid items={igamingSystems} />
      </div>
    </SectionWrapper>
  );
}
