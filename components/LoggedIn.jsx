// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';

// export default function loggedIn() {
//     const [isLoggedIn, setIsLoggedIn] = useState(undefined);
//     const router = useRouter();
//     useEffect(() => {
//         const loginBool = JSON.parse(localStorage.getItem("isLoggedIn"));
//         // const loginData = JSON.parse(localStorage.getItem("login-data"));
//         setIsLoggedIn(loginBool);
//     }, []);

//     return isLoggedIn;
// }

export default function loggedIn() {
    if (typeof window !== 'undefined') {
        const loginBool = JSON.parse(localStorage.getItem("isLoggedIn"));
        return loginBool;
    } else {
        return undefined;
    }
}
