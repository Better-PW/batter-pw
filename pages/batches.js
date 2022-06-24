import axios from 'axios';
import Batch from '../components/Batch';
import Navbar from '../components/navbar';
import Options from '../components/Options';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Batches() {
  const [gotBatches, setGotBatches] = useState(false);
  const [myBatches, setMyBatches] = useState([]);
  const [batchCards, setBatchCards] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState("dont_know");
  const router = useRouter();

  // useEffect(() => {
  //   setIsLoggedIn(localStorage.getItem("isLoggedIn"));

  //   if (typeof isLoggedIn === "string") { return }
  //   else if (typeof isLoggedIn === "boolean" && !isLoggedIn) {
  //     router.push("/");
  //   }

  // }, [isLoggedIn]);

  useEffect(() => {
    if (!gotBatches) { getBatches(); }
  }, [gotBatches]);

  useEffect(() => {
    let c = [];
    myBatches.forEach((item) => { c.push(<Batch batchJson={item} />) });
    setBatchCards(c);
  }, [myBatches]);

  const getBatches = async () => {
    const loginData = JSON.parse(localStorage.getItem("login-data"));
    if (loginData) {
      if (!loginData.hasOwnProperty("access_token")) {
        router.push("/");
        return;
      }
    } else {
      router.push("/");
      return;
    }
    const endpoint = "/api/all-batches";
    const payload = {
      access_token: loginData.access_token,
      bought_batches: true
    };
    var res = await axios.post(endpoint, payload);
    console.log(res.status, res.data);
    if (res.status === 200 && res.data.success) {
      setMyBatches(res.data.data);
      setGotBatches(true);
    }
  }

  return (
    <>
      <Navbar />
      <div className='bg-[#e8e8e8] h-screen'>
        <div className="flex flex-row p-2 justify-end">
          <Options />
        </div>
        <div className='mx-16 my-10 grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 gap-10'>
          {batchCards}
        </div>
      </div>
    </>
  )
}
