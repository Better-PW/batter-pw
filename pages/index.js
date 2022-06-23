import styles from '../styles/Home.module.css'
import Batch from '../components/Batch'
import Navbar from '../components/navbar'

export default function Home() {
  const batchList = [];
  batchList.push(<Batch name="test bastch A" thumb_uri="/media/batch.jpg" />)
  batchList.push(<Batch name="test bastch A" thumb_uri="/media/batch.jpg" />)
  batchList.push(<Batch name="test bastch A" thumb_uri="/media/batch.jpg" />)
  batchList.push(<Batch name="test bastch A" thumb_uri="/media/batch.jpg" />)
  batchList.push(<Batch name="test bastch A" thumb_uri="/media/batch.jpg" />)
  return (
    <div>
      <Navbar />
      <div className='bg-[#e8e8e8] h-screen'>
        <div className="flex flex-row p-2 justify-around">
          {/* search bar */}
          <input className='px-2 mx-1 placeholder:italic  placeholder:text-gray-400' style={{ borderRadius: "26px", width: "20rem", height: "2rem" }} type="text" placeholder="Search batches here"></input>
          {/* toggle */}
          <div className='mx-1 toggle-button inline'>
            <label className={styles.switch}>
              <input type="checkbox" />
              <span className={`${styles.slider} ${styles.round} float-right`}></span>
            </label>
          </div>
        </div>

        <div className='mx-16 my-10 grid grid-flow-col gap-10'>
          {batchList}
        </div>
      </div>

    </div>
  )
}
