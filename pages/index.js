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
      <Spinner />
    </div>
  );
}
