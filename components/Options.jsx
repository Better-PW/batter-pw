import React from "react";
import styles from "../styles/Home.module.css";
import Toggler from "./Toggler";
import { faMoon, faSun, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Router, { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import GetTheme from "./GetTheme";
import Developers from "../pages/developers";

export default function Options(props) {
  function filterClick() {
    alert("No settings yet.");
  }

  function toggleDropdown(){
    document.querySelector("#list-toggle").classList.toggle("hidden")
  }

  const router = useRouter();

  const [batchPage, setBatchPage] = useState();

  useEffect(()=>{
      if (router.pathname === "/batches"){
          setBatchPage(true)
      } else {
          setBatchPage(false)
      }
  })

  function clickOption(){
    if (batchPage === true){
      Router.push("/developers")
    } else {
      Router.push("/batches")
    }
  }

  return (
    <div className="pt-3 flex justify-end pb-3.5 ml-auto">
      {/*Toggle Dark Mode*/}
      <Toggler />
      {/*Search Bar*/}
      <form className="flex items-center">
        <div className="flex">
          <FontAwesomeIcon
            className="flex relative left-[32px] top-[14px]"
            icon={faSearch}
          />
          <input
            type="text"
            id="simple-search"
            className="ease-in-out duration-500 px-10 border-2 border-gray-300 text-gray-900 text-sm rounded block w-[250px] p-2.5 dark:border-1 dark:border-[#595959] dark:placeholder:text-gray-400 dark:text-white"
            placeholder="Search For Batches"
            required=""
            onChange={(e) => { props.handleChange(e) }}
          />
        </div>
      </form>
      {/* Dropdown options */}
      <div className="flex justify-center ml-2">
        <div>
          <div className="dropdown relative">
            <button onClick={toggleDropdown}
              className="dropdown-toggle mt-[1.5px] h-10 w-24 px-3 py-[21.7px] bg-[#1a5ec5] text-white font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg active:text-white transition duration-150 ease-in-out flex items-center whitespace-nowrap" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Options
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path
                  fill="currentColor"
                  d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                ></path>
              </svg>
            </button>
            <ul
              id="list-toggle"
              className="dropdown-menu min-w-max absolute bg-white dark:bg-[#363636] ease-in-out duration-500 text-base z-50 float-left list-none text-left rounded-[3px] shadow-lg mt-1 hidden m-0 bg-clip-padding border-none" aria-labelledby="dropdownMenuButton1">
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
    </div>
  );
}

