import React from "react";
import Image from "next/image";

export default function Batch({ name, thumb_uri }) {
    return (
        <div className="flex flex-col p-3 pb-0 rounded-md bg-white hover:cursor-pointer shadow-2xl">
            <div className="rounded-md drop-shadow-xl">
                <Image className="rounded-md" width={720} height={360} layout="responsive" src={thumb_uri} alt={name + " Batch Thumbnail"} />
            </div>
            <div className="flex p-2 justify-around items-center">
                <div className="font-semibold px-3 text-xl m-2 w-fit">{name}</div>
                <button className="p-2 px-5 bg-btn rounded-lg drop-shadow-2xl text-white">EXPLORE</button>
            </div>
        </div>
    )
}
