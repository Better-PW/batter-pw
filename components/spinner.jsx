import Image from "next/image";

export default function Spinner() {
  return (
    <div className="h-screen flex flex-col text-center justify-center overflow-hidden shadow-2xl">
      <div className="my-5 animate-ping">
        <Image
          className="pw-image"
          src="/media/pw_light.png"
          width={60}
          height={65}
        />
      </div>
      <div className="font-bold text-2xl animate-pulse"></div>
    </div>
  );
}
