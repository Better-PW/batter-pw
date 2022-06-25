import React from "react";
import styles from '../styles/Home.module.css'
import Toggle from "./Toggle";

export default function Options() {
    function filterClick(){
        alert("No filters yet.");
    }
    return (
        <div className="flex justify-end pb-3.5 ml-auto">
            {/* search bar */}
            <div className="pt-3 mt-2.5">
                <form className="flex items-center">
                    <label className="sr-only">Search</label>
                    <div className="relative w-full">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="simple-search" className=" border border-gray-300 text-gray-900 text-sm rounded block w-full pl-10 p-2.5  dark:border-gray-400 dark:placeholder:text-gray-400 dark:text-gray-800" placeholder="Search For Batches" required="" />
                    </div>
                </form>
            </div>
            {/* filter button */}
            <div className="inline drop-shadow-2xl ml-2 mt-3 pt-3">
                <button onClick={filterClick} className={`${styles.filterBtn}`}><span className={styles.filterText}>FILTERS</span></button>
            </div>
            {/* toggle */}
            <Toggle />
        </div>
    )
}
