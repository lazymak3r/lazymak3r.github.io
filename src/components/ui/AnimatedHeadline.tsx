import {useState, useEffect} from 'react'
import {AnimatePresence, motion} from 'framer-motion'

const words = ['beautiful', 'performant', 'interactive', 'scalable', 'accessible']

export function AnimatedHeadline() {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex(i => (i + 1) % words.length)
        }, 2500)
        return () => clearInterval(timer)
    }, [])

    return (
        <span
            aria-live="polite"
            className="relative inline-block"
        >
      <AnimatePresence mode="wait">
        <motion.span
            key={words[index]}
            initial={{opacity: 0, y: 24}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -24}}
            transition={{duration: 0.3, ease: 'easeInOut'}}
            className="gradient-brand-text"
            style={{display: 'inline-block'}}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
    )
}
