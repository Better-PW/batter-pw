import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      {/* navbar code */}
      <nav style={{boxShadow: "0 2px 2px -2px rgba(0,0,0,.2)"}} id="header">
        <div className='nav-items relative pb-4'>
          <ul className='items'>
            <li style={{ marginLeft: "20px" }} className='navbar-item inline-block'><i style={{ fontSize: "40px" }} className="fa-solid fa-bars"></i></li>
            <div style={{marginLeft: "38%"}} className="inline-block">
              <div style={{marginLeft: "0"}} className="inline-block">
                <li style={{ marginLeft: "20px" }} className='navbar-item text-3xl font-bold inline-block whitespace-normal text-center'>PHYSICS WALLAH</li>
                <li style={{ marginLeft: "20px" }} className='absolute top-0 right-0 navbar-item inline-block whitespace-normal mr-5'><Image src="/../public/pw_dark.png" width={60} height={60} /></li>
              </div>
            </div>
          </ul>
        </div>
      </nav>
      {/* batches and stuff */}
      

      <script src="https://kit.fontawesome.com/d3e43fefda.js" crossorigin="anonymous"></script>
    </div>
  )
}
