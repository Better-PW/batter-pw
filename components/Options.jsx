import React from "react";
import styles from '../styles/Home.module.css'

export default function Options() {
    return (
        <div className="flex justify-end">
            {/* search bar */}
            <div className="pt-3 mt-2.5">
            <div class="flex items-center justify-center">
                <div class="flex border-2 rounded">
                    <input type="text" class="px-4 py-2 w-80" placeholder="Search For Batches"/>
                    <button class="flex items-center justify-center px-4 border-l shadow-2xl bg-[#1B00BA] hover:bg-[#D2CFFF] rounded ease-in-out duration-500">
                        <svg class="w-6 h-6 text-white sha" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                        </svg>
                    </button>
                </div>
            </div>
            </div>
            {/* filter button */}
            <div className="inline drop-shadow-2xl ml-2 mt-3 pt-3">
                <button className={`${styles.filterBtn}`}><span className={styles.filterText}>FILTERS</span></button>
            </div>
            {/* toggle */}
            <div title="toggle dark mode" className={`${styles.toggleButton} mt-2 ml-2 mx-8 pt-5 toggle-button inline drop-shadow-3xl`}>
                <label>
                    <div className={styles.toggle}>
                        <input className={styles.toggleState} type="checkbox" name="check" value="check" />
                        <div className={styles.indicator}></div>
                    </div>
                    <div className={styles.labelText}></div>
                </label>
            </div>
        </div>
    )
}
