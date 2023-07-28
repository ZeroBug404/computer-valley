import RootLayout from "@/components/Layouts/RootLayout";

const CPU = () => {
  return (
    <div>
      <h1>CPU</h1>
    </div>
  );
};

export default CPU;

CPU.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
