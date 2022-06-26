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
            onChange={(e) => {props.handleChange(e)}}
          />
        </div>
      </form>
      {/*Settings Button*/}
      <div className="ml-2 pt-[1px]">
        <button onClick={filterClick} className={`${styles.filterBtn}`}>
          <span className={styles.filterText}>SETTINGS</span>
        </button>
      </div>
      {/* toggle */}
      {/*<Toggle />*/}
    </div>
  );
}
