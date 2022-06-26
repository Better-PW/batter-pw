import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Batch({ batchJson }) {
    const router = useRouter();
    const openBatchPage = () => {
        alert("Explore page not found :(");
    }

    return (
        <div className="ease-in-out duration-500 flex hover:shadow-2xl bg-[#ffffff] hover:scale-105 dark:bg-[#494949] flex-col p-3 pb-0 rounded-md shadow-xl">
            <div className="rounded-md shadow-xl">
                <Image className="rounded-md" width={720} height={360} layout="responsive" src={`/api/image-proxy?imageUrl=${batchJson.previewImage.baseUrl}${batchJson.previewImage.key}`} alt={batchJson.name + " Thumbnail"} />
            </div>
            <div className="flex py-3 justify-between items-center my-auto">
                <div className="ease-in-out duration-[5ms] font-semibold text-xl m-2 w-fit">{batchJson.name}</div>
                <button className="font-poppins font-semibold p-2 px-5 bg-[#1a5ec5] border-2 border-[#1a5ec5] hover:border-[#1a5ec5] hover:bg-[#ffffff] hover:text-[#1a5ec5] ease-in-out duration-300 rounded-md drop-shadow-2xl text-white dark:hover:border-[#1a5ec5] dark:hover:bg-[#4b4b4b9c] dark:hover:text-white" onClick={openBatchPage}>OPEN</button>
            </div>
        </div>
    )
}
