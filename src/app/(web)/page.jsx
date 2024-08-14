import HeroBanner from '@/components/HeroBanner/HeroBanner';
import Products from '@/components/Products/Products';
import { getHeroBanner, getProducts } from '@/libs/apis';

const Home = async () => {
  const bannerData = await getHeroBanner();
  const products = await getProducts();

  

  return (
    <>
    
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
     
      <div className="flex-wrap justify-center gap-6 mt-12 sm:flex m-4">
    {products?.map((product) => <Products key={product._id} product={product} />)}
    </div>


      {/* <HeroSection />
      <PageSearch />
      <FeaturedRoom featuredRoom={featuredRoom} />
      <Gallery />
      <NewsLetter /> */}
     
    </>
  );
};

// export const getServerSideProps = async () => {
//   const query = '*[_type == "product"]';
//   const products = await sanityClient.fetch(query);

//   const bannerQuery = '*[_type == "banner"]';
//   const bannerData = await sanityClient.fetch(bannerQuery);

//   return {
//     props: { products, bannerData }
//   }
// }

export default Home;
