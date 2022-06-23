import styles from '../styles/Home.module.css'
import Batch from '../components/Batch'
import Navbar from '../components/navbar'
import Options from '../components/Options';

export default function Home() {
  const batchList = [];
  batchList.push(<Batch name="test batch A" thumb_uri="/media/batch.jpg" />)
  batchList.push(<Batch name="test batch A" thumb_uri="/media/batch.jpg" />)
  batchList.push(<Batch name="test batch A" thumb_uri="/media/batch.jpg" />)
  batchList.push(<Batch name="test batch A" thumb_uri="/media/batch.jpg" />)
  batchList.push(<Batch name="test batch A" thumb_uri="/media/batch.jpg" />)
  return (
    <div>
      <Navbar />
      <div className='bg-[#e8e8e8] h-screen'>
        <div className="flex flex-row p-2 justify-end">
          <Options />
        </div>

        <div className='mx-16 my-10 grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 gap-10'>
          {batchList}
        </div>
      </div>

    </div>
  )
}
