import React, {useMemo} from 'react';
import {AiFillGithub, AiFillLinkedin, AiFillTwitterCircle} from "react-icons/ai";

import styles from './Footer.module.scss'

export const Footer = (props) => {
    const socials = useMemo(() => [
        {
            id: 1,
            icon: AiFillGithub,
            link: 'https://github.com/aramsuqiasyan'
        },
        {
            id: 2,
            icon: AiFillLinkedin,
            link: 'https://www.linkedin.com/in/aram-suqiasyan-476305180/'
        },
        {
            id: 3,
            icon: AiFillTwitterCircle,
            link: 'https://twitter.com/AramSuqiasyan97'
        }
    ], [])

    const openLink = (link) => {
        window.open(link)
    }

    return (
        <div className={styles.container}>
            <span className={styles.copy}>
                Copyright © 2023
            </span>
            <div className={styles.social}>
                {
                    socials.map(social => {
                        const Icon = social.icon;
                        return (
                            <div
                                key={social.id}
                                className={styles.socialItem}
                                onClick={() => openLink(social.link)}
                            >
                                <Icon size={22} color={'#f5f5f7'}/>
                                <span className={styles.cycle}>
                                    <svg
                                        width="40"
                                        height="40"
                                        fill="none"
                                        viewBox="0 0 40 40"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle
                                            r="19"
                                            cx="20"
                                            cy="20"
                                            stroke="url(#cycleGrad)"
                                            strokeDasharray="2 15 8 1 10 8"
                                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                        />
                                        <defs>
                                            <radialGradient
                                                id="cycleGrad" cx="0" cy="0" r="1"
                                                gradientUnits="userSpaceOnUse"
                                                gradientTransform="translate(20 20) rotate(107.904) scale(34.1541)">
                                                <stop offset="0.0870822" stopColor="#60058c"/>
                                                <stop offset="0.69191" stopColor="#4812e4"/>
                                        </radialGradient></defs></svg>
                                </span>
                            </div>
                        )

                    })
                }
            </div>
        </div>
    );
};
