import { useGetProductsQuery } from "@/redux/api/api";
import { Col, Row } from "antd";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  const { data, isLoading, isError, error } = useGetProductsQuery();

  const featured = data?.data?.filter((product) => product.featured === true);

  return (
    <div style={{ width: "95%", margin: "auto", marginTop: "5rem", }}>
      <h2
        style={{
          textAlign: "left",
          color: "gray",
          fontSize: "30px",
          lineHeight: "70px",
          fontWeight: "600",
          marginTop: "4.5rem",
          marginBottom: "4rem",
          width: "95%", margin: "auto"
        }}
      >
        Featured Products
      </h2>

      <Row gutter={[16, 16]} style={{ width: "100%", margin: "auto" }}>
        {featured?.map((product) => (
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

export default FeaturedProducts;
