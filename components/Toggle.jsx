import React from "react";
import styles from "../styles/Home.module.css"
import { useTheme } from "next-themes" 

export default function Toggle(){
    const { theme, setTheme } = useTheme()
    return (
        <div title="toggle dark mode" className={`${styles.toggleButton} mt-2 ml-2 mx-8 pt-5 toggle-button inline drop-shadow-3xl`}>
        <label>
            <div className={styles.toggle}>
                <input onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className={styles.toggleState} type="checkbox" name="check" value="check" />
                <div className={styles.indicator}></div>
            </div>
            <div className={styles.labelText}></div>
        </label>
    </div>
    )
}