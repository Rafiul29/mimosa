import Products from '@/components/products/Projects';
import FooterMini from '@/components/shared/footer/FooterMini';
import Navbar from '@/components/shared/navbar/Navbar';

const ProductsPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Products fromProductPage />
      </main>
      <FooterMini />
    </>
  );
};

export default ProductsPage;