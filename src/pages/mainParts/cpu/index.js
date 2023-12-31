import RootLayout from "@/components/Layouts/RootLayout";
import ProductCard from "@/components/Ui/ProductCard";
import { useGetProductsQuery } from "@/redux/api/api";
import { Col, Row } from "antd";

const CPU = () => {
  const { data, isLoading, isError, error } = useGetProductsQuery();

  const cpu = data?.data?.filter(product => product.category === 'CPU')

  return (
    <div style={{ padding: 16 }}>
      <h2 style={{margin: "0px", lineHeight: "100px", fontSize: "35px", fontWeight: "600"}}>CPU</h2>

      <Row gutter={[16, 16]} style={{ width: "95%", margin: "auto" }}>
        {cpu?.map((product) => (
          <Col key={product._id} xs={24} sm={12} md={8} lg={6}>
            <div>
              <ProductCard product={product} />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CPU;

CPU.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
