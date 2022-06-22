import { useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Login() {
  const [phone, setPhone] = useState(0);
  const [otp, setOtp] = useState(0);
  const [sentOtp, setSentOtp] = useState(false);
  const router = useRouter();

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
        router.push("/batches")
      } else {
        console.log("unable to verify otp", res.status, res.data.error)
      }
    }

  }

  return (
    <div className="h-screen bg-white flex flex-col justify-center text-center content-center subpixel-antialiased font-poppins">
      <div className="my-5"><Image src="/../public/pw_dark.png" width={100} height={110} /></div>
      <div className="text-4xl tracking-widest">Welcome To <span className="font-bold">PHYSICS WALLAH</span></div>
      <div className="my-3 mb-20 font-light text-xl tracking-widest">
        Padhlo Chahe Kahi Se<br />Selection Hoga Yahi Se
      </div>
      <div className={"flex flex-row justify-center " + (sentOtp ? "visible" : "invisible")}> {/* has phone number -> login with otp */}
        <input className="w-64 mx-2 px-5 bg-gray-300 rounded-lg drop-shadow-xl text-black tracking-wide" type="tel" required minLength="6" maxLength="6" name="otp" placeholder="Enter OTP" pattern="\d*" onChange={(e) => { setOtp(e.target.value) }} />
        <button className="mx-2 p-3 px-7 bg-btn rounded-lg drop-shadow-2xl text-white" onClick={verifyOtp}>LOGIN</button>
      </div>
      <div className={"flex flex-row justify-center " + (sentOtp ? "invisible" : "visible")}> {/* no phone number -> show phone number input */}
        <input className="w-64 mx-2 px-5 bg-gray-300 rounded-lg drop-shadow-xl text-black tracking-wide" type="tel" required minLength="10" maxLength="10" name="phone" placeholder="Enter Phone Number Here" pattern="\d*" onChange={(e) => { setPhone(e.target.value) }} />
        <button className="mx-2 p-3 px-5 bg-btn rounded-lg drop-shadow-2xl text-white" onClick={validatePhone}>GET OTP</button>
      </div>
    </div>
  )
}
