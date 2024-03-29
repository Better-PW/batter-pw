import Image from "next/image";

export default function Spinner() {
  return (
    <div className="h-screen flex flex-col text-center dark:invert justify-center overflow-hidden shadow-2xl">
      <div className="my-5 animate-ping">
        <Image
          className="pw-image"
          src="/media/pw.png"
          width={60}
          height={60}
        />
      </div>
      <div className="font-bold text-2xl animate-pulse"></div>
    </div>
  );
}
