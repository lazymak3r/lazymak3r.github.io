import React, { useCallback, useEffect } from 'react';

import styles from './WorkExperience.module.scss';
import workExperience from '../../assets/files/workExperience.json';
import { format } from 'date-fns';

interface Project {
    title: string;
    link?: string | null;
}

interface WorkExperience {
    id: number;
    title: string;
    startDate: string;
    endDate: string;
    profession: string;
    projects: Project[];
}

export const WorkExperience = () => {
    const startFormat: string = 'MMM yyyy';
    const endFormat: string = 'MMM yyyy';
    const formatDate = useCallback((date: string | null, dateFormat: string): string => {
        return date ? format(date, dateFormat) : format(new Date(), dateFormat);
    }, []);

    const openLink = (link: string | null): void => {
        if (link) {
            window.open(link, '_blank');
        }
    };

    return (
        <div className={styles.container}>
            {workExperience.map((work: WorkExperience) => {
                return (
                    <div className={`${styles.listItem} work-experience-item`} key={`${work.id}`}>
                        <div className={styles.leftSide}>
                            <div className={styles.title}>{work.title}</div>
                            <span className={styles.date}>
                                <span>{formatDate(work.startDate, startFormat)}</span>
                                <span>-</span>
                                <span>{formatDate(work.endDate, endFormat)}</span>
                            </span>
                        </div>
                        <div className={styles.rightSide}>
                            <span className={styles.projects}>
                                <div className={styles.title}>Projects</div>
                                <div className={styles.list}>
                                    {work.projects.map((project: Project) => {
                                        const link: string | null = project.link ?? null;
                                        const key: string = `${work.id}-${project.title}`;
                                        return (
                                            <span
                                                key={key}
                                                className={`${styles.project} ${link ? styles.hasLink : ""}`}
                                                onClick={() => openLink(link)}
                                            >
                                                {project.title}
                                            </span>
                                        );
                                    })}
                                </div>
                            </span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
