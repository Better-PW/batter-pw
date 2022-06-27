import Navbar from '../../components/navbar';
import ClassCard from '../../components/ClassCard';
import axios from 'axios';
import Spinner from '../../components/spinner';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Subjects = ({ subjectsJson }) => {
  // console.log(subjectsJson);
  var s = [];
  if (subjectsJson == undefined) { return <div className='font-bold font-poppins m-5 text-2xl'>Loading...</div> }
  subjectsJson.forEach((item) => {
    s.push(
      <div key={item.subject} className="flex w-fill mx-2 shadow-xl rounded-md cursor-pointer  bg-white  dark:bg-[#2a2a2a]  justify-between items-center my-auto ease-in-out duration-500 hover:scale-105 hover:shadow-2xl">
        <div className="font-semibold text-xl m-2 w-fit">{item.subject}</div>
      </div>)
  });
  return (<div className="w-fit flex mx-4 px-3">
    {s}
  </div>)
}

export default function BatchView() {
  const router = useRouter();
  var { batchID } = router.query;
  const [batchDetails, setBatchDetails] = useState({});
  const [gotBatch, setGotBatch] = useState(false);
  const [scheduleCards, setScheduleCards] = useState([]);
  // console.log(batchID);

  const getScheduleFromAPI = async () => {
    var batchID = router.query.batchID;
    if (batchID == undefined) {
      setGotBatch(false);
      // console.log("ok")
      return;
    }
    const loginData = JSON.parse(localStorage.getItem("login-data"));
    if (loginData === null || !loginData.hasOwnProperty("access_token")) {
      localStorage.setItem("isLoggedIn", false);
      router.push("/login");
      return;
    }
    const endpoint = "/api/batch-details";
    const payload = {
      access_token: loginData.access_token,
      batchID: batchID,
    };
    var res = await axios.post(endpoint, payload);
    // console.log(res.status, res.data);
    if (res.status === 200 && res.data.success) {
      setBatchDetails(res.data.data);
      // console.log(res.data.data);
      setGotBatch(true);
    }
  }

  useEffect(() => {
    // var batchID = router.query.batchID;
    // console.log(batchID);
    if (!gotBatch) {
      // console.log("ok");
      getScheduleFromAPI();
    } else if (gotBatch && batchDetails) {
    }
  }, [gotBatch, batchID])

  return (
    <div>
      {batchDetails ?
        <div className="h-screen ease-in-out duration-500 bg-gray-100 dark:bg-[#121212]">
          <Navbar />
          <div className='font-bold font-poppins m-5 text-2xl ease-in-out duration-500'>{batchDetails.name}</div>
          <Subjects subjectsJson={batchDetails.subjects} />
        </div>
        : <div className='font-bold font-poppins m-5 text-2xl'>Loading...</div>}
    </div>
  )
}

