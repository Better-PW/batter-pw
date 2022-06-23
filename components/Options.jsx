import React from "react";
import styles from '../styles/Home.module.css'

export default function Options() {
    return (
        <div className="flex justify-end">
            {/* search bar */}
            <div className="ml-5">
                <input className={`${styles.searchBar} drop-shadow-2xl px-2 mx-1  placeholder:text-gray-400`} style={{ borderRadius: "10px", width: "20rem", height: "2.7rem" }} type="text" placeholder="Search batches here"></input>
                <button className={styles.searchBtn}>Search</button>
            </div>
            {/* filter button */}
            <div className="filter inline ml-5 drop-shadow-2xl">
                <button className={`${styles.filterBtn}`}><span className={styles.filterText}>Filters</span></button>
            </div>
            {/* toggle */}
            <div title="toggle dark mode" className={`${styles.toggleButton} ml-5 mt-1 mx-1 toggle-button inline drop-shadow-3xl`}>
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
