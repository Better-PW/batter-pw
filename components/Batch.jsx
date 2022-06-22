import React from "react";
import styles from '../styles/Home.module.css'
import Image from "next/image";

export default function Batch(props) {
    return (
        <div className="max-w-sm rounded hover:cursor-pointer overflow-hidden shadow-2xl inline-block ml-10">
            <img className="w-full" src={props.img} alt="batch image" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{props.name}</div>
                </div>
        </div>
    )
}

        // <div style={{ paddingTop: "10px" }} className="batch-container ml-10 mt-5 top-0 right-0 inline">
        //     <Image className={styles.batchImage} src={props.image} width={350} height={160} />
        // </div>