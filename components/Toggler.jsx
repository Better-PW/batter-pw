import React from "react";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from 'react';
import { useTheme } from "next-themes";
import GetTheme from "./GetTheme";

export default function Toggler() {

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
        <div className="hover:cursor-pointer scale-95 ease-in-out duration-500 pt-1">
            <FontAwesomeIcon className="p-1" size="2x" onClick={toggleMode} icon={icon} />
        </div>
    )
}
//deploy
