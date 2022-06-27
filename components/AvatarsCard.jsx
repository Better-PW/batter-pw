import React from "react";
import Image from "next/image";

export default function AvatarCard(props) {
    return (
        <div className="ml-5 card bg-slate-100 flex flex-col items-center justify-center p-4 shadow-lg rounded-2xl w-80 dark:bg-gray-800">
            <div className="main grid place-items-center h-half">
                {/* profile picture */}
                <div className="profile mx-auto rounded-full py-2 w-16 ">
                    <Image className="rounded-full" src={props.src} width={200} height={200} />
                </div>
                {/* Name */}
                <div className="name text-gray-800 text-2xl font-medium mt-4 dark:text-white">
                    <p>{props.name}</p>
                </div>
                {/* work done */}
                <div className="work text-gray-700 mt-4 dark:text-gray-500">
                    <p>{props.work}</p>
                </div>
                {/* github link */}
                <div className="w-full mt-8">
                    <button className="bg-blue-500 py-2 px-4 hover:bg-blue-600 text-white w-full font-semibold rounded-lg shadow-lg">
                        <a href={props.gh}>Github</a>
                    </button>
                </div>

            </div>
        </div>
    )
}

