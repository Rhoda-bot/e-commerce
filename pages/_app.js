import Head from "next/head"
import Script from "next/script"
import { Provider } from "react-redux"
import { store } from "../redux/store"
import '../styles/main.sass'

function MyApp({ Component, pageProps }) {
  return (
    <>
       <Head> 
        <link    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Cairo&display=swap" rel="stylesheet"></link>
    </Head>
    <Script
      id="bootstrap-cdn"
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js" integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" crossorigin="anonymous" />
      <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"/>
      <Script src="https://kit.fontawesome.com/a0b0dcdc1c.js" crossorigin="anonymous"/>

     <Provider store={store}>
     <Component {...pageProps} />
     </Provider>
    </>
  )
}

export default MyApp
