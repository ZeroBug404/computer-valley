import RootLayout from "@/components/Layouts/RootLayout";
import BannerSlider from "@/components/Ui/BannerSlider";
import FeaturedCategories from "@/components/Ui/FeaturedCategories";
import FeaturedProducts from "@/components/Ui/FeaturedProducts";

const Home = () => {
  return (
    <div>
      <BannerSlider />
      <FeaturedProducts />
      <FeaturedCategories />
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
