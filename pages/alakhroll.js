import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Easter() {
    // const useAudio = url => {
    //     const [audio] = useState(new Audio(url))
    //     const [play, setPlay] = useState(false)

    //     useEffect(()=>{
    //         play ? audio.play() : audio.pause()
    //     }, [play])

    //     useEffect(()=>{
    //         window.onload = ()=>{
    //             setPlay(true);
    //         }
    //     }, [])
    // }
    const [audio, setAudio] = useState(null)
    useEffect(() => {
        setAudio(new Audio("/media/rickroll.mp3").play())
    }, [])
    useEffect(() => {
        window.onload = () => {

        }
    })

    return (
        <div className="text-center">
            <h1 className="text-center text-2xl mt-10">GET ALAKH ROLLED HAHA!</h1>
            <Image className="rounded-full animate-spin-slow" src="/media/alakhroll.jpg" width={300} height={300} />
        </div>
    )
}

