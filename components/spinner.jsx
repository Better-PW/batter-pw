import Image from "next/image";

export default function Spinner() {
    return <div className="h-screen flex flex-col text-center align-middle justify-center">
        <div>
            <Image className="rounded-xl" src="https://c.tenor.com/RVvnVPK-6dcAAAAM/reload-cat.gif" height={100} width={100} />
            <div className="font-poppins font-bold text-2xl">Loading Your Page</div>
        </div>
    </div>
}
