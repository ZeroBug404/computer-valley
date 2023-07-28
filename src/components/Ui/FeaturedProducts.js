import { useGetProductsQuery } from "@/redux/api/api";
import { Col, Row } from "antd";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  const { data, isLoading, isError, error } = useGetProductsQuery();
  //   console.log(data.data);
  return (
    <div style={{ padding: 16 }}>
      <h2>Featured Products</h2>

      <Row gutter={[16, 16]} style={{ width: "95%", margin: "auto" }}>
        {data?.data?.map((product) => (
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
