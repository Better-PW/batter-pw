import styles from '../styles/Home.module.css'
import Batch from '../components/Batch'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      {/* navbar code */}
      <nav style={{ boxShadow: "0 2px 2px -2px rgba(0,0,0,.2)" }} id="header">
        <div className='nav-items relative pb-4'>
          <ul className='items'>
            <li style={{ marginLeft: "20px" }} className='navbar-item inline-block pt-2'><i style={{ fontSize: "40px" }} className="fa-solid fa-bars"></i></li>
            <div style={{ marginLeft: "38%" }} className="inline-block">
              <div style={{ marginLeft: "0" }} className="inline-block">
                <li style={{ marginLeft: "20px" }} className='navbar-item text-3xl font-bold inline-block whitespace-normal text-center'>PHYSICS WALLAH</li>
                <li style={{ marginLeft: "20px" }} className='absolute top-0 right-0 navbar-item inline-block whitespace-normal mr-5'><Image src="/../public/pw_dark.png" width={60} height={60} /></li>
              </div>
            </div>
          </ul>
        </div>
      </nav>
      {/* batches and stuff */}
      <div style={{ backgroundColor: "#e8e8e8", height: "100vh" }} className='batches-page'>
        <div className="options">

        </div>
        <hr />
        <div style={{paddingLeft: "10%"}} className='batches relative px-20 mt-10 relative'>
          <Batch img="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" name="Lakshya JEE"/>
          <Batch name="Lakshya NEET" img="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
          <Batch name="Arjuna JEE" img="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
          <br />
          <br />
          <Batch name="Arjuna NEET" img="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
          <Batch name="Umeed Batch" img="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
          <Batch name="Another Batch" img="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
          <br />
          <br />
          <Batch name="Lakshya JEE" img="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
          <Batch name="Arjuna 2.0" img="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
          <Batch name="Arjuna 2.0" img="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
        </div>
      </div>

      <script src="https://kit.fontawesome.com/d3e43fefda.js" crossorigin="anonymous"></script>
    </div>
  )
}
