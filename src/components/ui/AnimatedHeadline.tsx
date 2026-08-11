import {useState, useEffect} from 'react';
import {AnimatePresence, motion} from 'framer-motion';

import {springSnappy} from '../../lib/motion';

const words = [
  'evaluated',
  'observable',
  'auditable',
  'measurable',
  'monitored',
];

const widestWord = words.reduce((a, b) => (b.length > a.length ? b : a), '');

export function AnimatedHeadline() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <span aria-live="polite" className="inline-grid align-bottom">
      <span
        aria-hidden="true"
        className="invisible col-start-1 row-start-1 whitespace-nowrap"
      >
        {widestWord}
      </span>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{opacity: 0, y: 24}}
          animate={{opacity: 1, y: 0}}
          exit={{opacity: 0, y: -24}}
          transition={springSnappy}
          className="col-start-1 row-start-1 justify-self-start gradient-brand-text whitespace-nowrap"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
