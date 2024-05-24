import { useMemo, useState } from 'react';
import { useInterval } from "react-use";

import styles from "./HeroTextAnimated.module.scss";

export const HeroTextAnimated = () => {
    const words = useMemo(() => [
        {
            id: 1,
            text: 'JavaScript'
        },
        {
            id: 2,
            text: 'React'
        },
        {
            id: 3,
            text: 'React-Native'
        },
        {
            id: 4,
            text: 'Web3'
        },
        {
            id: 5,
            text: 'Angular 2+'
        },
        {
            id: 6,
            text: 'Node.js'
        },
        {
            id: 7,
            text: 'Express'
        },
        {
            id: 8,
            text: 'NestJS'
        }
    ], [])
    const [index, setIndex] = useState(0)

    useInterval(() => {
        setIndex(index >= words.length - 1 ? 0 : index + 1)
    }, 6000)

    return (
        <span className={styles.textDynamic}>
            {
                words[index].text.split('').map((letter, idx) => {
                    return <span key={`${index}-${idx}`}
                        style={{ animationDelay: `${idx * 0.1}s` }}
                        className={styles.letterDynamic}>{letter}</span>
                })
            }
        </span>
    );
}
