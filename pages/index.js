import loggedIn from "../components/LoggedIn";
import Spinner from "../components/spinner";
import { useRouter } from "next/router";
import Head from 'next/head'

export default function Home() {
  const router = useRouter();
  const login = loggedIn();
  if (!(typeof login == "undefined")) {
    console.log(login);
    if (login) {
      router.push("/batches");
    }
    if (!login) {
      setTimeout(() => {
        router.push("/login");
      }, 1500);
    }
  }
  return (
    <div>
      <Head>
        <meta name="description" content="Better Version of PW Website made by students for students ;)" />
        <meta property="og:image" content="https://cdn.discordapp.com/attachments/988729878444642377/990616741908463626/pw_light.png"></meta>
        <meta name="keywords" content="better pw, pw, better physicswallah, physicswallah, pw nextjs, pankaj pw, titan pw, ankush pw, arnab pw, ag pw, rudransh pw"></meta>
      </Head>
      <Spinner />
    </div>
  );
}
