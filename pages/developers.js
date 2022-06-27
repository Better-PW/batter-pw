import React from "react";
import Navbar from "../components/navbar";
import Image from "next/image";

export default function Developers(){
    return (
        <>
          <Navbar />
          <h1 className="text-3xl text-center">No developers?</h1>
          <div className="flex items-center justify-center"><Image className="" src="/media/beaches.png" width={300} height={300} /></div>
          
        </>
    )
}