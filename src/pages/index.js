import RootLayout from "@/components/Layouts/RootLayout";

const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
