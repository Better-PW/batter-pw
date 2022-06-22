import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <div className={styles.container}>
      <nav id="header">
        <div className="burger">
          <i style={{fontSize: "26px", paddingTop: "10px"}} className="fa-solid fa-bars"></i>
        </div>
      </nav>
      <script src="https://kit.fontawesome.com/d3e43fefda.js" crossorigin="anonymous"></script>
    </div>
  )
}
