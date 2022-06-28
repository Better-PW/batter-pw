import React from "react";
import Image from "next/image";

export default function AvatarCard(props) {
    return (
        <div className="m-2 hover:scale-105 card bg-slate-100 ease-in-out duration-500 flex flex-col items-center justify-center p-4  shadow-lg rounded-2xl dark:bg-gray-800">
            <div className="main flex flex-col justify-evenly place-items-center h-alf">
                {/* profile picture */}
                <div className="profile mx-auto rounded-full py-2 w-2/3 ">
                    <Image className="rounded-full" src={props.src} width={200} height={200} />
                </div>
                {/* Name */}
                <div className="name text-gray-800 text-2xl ease-in-out duration-500 font-medium mt-4 dark:text-white">
                    <p>{props.name}</p>
                </div>
                {/* work done */}
                <div className="work text-gray-700 my-2 ease-in-out duration-500 dark:text-gray-500">
                    <p>{props.work}</p>
                </div>
                {/* github link */}
                <div className="w-full mt-8">
                    <a href={props.gh} target="_blank">
                        <button className="bg-blue-500 py-2 px-6 hover:bg-blue-600 ease-in-out duration-300 text-white w-full font-semibold rounded-lg shadow-lg">
                            Github
                        </button>
                    </a>
                </div>

            </div>
        </div>
    )
}

