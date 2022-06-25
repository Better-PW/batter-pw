import React, { useEffect, useReducer } from "react";
import Router, { useRouter } from "next/router";
import styles from "../styles/Home.module.css"

export default function Buttons() {
    function myBatches(){
        Router.push("/batches")
    }
    function allBatches(){
        Router.push("/all-batches")
    }
    const router = useRouter()
    useEffect(()=>{
        if (router.pathname === "/batches"){
            document.querySelector(".myBatches").classList.add(`${styles.clicked}`);
        } else {
            document.querySelector(".myBatches").classList.remove(`${styles.clicked}`);
            document.querySelector(".allBatches").classList.add(`${styles.clicked}`)
        }
    })
    return (
        <div className="pt-5 pl-10">
            <div style={{height: "3rem", width: "14rem"}} className="buttonContainer flex bg-gray-400 rounded-lg">
                <div className="container">
                    <div className="btnAll inline">
                        <button onClick={allBatches} style={{height: "3rem", width: "7rem"}} className="allBatches focus:bg-gray-300 rounded-lg duration-500 dark:focus:bg-zinc-600"><span className={styles.buttonText}>ALL BATCHES</span></button>
                    </div>
                    <div className="btnMy inline">
                        <button onClick={myBatches} style={{height: "3rem", width: "7rem"}} className="myBatches focus:bg-gray-300 rounded-lg duration-500 dark:focus:bg-zinc-600 text-white"><span className={styles.buttonText}>MY BATCHES</span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}