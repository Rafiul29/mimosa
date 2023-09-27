import Community from '@/components/home/Community';
import Hero from '../../components/home/Hero';
import Packages from '../../components/packages/Packages';
import Footer from '@/components/shared/footer/Footer';
import Navbar from '@/components/shared/navbar/Navbar';
import ComunityGathered from '@/components/home/ComunityGathered';


const HomePage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Packages />
        <Community />
      <ComunityGathered/>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
