import axios from 'axios';
import Batch from '../components/Batch';
import Navbar from '../components/navbar';
import Options from '../components/Options';
import redirectIfNoLogin from '../components/LoginRedirect';
import { useState, useEffect } from 'react';

export default function Batches() {
  redirectIfNoLogin();

  const [gotBatches, setGotBatches] = useState(false);
  const [myBatches, setMyBatches] = useState([]);
  const [batchCards, setBatchCards] = useState([]);


  useEffect(() => {
    if (!gotBatches) { getBatches(); }
  }, [gotBatches])

  useEffect(() => {
    if (myBatches.length > 0) {
      let c = [];
      myBatches.forEach((item) => { c.push(<Batch batchJson={item} />) });
      setBatchCards(c);
    }
  }, [myBatches]);

  const getBatches = async () => {
    const loginData = JSON.parse(localStorage.getItem("login-data"));
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
        <div className='mx-auto w-11/12 my-10 grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 gap-10'>
          {batchCards}
        </div>
      </div>
    </>
  )
}
