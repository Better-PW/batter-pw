import Image from 'next/image';
import { useState, useEffect } from 'react';
import Options from './Options';
import GetTheme from './GetTheme';

export default function Navbar() {
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
    return (
        <nav>
            <div className='p-2 px-10 shadow-md shadow-black/30 dark:shadow-white/20 drop-shadow-md rounded-md'>
                <ul className='flex flex-row text-center items-center font-poppins pt-1'>
                    <li className='justify-self-end pl-5 pr-5'><Image src={`/media/pw_${theme}.png`} width={30} height={35} /></li>
                    <li className='text-3xl font-semibold tracking-widest'>PHYSICS WALLAH</li>
                    <Options />
                </ul>
            </div>
        </nav>
    )
}