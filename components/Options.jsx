import React from "react";
import styles from '../styles/Home.module.css'

export default function Options() {
    return (
        <div className="flex justify-end">
            {/* search bar */}
            <div class={`${styles.search} mr-4`}>
                <input type="text" class={styles.search__input} spellCheck="false" placeholder="Search for batches" />
                <div className={`${styles.btn} ${styles.btn__primary}`}><p>Search</p></div>
            </div>
            {/* filter button */}
            <div class={`${styles.btn} ${styles.btn__secondary}`}><p>Filters</p></div>
            {/* toggle */}
            <div title="toggle dark mode" className={`${styles.toggleButton} ml-5 mt-1 mx-1 toggle-button inline drop-shadow-3xl`}>
                <div className={`${styles.switch}`}>
                    <div className={styles.switch__1}>
                        <input id="switch-1" type="checkbox" />
                        <label for="switch-1"></label>
                    </div>
                </div>
            </div>
        </div>
    )
}