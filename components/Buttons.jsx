import React, { useEffect, useReducer } from "react";
import Router, { useRouter } from "next/router";
import styles from "../styles/Home.module.css"

export default function Buttons() {
    function myBatches() {
        Router.push("/batches")
    }
    function allBatches() {
        Router.push("/all-batches")
    }

    const router = useRouter()
    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (router.pathname === "/batches") {
            if (theme === "dark") {
                document.querySelector(".myBatches").classList.remove(`${styles.clicked}`);
                document.querySelector(".spanTxt1").classList.remove(`${styles.buttonText}`)
                document.querySelector(".myBatches").classList.add(`${styles.darkClicked}`)
            } else {
                document.querySelector(".myBatches").classList.add(`${styles.clicked}`);
            }
        } else if (router.pathname === "/all-batches") {
            if (theme === "dark") {
                document.querySelector(".allBatches").classList.remove(`${styles.clicked}`);
                document.querySelector(".spanTxt2 ").classList.remove(`${styles.buttonText}`)
                document.querySelector(".allBatches").classList.add(`${styles.darkClicked}`)
            } else {
                document.querySelector(".allBatches").classList.add(`${styles.clicked}`)
            }

        }
    })
    return (
        <div className="pt-5 pl-10">
            <div style={{ height: "3rem", width: "14rem" }} className="buttonContainer flex bg-gray-400 rounded-lg">
                <div className="container">
                    <div className="btnAll inline">
                        <button onClick={myBatches} style={{ height: "3rem", width: "7rem" }} className="myBatches focus:bg-gray-300 rounded-lg duration-500 dark:focus:bg-slate-800"><span className={`spanTxt2 ${styles.buttonText}`}>MY BATCHES</span></button>
                    </div>
                    <div className="btnMy inline">
                        <button onClick={allBatches} style={{ height: "3rem", width: "7rem" }} className="allBatches focus:bg-gray-300 rounded-lg duration-500 dark:focus:bg-slate-800"><span className={`spanTxt1 ${styles.buttonText}`}>ALL BATCHES</span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}