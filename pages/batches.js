import axios from 'axios';
import Batch from '../components/Batch';
import Navbar from '../components/navbar';
import Options from '../components/Options';
import loggedIn from '../components/LoggedIn';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Spinner from '../components/spinner';

export default function Batches() {
  const [gotBatches, setGotBatches] = useState(false);
  const [myBatches, setMyBatches] = useState([]);
  const [batchCards, setBatchCards] = useState([]);
  const router = useRouter();
  const login = loggedIn();
  console.log(login);
  if (!(typeof login == "undefined")) {
    if (!login) {
      setTimeout(() => { router.push("/login"); }, 1500);
    }
  }



  useEffect(() => {
    if (!gotBatches) { getBatches(); }
  }, [gotBatches])

  useEffect(() => {
    if (myBatches.length > 0) {
      let c = [];
      myBatches.forEach((item) => { c.push(<Batch key={item.slug} batchJson={item} />) });
      setBatchCards(c);
    }
  }, [myBatches]);

  const getBatches = async () => {
    const loginData = JSON.parse(localStorage.getItem("login-data"));
    if (loginData === null || !loginData.hasOwnProperty("access_token")) {
      localStorage.setItem("isLoggedIn", false);
      router.push("/login");
      return
    }
    const endpoint = "/api/all-batches";
    const payload = {
      access_token: loginData.access_token,
      bought_batches: true
    };
    var res = await axios.post(endpoint, payload);
    // console.log(res.status, res.data);
    if (res.status === 200 && res.data.success) {
      setMyBatches(res.data.data);
      setGotBatches(true);
    }
  }


  if (!login && !(typeof login == "undefined")) {
    return <Spinner />
  }
  else {
    return (
      <div>
        <Navbar />
        <div className='h-screen bg-gray-100 dark:bg-zinc-900'>
          <div className="flex flex-row p-2 justify-end">
            <Options />
          </div>
          <div className='mx-auto w-11/11 px-8 my-10 grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 gap-10'>
            {batchCards}
          </div>
        </div>
      </div >
    )
  }
}
