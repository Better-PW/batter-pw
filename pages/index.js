import styles from '../styles/Home.module.css'
import Batch from '../components/Batch'
import Navbar from '../components/navbar'
import Options from '../components/Options';
import redirectIfNoLogin from '../components/LoginRedirect';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';


export default function Home() {
  redirectIfNoLogin();

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

