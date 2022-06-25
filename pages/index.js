import styles from '../styles/Home.module.css'
import Batch from '../components/Batch'
import Navbar from '../components/navbar'
import Options from '../components/Options';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import loggedIn from '../components/LoggedIn';
import Spinner from '../components/spinner';


export default function Home() {
  const router = useRouter();
  const login = loggedIn();
  if (!(typeof login == "undefined")) {
    console.log(login);
    if (login) {
      router.push("/batches");
    }
    if (!login) {
      setTimeout(() => { router.push("/login"); }, 1500);
    }
  }

  if (!login && !(typeof login == "undefined")) { return <Spinner /> }
  else {
    return (
      <>
        <Navbar />
        <div className='bg-[#e8e8e8] h-screen'>
          <div className="flex flex-row p-2 justify-end">
            <Options />
          </div>
        </div>
      </>
    )
  }
}

