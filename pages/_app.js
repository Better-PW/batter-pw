import '../styles/globals.css'
import Toggle from '../components/Toggle'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
