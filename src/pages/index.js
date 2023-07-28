import RootLayout from "@/components/Layouts/RootLayout";
import BannerSlider from "@/components/Ui/BannerSlider";
import FeaturedProducts from "@/components/Ui/FeaturedProducts";

const Home = () => {
  return (
    <div>
      <BannerSlider />
      <FeaturedProducts />
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
