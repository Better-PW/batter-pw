import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  // for (var i=0; i<10;i++){
  //   console.log('%c JOIN OUR DEV TEAM', 'font-size:40px; background:url(https://media.discordapp.net/attachments/988729878444642377/990863369156329563/unknown.png) no-repeat;');
  //   console.log("https://discord.gg/fWJ9n3nwQu")
  // }
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
