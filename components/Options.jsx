import React from "react";
import styles from '../styles/Home.module.css'

export default function Options() {
    return (
        <div className="flex justify-end">
            {/* search bar */}
            <div className="pt-3 mt-2.5">
            <form class="flex items-center">   
                <label for="simple-search" class="sr-only">Search</label>
                <div class="relative w-full">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg class="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    </div>
                    <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded block w-full pl-10 p-2.5 dark:bg-gray-1200 dark:border-gray-400 dark:placeholder-gray-400 dark:text-gray-800" placeholder="Search For Batches" required=""/>
                </div>
            </form>
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
