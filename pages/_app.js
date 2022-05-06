import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import Header from '../components/layout/Header'

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Header />
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
