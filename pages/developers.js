import React from "react";
import Navbar from "../components/navbar";
import Image from "next/image";
import AvatarCard from "../components/AvatarsCard";
import styles from '../styles/dev.module.css'

export default function Developers(){
    return (
        <>
        <div className="bg-white dark:bg-black ease-in-out duration-500">
          <Navbar />
          <h1 className="text-3xl text-center w-full mt-10 tracking-wider"><a className="font-bold" href="https://discord.gg/fWJ9n3nwQu" target="_blank">BETTER PW</a> DEVELOPERS</h1>
          <p className="text-center mt-5 text-gray-700 dark:text-gray-500 font-bold">Better PW is an un-offical project by made by students for students</p>
          {/* <div className="flex items-center justify-center"><Image className="" src="/media/beaches.png" width={300} height={300} /></div> */}
            <div className={styles.devCardsGrid}>
            <AvatarCard name="Pankaj" work="Project Manager" gh="https://github.com/piratedkukreja" src="/media/pankaj.png" />
            <AvatarCard name="Ankush" work="DevOps" gh="https://github.com/ankushkun" src="/media/ankush.png" />
            <AvatarCard name="Vedansh" work="DevOps" gh="https://github.com/titan-codes" src="/media/vedansh.png" />
            <AvatarCard name="Rudransh" work="DevOps" gh="https://github.com/firehead90544" src="/media/rudra.png" />
            <AvatarCard name="Arnab" work="UI/UX Designer" gh="https://www.youtube.com/watch?v=xvFZjo5PgG0" src="/media/arnab.gif" />
            <AvatarCard name="Arunava" work="UI/UX Designer" gh="https://its-ag.pages.dev/" src="/media/ag.png" />
            </div>
        </div>
        </>
    )
}