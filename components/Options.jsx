import React from "react";
import styles from '../styles/Home.module.css'
import Toggle from "./Toggle";
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Options() {
    function filterClick(){
        alert("No filters yet.");
    }
    
    const [mode, setMode] = useState("sun");

    function clicked(){
        if (mode === "sun"){
            setMode("moon");
            console.log("Dark Mode Enabled")
        } else if (mode === "moon") { 
            setMode("sun"); 
            console.log("Light Mode Enabled") 
        }
    }

    return (
        <div className="pt-2 flex justify-end pb-3.5 ml-auto">
            <div>
            <div className="pr-3"><Image style={{transition: "0.5s"}} onClick={clicked} className='darkLight hover:cursor-pointer' id="darkLight" src={`/media/dark-light/${mode}.png`} width={40} height={40} /></div>
            </div>
            {/* search bar */}
            <div>
                <form className="flex items-center shadow-lg">
                    <label className="sr-only">Search</label>
                    <div className="relative w-full">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-700 dark:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="simple-search" className="border-1 border-gray-300 text-gray-900 text-sm rounded block w-full pl-10 p-2.5 dark:border-1 dark:border-[#494949] dark:placeholder:text-gray-400 dark:text-gray-800" placeholder="Search For Batches" required="" />
                    </div>
                </form>
            </div>
            {/* filter button */}
            <div className="inline ml-2 pt-[0.5px]">
                <button onClick={filterClick} className={`${styles.filterBtn}`}><span className={styles.filterText}>FILTERS</span></button>
            </div>
            {/* toggle */}
            {/*<Toggle />*/}
        </div>
    )
}
