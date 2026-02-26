import {motion} from 'framer-motion'

import {hackathons} from '../../data/hackathons'
import {HackathonCard} from '../ui/HackathonCard'
import {SectionWrapper} from '../ui/SectionWrapper'

const gridVariants = {
    hidden: {},
    visible: {transition: {staggerChildren: 0.04}},
}

export function Hackathons() {
    return (
        <SectionWrapper id="hackathons">
            <div className="section-container">
                <div className="mb-14">
                    <p className="text-brand-cyan text-sm font-medium tracking-widest uppercase mb-3">
                        Competitions
                    </p>
                    <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary">
                        Hackathon <span className="gradient-brand-text">Awards</span>
                    </h2>
                    <p className="text-text-secondary mt-4 max-w-xl text-sm">
                        Building under pressure and shipping real products in competitive hackathons.
                    </p>
                </div>

                <motion.div
                    variants={gridVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0, margin: '0px 0px 150px 0px'}}
                    className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl"
                >
                    {hackathons.map(h => (
                        <HackathonCard key={h.id} {...h}/>
                    ))}
                </motion.div>
            </div>
        </SectionWrapper>
    )
}