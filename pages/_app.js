import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import '@/styles/layout/Header.css';
import '@/styles/layout/Footer.css';
import '@/styles/Home.css';
import '@/styles/login.css'
import axios from 'axios';

export default function App({ Component, pageProps }) {
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;
  axios.defaults.headers.common["Accept"] = 'application/json';
  axios.defaults.headers.common["retry-after"] = 3600;
  return <Component {...pageProps} />
}
