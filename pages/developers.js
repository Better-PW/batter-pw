import React from "react";
import Navbar from "../components/navbar";
import Image from "next/image";
import AvatarCard from "../components/AvatarsCard";

export default function Developers(){
    return (
        <>
          <Navbar />
          <h1 className="text-3xl text-center mt-10">Better PW Developers</h1>
          <p className="text-center mt-5 text-gray-700 dark:text-gray-500">Better PW is an un-offical project by made by students for students :D</p>
          {/* <div className="flex items-center justify-center"><Image className="" src="/media/beaches.png" width={300} height={300} /></div> */}
          <AvatarCard name="Pankaj" work="DevOps / PM" src="/media/pankaj.png" />
          <AvatarCard name="Ankush" work="DevOps" src="/media/ankush.png" />
          <AvatarCard name="Vedansh" work="DevOps" src="/media/vedansh.png" />
          <AvatarCard name="Rudransh" work="DevOps" src="/media/rudra.png" />
          <AvatarCard name="Arnab" work="Ui/UX Designer" src="/media/arnab.gif" />
          <AvatarCard name="Arunava" work="Ui/UX Designer" src="/media/ag.png" />
        </>
    )
}