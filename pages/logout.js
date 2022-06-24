import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css'
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Logout() {
    const router = useRouter();
    useEffect(() => {
        localStorage.removeItem("login-data");
        localStorage.setItem("isLoggedIn", false);
        router.push("/");
    }, [])
}
