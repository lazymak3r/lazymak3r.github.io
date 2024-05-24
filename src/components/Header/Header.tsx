import classnames from 'classnames';
import {useMemo, useState, useEffect, useCallback} from 'react';

import styles from './Header.module.scss';
import {IoFlameOutline, IoHomeOutline, IoIdCardOutline, IoImagesOutline} from 'react-icons/io5';

import LazyMak3r from '../../assets/images/lazymak3r.jpg';

export const Header = () => {
    const [scrollY, setScrollY] = useState(window.scrollY || window.pageYOffset)
    const [dir, setDir] = useState(-1);

    const navigation = useMemo(() => [
        {id: 'home', icon: <IoHomeOutline/>, title: 'Home',},
        {id: 'about', icon: <IoIdCardOutline/>, title: 'About',},
        {id: 'portfolio', icon: <IoImagesOutline/>, title: 'Portfolio'},
        {id: 'strength', icon: <IoFlameOutline/>, title: 'Strength'},
    ], [])

    const scrollToSection = useCallback((id: string) => {
        const section = document.querySelector(`#${id}`)
        section?.scrollIntoView({behavior: "smooth", block: "start", inline: "start",});
    }, [])

    const scrollHandler = useCallback(() => {
        const currentScrollTop = window.scrollY || window.pageYOffset;
        const minHidePosition = window.innerHeight * 90 / 100;
        setScrollY(currentScrollTop)
        setDir(currentScrollTop > scrollY && currentScrollTop > minHidePosition ? 1 : -1)
    }, [scrollY]);

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return () => {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [scrollHandler]);

    return (
        <div className={`${styles.wrapper} ${dir === -1 ? styles.show : styles.hide}`}>
            <div className={`${styles.container} ${dir === -1 ? styles.show : styles.hide}`}>
                <div className={styles.logoContainer}>
                    <img src={LazyMak3r} alt="LazyMaK3R" className={styles.logo}/>
                </div>

                <div className={styles.nav}>
                    {
                        navigation.map(navigationItem => {
                            return (
                                <div
                                    key={navigationItem.id.toString()}
                                    className={classnames(styles.navItem, 'nav-item')}
                                    onClick={() => scrollToSection(navigationItem.id)}
                                >
                                    <span className={styles.navItemIcon}>{navigationItem.icon}</span>
                                    <span className={styles.navItemTitle}>{navigationItem.title}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}
