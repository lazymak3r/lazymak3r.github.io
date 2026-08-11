import {aiSystems} from '../../data/aiSystems';
import {SectionWrapper} from '../ui/SectionWrapper';
import {ExpertiseCardGrid} from '../ui/ExpertiseCardGrid';

export function AiSystems() {
  return (
    <SectionWrapper id="ai-systems">
      <div className="section-container">
        <div className="mb-14 text-center">
          <p className="text-brand-soft text-sm font-medium tracking-widest uppercase mb-3">
            AI Engineering
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary text-balance">
            Agentic Systems, <span className="gradient-brand-text">Measured</span>
          </h2>
          <p className="mt-4 text-text-secondary text-sm max-w-2xl mx-auto">
            Generation-to-QA-to-publish workflows that run unattended at volume -
            built on frontier models, with the evaluation and reliability layer
            underneath.
          </p>
        </div>

        <ExpertiseCardGrid items={aiSystems} />
      </div>
    </SectionWrapper>
  );
}
