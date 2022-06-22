import React from "react";
import styles from '../styles/Home.module.css'
import Image from "next/image";

export default function Batch(props){
    return (
        <div className="batch-container">
            <Image className="rounded-2xl" src={props.image} width={350} height={200} />
        </div>
    )
}