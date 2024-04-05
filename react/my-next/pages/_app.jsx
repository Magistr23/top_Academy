import '../css/global.css';
import {Nav} from '../components/Nav';
export default function MyApp({ Component, pageProps }) {
    return <>
    <header>
        <Nav />
    </header>
        <Component {...pageProps} />
        <footer>Подвал</footer>
        </>

  }