import Link from 'next/link';
import Navbar from './reuseables/navbar';
import Footer from './reuseables/footer';
import MenuBar from './reuseables/menuBar';
import Banner from './home/hero';
import Allproducts from './products/allCategories';
import Services from './services';

export default function Home() {
  

  return (
    <>
       <MenuBar />
        <Banner />
        <Services />
        {/* <Allproducts /> */}
      <Footer />
    </>
  )
}
