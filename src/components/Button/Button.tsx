import React, { useState } from 'react';

import styles from './Button.module.scss'

interface ButtonProps {
    text: string;
    style?: React.CSSProperties;
    className?: string;
    progress?: number;
    showProgress?: boolean;
    onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ text, style, className = '', progress = 0, showProgress = false, onClick }) => {
    const [classes, setClasses] = useState<string[]>([styles.button, className])

    const onMouseDown = () => {
        setClasses([styles.button, styles.pressed, className])
    }

    const onMouseUp = () => {
        setClasses([styles.button, className])
    }

    return (
        <div className={classes.join(' ')}
            style={style}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onClick={onClick}>
            {showProgress && <div className={styles.progress} style={{ width: `${progress}%` }} />}
            <span className={styles.buttonText}>{text}</span>
        </div>
    );
};