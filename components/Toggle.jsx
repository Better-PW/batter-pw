import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes"

export default function Toggle() {
    const [gotTheme, setGotTheme] = useState(false);
    const { theme, setTheme } = useTheme();
    return (
        <div title="toggle dark mode" className={`${styles.toggleButton} ml-2 toggle-button inline  pt-1`}>
            <label>
                <div className={styles.toggle}>
                    <input onChange={() => {
                        setTheme(theme === 'dark' ? 'light' : 'dark');
                        window.dispatchEvent(new Event('storage'));
                    }} className={styles.toggleState} type="checkbox" name="check" value="check" checked={theme === "dark"} />
                    <div className={styles.indicator + " bg-black dark:bg-white"}></div>
                </div>
                <div className={styles.labelText}></div>
            </label>
        </div>
    )
}