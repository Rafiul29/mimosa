'use client';
import PackageDetailsSection from '@/components/home/PackageDetailsSection';
import Footer from '@/components/shared/footer/Footer';
import Navbar from '@/components/shared/Navbar';
import { data } from '@/data/packages';
import { packageItem } from '@/types/packageItem';

const PackageDetailsPage = ({ params }: { params: { id: string } }) => {
  const id = +params.id;

  const packageItem = data.find((item: packageItem) => item.id === id);

  if (!packageItem) {
    return null;
  }
  return (
    <>
      <Navbar />
      <main>
        <PackageDetailsSection packageItem={packageItem} />
      </main>
      <Footer />
    </>
  );
};

export default PackageDetailsPage;
