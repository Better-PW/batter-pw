import React from "react";
import Router, { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import Toggler from "./Toggler";

export default function MobileMenu() {
    const router = useRouter();

    function toggleDropdown() {
        document.querySelector("#list-toggle").classList.toggle("hidden")
      }

    const [batchPage, setBatchPage] = useState();

    useEffect(() => {
        if (router.pathname === "/batches") {
            setBatchPage(true)
        } else {
            setBatchPage(false)
        }
    })

    function clickOption() {
        if (batchPage === true) {
            Router.push("/developers")
        } else {
            Router.push("/batches")
        }
    }
    return (
        <div className="flex justify-center ml-2">
        <div>
          <div className="dropdown relative">
            {/* <FontAwesomeIcon onClick={toggleDropdown} style={{ fontSize: "25px", marginLeft: "auto" }} icon={faEllipsisVertical} /> */}
            <button onClick={toggleDropdown}
              className="dropdown-toggle mt-[1.5px] h-10 w-16 px-3 py-[21.7px] bg-white text-black font-bold text-xs leading-tight uppercase rounded duration-150 ease-in-out flex items-center whitespace-nowrap dark:bg-[#000000] dark:text-white" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><FontAwesomeIcon style={{ fontSize: "25px", marginLeft: "auto" }} icon={faEllipsisVertical} />
            </button>
            <ul
              id="list-toggle"
              className="dropdown-menu min-w-max absolute bg-white dark:bg-[#363636] ease-in-out duration-500 text-base z-50 float-left list-none text-left rounded-[3px] shadow-lg mt-1 hidden m-0 bg-clip-padding border-none" aria-labelledby="dropdownMenuButton1">
                <li>
                <a className="dropdown-item text-sm py-2 px-2 text-center font-normal block w-full rounded-[3px] whitespace-nowrap text-gray-700 hover:bg-gray-300 dark:bg-[#363636] dark:hover:bg-black dark:text-white ease-in-out duration-300" href="#"><Toggler /></a
                >
              </li>
              <li>
                <a onClick={clickOption}
                  className="dropdown-item text-sm py-2 px-2 text-center font-normal block w-full rounded-[3px] whitespace-nowrap text-gray-700 hover:bg-gray-300 dark:bg-[#363636] dark:hover:bg-black dark:text-white ease-in-out duration-300" href="#">{batchPage ? "Developers" : "Batches"}</a>
              </li>
              <li>
                <a className="dropdown-item text-sm py-2 px-4 text-center font-normal block w-full whitespace-nowrap rounded-[3px] text-red-400 hover:bg-red-500 dark:bg-[#363636] dark:text-red-500 dark:hover:bg-red-500 dark:hover:text-white hover:text-white ease-in-out duration-300" href="#">Log out</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
}