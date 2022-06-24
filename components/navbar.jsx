import Image from 'next/image';

export default function Navbar() {
    return (
        <nav>
            <div className='p-2 mr-8 ml-8'>
                <ul className='flex flex-row text-center justify-between items-center font-poppins'>
                    <li className='text-3xl font-bold w-full tracking-widest'>PHYSICS WALLAH</li>
                    <li className='justify-self-end'><Image src="/media/pw_dark.png" width={35} height={40} /></li>
                </ul>
            </div>
        </nav>
    )
}
