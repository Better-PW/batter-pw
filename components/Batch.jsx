import React from "react";
import Image from "next/image";

export default function Batch({ name, thumb_uri }) {
    return (
        <div className="rounded-xl hover:cursor-pointer overflow-hidden shadow-2xl inline-block">
            <Image width={720} height={360} layout="responsive" src={thumb_uri} alt={name + " Batch Thumbnail"} />
            <div className="font-bold text-xl m-2">{name}</div>
        </div>
    )
}
