import RootLayout from "@/components/Layouts/RootLayout";
import ProductCard from "@/components/Ui/ProductCard";
import { useGetProductsQuery } from "@/redux/api/api";
import { Col, Row } from "antd";

const RAM = () => {
  const { data, isLoading, isError, error } = useGetProductsQuery();

  const ram = data?.data?.filter((product) => product.category === "RAM");

  return (
    <div style={{ padding: 16 }}>
      <h2
        style={{
          margin: "0px",
          lineHeight: "100px",
          fontSize: "35px",
          fontWeight: "600",
        }}
      >
        RAM
      </h2>

      <Row gutter={[16, 16]} style={{ width: "95%", margin: "auto" }}>
        {ram?.map((product) => (
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

export default RAM;

RAM.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
