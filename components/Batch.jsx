import React from "react";
import styles from '../styles/Home.module.css'
import Image from "next/image";

export default function Batch(props) {
    return (
        <div style={{ paddingTop: "10px", border: "solid 2px #0070f3;" }} className="batch-container ml-10 mt-5 top-0 right-0 inline">
            <Image className={styles.batchImage} src={props.image} width={350} height={160} />
        </div>
    )
}