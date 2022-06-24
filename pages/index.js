import styles from '../styles/Home.module.css'
import Batch from '../components/Batch'
import Navbar from '../components/navbar'
import Options from '../components/Options';
const axios = require("axios");
import { useState } from 'react';


export default function Home() {

  const[myBatches, setMyBatches] = useState([]);
  
  // Base URL
  const url = "https://api.penpencil.xyz";

  // Access token
  const access_token = "1c4b85c23ec9f09585bf476c751692075928dec3efcac5ddfd5860fcec1fb7cb";

  let batches = [];
  // batchList.push(<Batch name="ARJUNA JEE 2024" thumb_uri="/media/batch.jpg" />)
  // batchList.push(<Batch name="LAKSHYA JEE 2024" thumb_uri="/media/batch1.jpg" />)
  // batchList.push(<Batch name="ARJUNA NEET 2024" thumb_uri="/media/batch2.jpg" />)
  // batchList.push(<Batch name="LAKSHYA JEE 2024" thumb_uri="/media/batch3.jpg" />)
  // batchList.push(<Batch name="SANKALP 2029" thumb_uri="/media/batch.jpg" />)

  function getBatches() {
    let config = {
      headers: {
        authorization: `Bearer ${access_token}`
      },
      params: {
        mode: 1
      }
    }

    axios.get(`${url}/v3/batches/my-batches`, config)
      .then(response => {
        console.log(JSON.stringify(response.data)) // just do console.log(response.data.data) Pata hai bhai, woh api maine hi likha hai did i ask? :^)
        let batchName = "";
        response.data.data.forEach(i => {
          batchName = i["name"];
          batches.push(batchName)
        })
        console.log(`Total Batches: ${batches.length}`)
        console.log(batches)
        setMyBatches(batches)
        let batchList = [];
        for (var i=0;i<batches.length;i++){
          batchList.push(<Batch name={batches[i]} thumb_uri="/media/batch.jpg" />);
        }
      })
  }

  getBatches();

  return (
    <div>
      <Navbar />
      <div className='bg-[#e8e8e8] h-screen'>
        <div className="flex flex-row p-2 justify-end">
          <Options />
        </div>
        {
          myBatches.map((e) => {
            return(
              <h1>{e}</h1>
            )
          })
        }
        {/* <div className='mx-16 my-10 grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 gap-10'>
          {batchList}
        </div> */}
      </div>
    </div>
  )
}

