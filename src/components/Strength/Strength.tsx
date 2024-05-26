import React, { useMemo } from 'react';
import { FaNodeJs } from "react-icons/fa";
import { VscRegex } from "react-icons/vsc";
import { LiaEthereum } from "react-icons/lia";
import { DiJqueryLogo } from "react-icons/di";
import { DiGit, DiCss3 } from "react-icons/di";
import { BsFillBootstrapFill } from "react-icons/bs";
import { AiFillHtml5, AiOutlineFieldTime } from "react-icons/ai";
import { IoLogoReact, IoLogoAngular, IoFlameOutline, IoLogoJavascript } from "react-icons/io5";
import {
    SiReact,
    SiNestjs,
    SiMongodb,
    SiExpress,
    SiReactivex,
    SiTypescript,
    SiWeb3Dotjs,
    SiTailwindcss,
    SiAdobephotoshop
} from "react-icons/si";

import styles from "./Strength.module.scss";

interface Skill {
    id: number;
    icon: React.ElementType;
    percent: number;
    color: string;
    title: string;
}

export const Strength: React.FC = () => {
    const skills: Skill[] = useMemo(() => [
        {
            id: 1,
            icon: IoLogoJavascript,
            percent: 100,
            color: '#e9d44d',
            title: 'Javascript'
        },
        {
            id: 2,
            icon: IoLogoReact,
            percent: 90,
            color: '#5ed3f3',
            title: 'React'
        },
        {
            id: 3,
            icon: IoLogoAngular,
            percent: 90,
            color: '#d6002f',
            title: 'Angular 2+'
        },
        {
            id: 4,
            icon: SiReactivex,
            percent: 90,
            color: '#e9068c',
            title: 'RxJs'
        },
        {
            id: 5,
            icon: SiTypescript,
            percent: 90,
            color: '#2f74c0',
            title: 'TypeScript'
        },
        {
            id: 6,
            icon: SiAdobephotoshop,
            percent: 60,
            color: '#1e7de7',
            title: 'Photoshop'
        },
        {
            id: 7,
            icon: AiFillHtml5,
            percent: 100,
            color: '#dd4b25',
            title: 'HTML 5'
        },
        {
            id: 8,
            icon: DiCss3,
            percent: 100,
            color: '#016db4',
            title: 'CSS 3'
        },
        {
            id: 9,
            icon: BsFillBootstrapFill,
            percent: 90,
            color: '#6e12ef',
            title: 'Bootstrap'
        },
        {
            id: 10,
            icon: DiGit,
            percent: 90,
            color: '#e94e31',
            title: 'Git'
        },
        {
            id: 11,
            icon: DiJqueryLogo,
            percent: 100,
            color: '#1e75a8',
            title: 'jQuery'
        },
        {
            id: 12,
            icon: VscRegex,
            percent: 80,
            color: '#f75f03',
            title: 'RegEx'
        },
        {
            id: 13,
            icon: SiReact,
            percent: 100,
            color: '#5ed3f3',
            title: 'React-Native'
        },
        {
            id: 14,
            icon: SiReactivex,
            percent: 90,
            color: '#b42acb',
            title: 'NgRx'
        },
        {
            id: 15,
            icon: FaNodeJs,
            percent: 90,
            color: '#6db450',
            title: 'NodeJS'
        },
        {
            id: 16,
            icon: SiExpress,
            percent: 90,
            color: '#afafaf',
            title: 'ExpressJS'
        },
        {
            id: 17,
            icon: SiMongodb,
            percent: 90,
            color: '#118d4d',
            title: 'MongoDB'
        },
        {
            id: 18,
            icon: SiNestjs,
            percent: 90,
            color: '#ea2845',
            title: 'NestJS'
        },
        {
            id: 19,
            icon: SiTailwindcss,
            percent: 90,
            color: '#0ea5e9',
            title: 'Tailwind Css'
        },
        {
            id: 20,
            icon: SiWeb3Dotjs,
            percent: 90,
            color: '#e8642e',
            title: 'Web3.js'
        },
        {
            id: 20,
            icon: LiaEthereum,
            percent: 90,
            color: '#2435a0',
            title: 'Ethers.js'
        },
        {
            id: 21,
            icon: AiOutlineFieldTime,
            percent: 100,
            color: '#66c200',
            title: 'Fast Coding'
        }
    ], []);


    return (
        <div id={'strength'} className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.wrap}>
                    <div className={styles.boxWrapper}>
                        <h3 className={styles.boxTitle}>MY SKILLS</h3>
                        <div className={styles.skills}>
                            {skills.map(skillItem => {
                                const Icon = skillItem.icon;
                                return (
                                    <div
                                        key={`${skillItem.id}`}
                                        className={styles.skillItem}>
                                        <div className={styles.titleWrapper}>
                                            <Icon size={30}/>
                                            <span className={styles.title}>{skillItem.title}</span>
                                        </div>
                                        <div className={styles.progressWrapper}>
                                            <div
                                                className={styles.progress}
                                                style={{
                                                    backgroundColor: skillItem.color,
                                                    width: `${skillItem.percent}%`
                                                }}
                                            />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
