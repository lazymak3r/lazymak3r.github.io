import styles from './Hero.module.scss'
import { HeroTextAnimated } from '../HeroTextAnimated/HeroTextAnimated'

export const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.textWrapper}>
                    <span className={`${styles.text} header-text`}>Design</span>
                    <span className={`${styles.text} header-text`}>and code</span>
                    <HeroTextAnimated />
                    <span className={`${styles.text} header-text`}>apps</span>
                </div>
            </div>
        </div>
    )
}

