import Image from 'next/image';

export default function Login() {
  return (
    <div className="h-screen bg-white flex flex-col justify-center text-center content-center subpixel-antialiased font-poppins">
      <div className="my-5"><Image src="/../public/pw_dark.png" width={100} height={110} /></div>
      <div className="text-4xl tracking-widest">Welcome To <span className="font-bold">PHYSICS WALLAH</span></div>
      <div className="my-3 mb-20 font-light text-xl tracking-widest">
        Padhlo Chahe Kahi Se<br />Selection Hoga Yahi Se
      </div>
      <div className="flex flex-row justify-center">
        <input className="w-64 mx-2 px-5 text-black bg-gray-300 rounded-lg drop-shadow-xl text-black tracking-wide" type="tel" required minlength="10" maxlength="10" id="phone" placeholder="Enter phone number here" />
        <button className="mx-2 p-3 px-7 bg-btn rounded-lg drop-shadow-2xl text-white">LOGIN</button>
      </div>
    </div>
  )
}

//ARNAB KE DWARA YEH TEXT LIKHA GAYA HE