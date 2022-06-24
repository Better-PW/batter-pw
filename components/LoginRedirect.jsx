import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function redirectIfNoLogin() {
    const router = useRouter();
    useEffect(() => {
        const loginBool = JSON.parse(localStorage.getItem("isLoggedIn"));
        const loginData = JSON.parse(localStorage.getItem("login-data"));
        if (!loginBool || !loginData) {
            router.push("/login");
        }
    }, [])
}