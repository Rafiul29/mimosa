
import Packages from '@/components/packages/Packages';
import Footer from '@/components/shared/footer/Footer';
import Navbar from '@/components/shared/navbar/Navbar';

import React from 'react';

const PackagesPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Packages fromPackages />
      </main>
      <Footer />
    </>
  );
};

export default PackagesPage;
