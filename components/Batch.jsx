import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Batch({ batchJson }) {
    const router = useRouter();
    const openBatchPage = () => {
        alert("image batch page opened");
    }

    return (
        <div className="flex flex-col p-3 pb-0 rounded-md bg-white  shadow-2xl">
            <div className="rounded-md shadow-xl">
                <Image className="rounded-md" width={720} height={360} layout="responsive" src={`/api/image-proxy?imageUrl=${batchJson.previewImage.baseUrl}${batchJson.previewImage.key}`} alt={batchJson.name + " Thumbnail"} />
            </div>
            <div className="flex p-2 justify-around items-center">
                <div className="font-semibold px-3 text-xl m-2 w-fit">{batchJson.name}</div>
                <button className="p-2 px-5 bg-btn rounded-lg drop-shadow-2xl text-white" onClick={openBatchPage}>EXPLORE</button>
            </div>
        </div>
    )
}
