import React from "react";
import styles from '../styles/Home.module.css'
import Toggle from "./Toggle";
import { faMoon, faSun, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTheme } from "next-themes";
import GetTheme from "./GetTheme";

export default function Options() {
    // const [theme, setTheme] = useState();
    const { theme, setTheme } = useTheme();
    const [icon, setIcon] = useState();

    useEffect(() => { // set theme on local storage change
        var themeLocal = GetTheme();
        console.log(themeLocal);
        if (themeLocal != undefined) {
            if (themeLocal == "system") { setTheme("dark"); setIcon(faSun); }
            else { setTheme(themeLocal || "dark"); setIcon(themeLocal == "dark" ? faSun : faMoon); }
        }
        window.addEventListener('storage', () => {
            var themeLocal = GetTheme();
            console.log(themeLocal);
            if (themeLocal != undefined) {
                if (themeLocal == "system") { setTheme("dark") }
                else { setTheme(themeLocal || "dark"); setIcon(themeLocal == "dark" ? faSun : faMoon); }
            }
        })
    }, [])

    function filterClick() {
        alert("No filters yet.");
    }

    function toggleMode() {
        if (theme == "light") {
            setTheme("dark");
            localStorage.setItem("theme", "dark");
        } else if (theme == "dark") {
            setTheme("light");
            localStorage.setItem("theme", "light");
        } else {
            setTheme("dark");
            localStorage.setItem("theme", "dark");
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
