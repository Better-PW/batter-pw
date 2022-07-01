import axios from "axios";
import Batch from "../../components/Batch";
import Navbar from "../../components/navbar";
import Options from "../../components/Options";
import loggedIn from "../../components/LoggedIn";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Spinner from "../../components/spinner";

export default function Batches() {
  const [gotBatches, setGotBatches] = useState(false);
  const [myBatches, setMyBatches] = useState([]);
  const [batchCards, setBatchCards] = useState([]);
  const [onMobile, setMobile] = useState();
  const router = useRouter();
  const login = loggedIn();

  useEffect(() => {
    var screenWidth = document.body.clientWidth;
    if (screenWidth < 900) {
      setMobile(true)
    } else {
      setMobile(false)
    }

    window.addEventListener("resize", () => {
      screenWidth = document.body.clientWidth;
      if (screenWidth < 830) {
        setMobile(true)
      } else {
        setMobile(false)
      }
    })
  })


  // console.log(login);
  if (!(typeof login == "undefined")) {
    if (!login) {
      setTimeout(() => {
        router.push("/login");
      }, 1500);
    }
  }

  useEffect(() => {
    if (!gotBatches) {
      getBatches();
    }
  }, [gotBatches]);

  useEffect(() => {
    if (myBatches.length > 0) {
      let c = [];
      myBatches.forEach((item) => {
        c.push(<Batch key={item.slug} batchJson={item} />);
      });
      setBatchCards(c);
    }
  }, [myBatches]);

  const getBatches = async () => {
    const loginData = JSON.parse(localStorage.getItem("login-data"));
    if (loginData === null || !loginData.hasOwnProperty("access_token")) {
      localStorage.setItem("isLoggedIn", false);
      router.push("/login");
      return;
    }
    const endpoint = "/api/all-batches";
    const payload = {
      access_token: loginData.access_token,
      bought_batches: true,
    };
    var res = await axios.post(endpoint, payload);
    // console.log(res.status, res.data);
    if (res.status === 200 && res.data.success) {
      setMyBatches(res.data.data);
      setGotBatches(true);
    }
  };

  function searchHandler(e) {
    const c = [];
    const filteredResults = myBatches.filter((batch) => String(batch.name).toLowerCase().includes(e.target.value))
    filteredResults.forEach((item) => {
      c.push(<Batch key={item.slug} batchJson={item} />);
    });
    setBatchCards(c);
  }
  return (
    <div>
      {login ? (
        <div>
          <Navbar search={(e) => { searchHandler(e) }} />
          <div className="h-screen ease-in-out duration-500 bg-gray-100 dark:bg-[#121212]">
            {/* <Buttons /> */}
            <div className="flex flex-row justify-end"></div>
            {onMobile ? <>
              <h1 className="text-center text-3xl my-5 font-bold">MY BATCHES</h1>
              <div className="mx-auto w-11/11 px-8   grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 gap-10">
                {batchCards}
              </div>
            </> :
              <div className="mx-auto w-11/11 px-8 my-10 grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 gap-10">
                {batchCards}
              </div>
            }
            {/* <div className="mx-auto w-11/11 px-8 my-10 grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 gap-10">
              {batchCards}
            </div> */}
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
}
