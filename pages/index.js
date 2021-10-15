import { useEffect } from 'react';
import Head from 'next/head'
import Cards from '../components/index/Cards'
import About from '../components/index/About'
import Faq from '../components/index/Faq'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Banner from '../components/index/Banner'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Subscription from '../components/index/Subscription'
import Stats from '../components/index/Stats';
import Footer from "../components/index/Footer";


export default function Home(){
  useEffect(() => {
    AOS.init({
      offset: 200,
      delay: 0,
      duration: 600
    });

  }, []);
  return (
    <div>
      <Head>
        <title>Open Source</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico"/>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js" integrity="sha384-W8fXfP3gkOKtndU4JGtKDvXbO53Wy8SZCQHczT5FMiiqmQfUpWbYdTil/SxwZgAN" crossOrigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.min.js" integrity="sha384-skAcpIdS7UcVUC05LJ9Dxay8AXcDYfBJqt1CJ85S/CFujBsIzCIv+l9liuYLaMQ/" crossOrigin="anonymous"></script>
      </Head>
      <Banner/>
      <About/> 
      <Stats/>
      <Cards />
      <Subscription/>
      <Faq/>
      <Footer />
</div>
  
  )
}
