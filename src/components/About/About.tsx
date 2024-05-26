import React, { useEffect, useState } from 'react';
import { IoIdCardOutline } from "react-icons/io5";

import styles from './About.module.scss'
import cv from '../../assets/files/ARAM_SUKIASYAN.pdf'
import { Button } from "../Button/Button";
import { useDownload } from "../../hooks/useDownload";
import { WorkExperience } from "../WorkExperience/WorkExperience";

export const About = () => {
    const [progress, setProgress] = useState(0)
    const { start } = useDownload(({ progress, completed }) => {
        setProgress(completed ? 0 : progress)
    }, cv, 'ARAM_SUKIASYAN.pdf')

    const downloadCV = () => {
        start()
    }

    const sendEmail = (email: string) => {
        let a = document.createElement("a");
        a.href = `mailto:${email}`;
        a.click();
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.main}>
                    <div id={'about-image-box'} className={styles.imageBox}>
                        <div className={styles.imageContainer}>
                            <div className={styles.image} />
                        </div>
                    </div>
                    <div className={styles.information}>
                        <div id={'about-who-am-i'} className={styles.box}>
                            <h3 className={styles.boxTitle}>WHO AM I</h3>
                            <p className={styles.text}>
                                I am a passionate software engineer who strives to create fascinating and breathtaking user experiences.With my user oriented approach I make sure to meet deadlines and provide the best value to the project.
                            </p>
                            <p className={styles.text}>
                                Thank you for checking out my profile, here is a quick overview of my skills and strengths. I'm a full stack software engineer with extensive knowledge of JS, more specifically React, React Native, Node and Angular frameworks.
                            </p>
                            <p className={styles.text}>
                                I have lead front-end teams that launched global SaaS apps, and I have worked with individuals
                                (including many first-timers!) and larger companies on apps from MVP to those with user bases into the hundreds of thousands.
                            </p>
                            <p className={styles.text}>
                                I have created - and improved - dozens of successful applications for clients in areas of social networking,
                                education, entertainment, self-help, fitness, lifestyle, and commerce. In addition, I have taught
                                students JS, HTML, CSS development various courses.
                            </p>
                            <h3 className={styles.text}>How I can help you:</h3>
                            <ul className={styles.list}>
                                <li className={styles.listItem}>
                                    <p className={styles.text}>
                                        Build an app from ideation to MVP and beyond
                                    </p>
                                </li>
                                <li className={styles.listItem}>
                                    <p className={styles.text}>
                                        Revive, update or fix existing applications in need of care and feeding
                                    </p>
                                </li>
                                <li className={styles.listItem}>
                                    <p className={styles.text}>
                                        Integrate new or existing applications into popular back-ends like Firebase or AWS
                                    </p>
                                </li>
                                <li className={styles.listItem}>
                                    <p className={styles.text}>
                                        Get previously stalled app development efforts over the finish line
                                    </p>
                                </li>
                                <li className={styles.listItem}>
                                    <p className={styles.text}>
                                        Perform code reviews
                                    </p>
                                </li>
                            </ul>
                            <div className={styles.buttonsBox}>
                                <Button
                                    showProgress
                                    progress={progress}
                                    text={'Download CV'}
                                    style={{ marginRight: 16 }}
                                    className={styles.downloadCV}
                                    onClick={downloadCV} />

                                <Button
                                    text={'Send E-mail'}
                                    onClick={() => sendEmail('aramsuqiasyan20@gmail.com')} />
                            </div>
                        </div>

                        <div id={'about-work-experience'} className={styles.box}>
                            <h3 className={styles.boxTitle}>WORK EXPERIENCE</h3>
                            <WorkExperience />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
