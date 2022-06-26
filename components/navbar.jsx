import Image from 'next/image';
import { useState, useEffect } from 'react';
import Options from './Options';
import GetTheme from './GetTheme';
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Navbar(props) {
    const [theme, setTheme] = useState("dark");
    useEffect(() => { // set theme on local storage change (image src update)
        var themeLocal = GetTheme();
        console.log(themeLocal);
        if (themeLocal != undefined) {
            if (themeLocal == "system") { setTheme("dark") }
            else { setTheme(themeLocal || "dark"); }
        }
        window.addEventListener('storage', () => {
            var themeLocal = GetTheme();
            console.log(themeLocal);
            if (themeLocal != undefined) {
                if (themeLocal == "system") { setTheme("dark") }
                else { setTheme(themeLocal || "dark"); }
            }
        })
    }, [])

    const [onMobile, setMobile] = useState();

    useEffect(() => {
        const screenWidth = screen.width;
        console.log(screenWidth);
        if (screenWidth < 900) {
            setMobile(true)
        } else {
            setMobile(false)
        }

        window.addEventListener("resize", () => {
            if (screen.width < 900) {
                setMobile(true)
            } else {
                setMobile(false)
            }
        })
    })


    return (
        <nav>
            <div className='ease-in-out duration-500 bg-[#fff] dark:bg-black pr-8 pl-[10px] shadow-md shadow-black/30 dark:shadow-white/20 drop-shadow-md'>
                <ul className='flex flex-row text-center items-center font-poppins pt-1'>
                    <li className='justify-self-end pl-5 pr-5'><Image src={`/media/pw_${theme}.png`} width={30} height={35} /></li>
                    {onMobile ? <li className='text-3xl font-semibold tracking-widest hidden'>PHYSICS WALLAH</li> : <li className='text-3xl font-semibold tracking-widest'>PHYSICS WALLAH</li>}
                    {onMobile ? <FontAwesomeIcon style={{ fontSize: "25px", marginLeft: "auto"}} icon={faEllipsisVertical} /> : <Options handleChange={props.search} />}
                </ul>
            </div>
        </nav>
    )
}
