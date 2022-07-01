import Navbar from '../../../components/navbar';
// import ClassCard from '../../../components/ClassCard';
import axios from 'axios';
// import Spinner from '../../../components/spinner';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Router, useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const TodaysClass = ({ classJson }) => {
    // const [thumbnailUrl, setThumbnailUrl] = useState('')
    console.log(classJson);
    // useEffect(() => {
    //   console.log(classJson)
    //   const thumbnailImage = classJson.image || classJson.videoDetails.image;
    //   const dummyImagePW = `https://d2bps9p1kiy4ka.cloudfront.net/5eb393ee95fab7468a79d189/d34a0325-deab-4031-a8fa-03d840ea0c5d.jpeg`
    //   thumbnailImage == undefined ? setThumbnailUrl(dummyImagePW) : setThumbnailUrl(thumbnailImage.baseUrl + thumbnailImage.key)
    // }, [classJson])
    return (<div className="m-3 cursor-pointer max-w-md ease-in-out duration-500 flex hover:scale-105 hover:shadow-2xl bg-white dark:bg-[#2a2a2a] flex-col p-3 pb-0 rounded-md shadow-xl">
        <div className="rounded-md shadow-xl">
            <Image
                className="rounded-md"
                width={720}
                height={360}
                layout="responsive"
                // src={`/api/image-proxy?imageUrl=${thumbnailUrl}`}
                src={`/api/image-proxy?imageUrl=${classJson.videoDetails.image}`}
                alt={classJson.topic + " Thumbnail"}
            />
        </div>
        <div className="flex py-3 justify-between items-center my-auto">
            <div className="ease-in-out duration-500 font-semibold text-xl m-2 w-fit text-black dark:text-white">{classJson.topic}</div>
            {/* <Link href={`/batches/${batchJson._id}`}>
        <button className="font-poppins font-semibold p-2 px-5 bg-[#1a5ec5] border-2 border-[#1a5ec5] hover:border-[#1a5ec5] hover:bg-[#ffffff] hover:text-[#1a5ec5] ease-in-out duration-300 rounded-md drop-shadow-2xl text-white dark:hover:border-[#1a5ec5] dark:hover:bg-[#4b4b4b9c] dark:hover:text-white">Study Now</button>
      </Link> */}
        </div>
    </div>)
}

export default function BatchView() {
    const router = useRouter();
    var { batchID, classID } = router.query;
    const [batchDetails, setBatchDetails] = useState({});
    const [gotBatch, setGotBatch] = useState(false);
    // const [scheduleCards, setScheduleCards] = useState([]);
    // const [kitneClassThe, setKitneClassThe] = useState(0); // Sholay refrence?
    const [aajKiLiveClass, setAajKiLiveClass] = useState();
    // console.log(batchID);

    const getBatchDetails = async () => {
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

    var subIDs = [];
    const getBatchSchedule = async () => {
        const loginData = JSON.parse(localStorage.getItem("login-data"));
        if (loginData === null || !loginData.hasOwnProperty("access_token")) {
            localStorage.setItem("isLoggedIn", false);
            router.push("/login");
            return;
        }
        // console.log(subIDs)
        var todaysSchedList = [];
        subIDs.forEach(async (id) => {
            const payload = {
                batchID: batchID,
                subID: id,
                access_token: loginData.access_token
            }
            var r = await axios.post("/api/schedule", payload);
            const sched = r.data.data;
            sched.forEach((sche) => {
                // console.log(sche);
                sche.schedules.forEach((sch) => {
                    // console.log(sch);
                    var schDate = new Date(sch.date);
                    var today = new Date();
                    const todayDate = [today.getDate(), today.getMonth(), today.getFullYear()];
                    const schedDate = [schDate.getDate(), schDate.getMonth(), schDate.getFullYear()];
                    if (todayDate[0] == schedDate[0] && todayDate[1] == schedDate[1] && todayDate[2] == schedDate[2]) {
                        if (sch.videoDetails && sch._id == classID) {
                            console.log(sch);
                            setAajKiLiveClass(sch);
                        }
                    }
                })
            })
            // if (todaysSchedList.length > 0 && todaysSchedList.length > kitneClassThe) {
            //     // console.log(todaysSchedList);
            //     setScheduleCards(todaysSchedList);
            //     setKitneClassThe(todaysSchedList.length);
            // }
        })
    }

    useEffect(() => {
        // var batchID = router.query.batchID;
        // console.log(batchID);
        if (!gotBatch) {
            // console.log("ok");
            getBatchDetails();
        } else if (gotBatch && batchDetails) {
            const subs = batchDetails.subjects;
            // console.log(subs);
            subs.forEach((item) => {
                subIDs.push(item._id);
            });
            getBatchSchedule();
        }
    }, [gotBatch, batchID])

    function redirect() {
        router.push("/batches")
    }

    useEffect(() => {

    }, [aajKiLiveClass])

    return (
        <div>
            {batchDetails ?
                <div>
                    <Navbar />
                    <div className="h-screen ease-in-out duration-500 bg-gray-100 dark:bg-[#121212]">
                        <div className='flex flex-row'>
                            <div className="backButton mx-10 text-2xl hover:cursor-pointer pt-5"><FontAwesomeIcon onClick={redirect} icon={faArrowLeft} /></div>
                            {aajKiLiveClass ? <div className='font-bold font-poppins my-5 text-2xl '>{aajKiLiveClass.topic}</div> : <div className="m-10 text-xl">Loading Live Lecture...</div>}
                        </div>
                        {aajKiLiveClass ? <div>
                            <iframe src={aajKiLiveClass.videoDetails.embedCode} className="px-5 aspect-video w-full md:w-3/4" ></iframe>
                        </div> : <div className="m-10 text-xl">Loading Live Lecture...</div>}
                    </div>
                </div>
                : <div className='font-bold font-poppins m-5 text-2xl'>Loading...</div>}
        </div>
    )
}

