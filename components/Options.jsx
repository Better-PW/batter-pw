import React from "react";
import styles from '../styles/Home.module.css'

export default function Options() {
    return (
        <div className="flex justify-end">
            {/* search bar */}
            <div className="ml-5">
                <input className='px-2 mx-1 placeholder:italic  placeholder:text-gray-400' style={{ borderRadius: "5px", width: "20rem", height: "2.7rem" }} type="text" placeholder="Search batches here"></input>
            </div>
            {/* filter button */}
            <div className="filter inline ml-5">
                <button className={`${styles.filterBtn}`}><span className={styles.filterText}>Filters</span></button>
            </div>
            {/* toggle */}
            <div className='ml-5 mx-1 toggle-button inline'>
                <label className={styles.switch}>
                    <input type="checkbox" />
                    <span className={`${styles.slider} ${styles.round} float-right`}></span>
                </label>
            </div>
        </div>
    )
}