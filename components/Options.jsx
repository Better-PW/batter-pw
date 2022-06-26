import React from "react";
import styles from '../styles/Home.module.css'
import Toggle from "./Toggle";
import { faMoon, faSun, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTheme } from "next-themes";

export default function Options() {
    function filterClick() {
        alert("No filters yet.");
    }
    const { theme, setTheme } = useTheme();
    const [icon, setIcon] = useState(faSun);

    function toggleMode() {
        if (theme == "light" || icon == faMoon) {
            setIcon(faSun);
            setTheme("dark");
        } else if (theme == "dark" || icon == faSun) {
            setIcon(faMoon);
            setTheme("light");
        } else {
            setIcon(faSun);
            setTheme("dark");
        }
        window.dispatchEvent(new Event('storage'));
    }

    return (
        <div className="pt-4 flex justify-end pb-3.5 ml-auto">
            <div className="hover:cursor-pointer">
                <FontAwesomeIcon className="p-1" size="2x" onClick={toggleMode} icon={icon} />
            </div>
            {/* search bar */}
            <form className="flex items-center">
                <div className="flex">
                    <FontAwesomeIcon className="flex relative m-0 p-0 left-5 top-2.5" icon={faSearch} />
                    <input type="text" id="simple-search" className="pl-6 border-1 border-gray-300 text-gray-900 text-sm rounded block w-full p-2.5 dark:border-1 dark:border-[#494949] dark:placeholder:text-gray-400 dark:text-white" placeholder="Search For Batches" required="" />
                </div>
            </form>
            {/* filter button */}
            <div className="ml-2 pt-[0.5px]">
                <button onClick={filterClick} className={`${styles.filterBtn}`}><span className={styles.filterText}>SETTINGS</span></button>
            </div>
            {/* toggle */}
            {/*<Toggle />*/}
        </div>
    )
}
