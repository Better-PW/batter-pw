import Image from 'next/image';
import { useState, useEffect } from 'react';
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
            <div className='p-2 px-10'>
                <ul className='flex flex-row text-center justify-between items-center font-poppins'>
                    <li className='text-3xl font-semibold w-full tracking-widest'>PHYSICS WALLAH</li>
                    <li className='justify-self-end'><Image src={`/media/pw_${theme}.png`} width={35} height={40} /></li>
                </ul>
            </div>
        </nav>
    )
}
