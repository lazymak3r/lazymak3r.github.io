import {motion} from 'framer-motion'

import {IconChevronDown} from '../../assets/icons/IconChevronDown'

export function ScrollIndicator() {
    return (
        <motion.a
            href="#about"
            aria-label="Scroll to About section"
            animate={{y: [0, 8, 0]}}
            transition={{duration: 1.5, repeat: Infinity, ease: 'easeInOut'}}
            className="flex flex-col items-center gap-2 text-text-muted hover:text-brand-cyan transition-colors duration-200"
        >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <IconChevronDown className="w-5 h-5"/>
        </motion.a>
    )
}
