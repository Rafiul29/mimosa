import Community from '@/components/home/Community';
import Hero from '../../components/home/Hero';
import Packages from '../../components/packages/Packages';
import Footer from '@/components/shared/footer/Footer';
import Navbar from '@/components/shared/navbar/Navbar';
import ComunityGathered from '@/components/home/ComunityGathered';
import Products from '@/components/products/Projects';
import Gallery from '@/components/home/Gallery';


const HomePage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Packages />
        <Products/>
        <Community />
      <ComunityGathered/>
      <Gallery/>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
