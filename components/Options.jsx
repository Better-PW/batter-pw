import React from "react";
import styles from "../styles/Home.module.css";
import Toggler from "./Toggler";
import { faMoon, faSun, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import GetTheme from "./GetTheme";

export default function Options(props) {
  function filterClick() {
    alert("No settings yet.");
  }

  function toggleDropdown(){
    document.querySelector("#list-toggle").classList.toggle("hidden")
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
      {/*Settings Button*/}
      <div className="ml-2 pt-[1px]">
        <button onClick={filterClick} className={`${styles.filterBtn}`}>
          <span className={styles.filterText}>SETTINGS</span>
        </button>
      </div>
      {/* Dropdown options */}
      <div class="flex justify-center ml-2">
        <div>
          <div class="dropdown relative">
            <button onClick={toggleDropdown}
              class="dropdown-toggle h-10 w-24 px-3 bg-[#1a5ec5] text-white font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg active:text-white transition duration-150 ease-in-out flex items-center whitespace-nowrap" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Options
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" class="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path
                  fill="currentColor"
                  d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                ></path>
              </svg>
            </button>
            <ul
              id="list-toggle"
              className="dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none" aria-labelledby="dropdownMenuButton1">
              <li>
                <a
                  class=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#">Developers</a>
              </li>
              <li>
                <a class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-red-400 hover:bg-gray-100" href="#">Log out</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* toggle */}
      {/*<Toggle />*/}
    </div>
  );
}

