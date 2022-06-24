import React from "react";
import styles from '../styles/Home.module.css'

export default function Options() {
    return (
        <div className="flex justify-end">
            {/* search bar */}
            <div className="pt-3 mt-2.5">
                <input className={`${styles.searchBar} drop-shadow-2xl px-2 mx-1  placeholder:text-gray-400`} style={{ borderRadius: "10px", width: "20rem", height: "2.7rem" }} type="text" placeholder="Search batches here"></input>
                <button className={styles.searchBtn}>SEARCH</button>
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
