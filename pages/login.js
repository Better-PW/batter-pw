import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css'
import axios from 'axios';
import { useRouter } from 'next/router';
import loggedIn from '../components/LoggedIn';
import Spinner from "../components/spinner";
import GetTheme from '../components/GetTheme';
import Toggler from '../components/Toggler';

export default function Login() {
  const [phone, setPhone] = useState(0);
  const [otp, setOtp] = useState(0);
  const [sentOtp, setSentOtp] = useState(false);
  const [theme, setTheme] = useState("dark");
  const router = useRouter();

  const login = loggedIn();
  if (!(typeof login == "undefined")) {
    console.log(login);
    if (login) {
      setTimeout(() => { router.push("/batches"); }, 1500);
    }
  }

  useEffect(() => { // set theme on local storage change (image src update)
    var themeLocal = GetTheme();
    console.log(themeLocal);
    if (themeLocal != undefined) {
      if (themeLocal == "system") { setTheme("dark") }
      else { setTheme(themeLocal || "dark"); }
    }
    window.addEventListener('storage', () => {
      var themeLocal = GetTheme();
      console.log(themeLocal);
      if (themeLocal != undefined) {
        if (themeLocal == "system") { setTheme("dark") }
        else { setTheme(themeLocal || "dark"); }
      }
    })
  }, [])

  // if (!gotTheme && themeLocal != undefined) {
  //   setGotTheme(true);
  //   setTheme(themeLocal);
  // }

  const validatePhone = () => {
    const phoneRegex = /^[6789][0-9]{9}$/;
    const validity = phoneRegex.test(phone.toString());
    console.log(validity);
    if (validity) {
      getOtp();
    }
  }

  const getOtp = async () => {
    console.log("calling next api");
    const endpoint = "/api/send-otp";
    const payload = {
      number: phone.toString()
    }
    const a = await axios.post(endpoint, payload);
    if (a.status === 200 && a.data.success) {
      setSentOtp(true);
    } else {
      console.log("unable to send otp ", a.status, a.data);
    }
  }

  const verifyOtp = async () => {
    const otpRegex = /^\d{6}$/;
    const validity = otpRegex.test(otp.toString());
    if (validity) {
      const endpoint = "/api/verify-otp"
      const payload = {
        number: phone.toString(),
        otp: otp.toString()
      }
      const res = await axios.post(endpoint, payload);
      if (res.status === 200 && res.data.success) {
        var data = {
          access_token: res.data.data.access_token,
          expires_in: res.data.data.expires_in,
          refresh_token: res.data.data.refresh_token,
          token_id: res.data.data.tokenId
        }
        console.log(data);
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("login-data", JSON.stringify(data));
        router.push("/batches");
      } else {
        console.log("unable to verify otp", res.status, res.data.error);
      }
    }

  }

  const [clicks, setClicks] = useState(0);

  function handleClick() {
    setClicks(clicks + 1);
    if (clicks > 1) {
      document.querySelector(".clickText").style.display = "inline";
    }
    if (clicks > 8) {
      document.querySelector(".h-screen").classList.add("animate-bounce");
    }
  }

  return (<div>
    <div className="toggle-container absolute right-0	p-5"><div><Toggler /></div></div>
    {!login ?
      <div className="h-screen bg-white dark:bg-black ease-in-out duration-500 flex flex-col justify-center text-center content-center subpixel-antialiased font-poppins">
        <h1 className={`${styles.totalClicks} clickText hidden`}>Clicks: {clicks}</h1>
        <div className="my-5"><Image onClick={handleClick} title='click me daddy UwU' className='pw-image hover:cursor-pointer dark:invert ease-in-out duration-[600ms]' src={`/media/pw_light.png`} width={100} height={110} /></div>
        <div className="text-4xl tracking-widest">Welcome To <span className="font-bold">PHYSICS WALLAH</span></div>
        <div className="my-3 mb-10 font-light text-xl tracking-widest">
          Padhlo Chahe Kahi Se<br />Selection Hoga Yahi Se
        </div>
        <div className={"flex flex-row mt-5 justify-center " + (sentOtp ? "visible" : "invisible")}> {/* has phone number -> login with otp */}
          <input className="w-64 mx-2 px-5 rounded-lg drop-shadow-xl tracking-wide ease-in-out duration-500 dark:bg-[#434343] placeholder:text-gray-400" type="tel" required minLength="6" maxLength="6" name="otp" placeholder="Enter OTP" pattern="\d*" onChange={(e) => { setOtp(e.target.value) }} />
          <button className="mx-2 p-3 px-7 bg-[#1a5ec5] hover:scale-105 ease-in-out duration-300 rounded-lg drop-shadow-2xl text-white" onClick={verifyOtp}>LOGIN</button>
        </div>
        <div className={"flex flex-row justify-center " + (sentOtp ? "invisible" : "visible")}> {/* no phone number -> show phone number input */}
          <input className="w-64 mx-2 px-5 rounded-lg drop-shadow-xl tracking-wide ease-in-out duration-500 dark:bg-[#434343] placeholder:text-gray-400" type="tel" required minLength="10" maxLength="10" name="phone" placeholder="Enter Phone Number Here" pattern="\d*" onChange={(e) => { setPhone(e.target.value) }} />
          <button className="mx-2 p-3 px-5 bg-[#1a5ec5] hover:scale-105 ease-in-out duration-500 rounded-lg drop-shadow-2xl text-white" onClick={validatePhone}>GET OTP</button>
        </div>
      </div> : <Spinner />}
  </div>
  )
}
