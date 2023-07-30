import product1 from "@/assets/product1.jpg";
import RootLayout from "@/components/Layouts/RootLayout";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Col, Rate, Row } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";

const ProductDetail = ({ product }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This effect runs only on the client-side
    setIsClient(true);
  }, []);
  return (
    <div style={{ width: "90%", margin: "5px auto" }}>
      <Row gutter={16} className="product-detail-container">
        <Col xs={24} sm={24} md={12}>
          <div>
            <Image width={500} height={500} src={product1} alt="news image" />
          </div>
        </Col>
        <Col xs={24} sm={24} md={12}>
          <div style={{ textAlign: "left", margin: "10px", lineHeight: "0px" }}>
            <p
              style={{
                fontSize: "16px",
                fontWeight: "500",
                margin: "25px 0px",
                color: "gray",
              }}
            >
              {product?.status}
            </p>
            <p
              style={{
                fontSize: "16px",
                fontWeight: "500",
                margin: "25px 0px",
                color: "gray",
              }}
            >
              # {product?.category}
            </p>
            {isClient && ( // Render Rate component only on the client-side
              <Rate
                disabled
                defaultValue={product?.average_rating}
                style={{ fontSize: "16px" }}
              />
            )}
            <p
              style={{
                fontSize: "26px",
                fontWeight: "500",
                margin: "25px 0px",
              }}
            >
              {product?.productName}
            </p>
            <p
              style={{
                fontSize: "20px",
                fontWeight: "500",
                margin: "25px 0px",
                lineHeight: "18px",
                color: "#296dc1",
              }}
            >
              ${product?.price}
            </p>
            <p
              style={{
                fontSize: "16px",
                fontWeight: "500",
                margin: "25px 0px",
                lineHeight: "18px",
                color: "gray",
              }}
            >
              {product?.description}
            </p>
            <div className="product-features-list">
              <h2 style={{ fontWeight: "500", marginTop: "2rem" }}>
                Product Features:
              </h2>
              <ul style={{ lineHeight: "25px", fontSize: "16px" }}>
                {Object?.entries(product?.key_features)?.map(([key, value]) => (
                  <li key={key} style={{ listStyle: "none" }}>
                    <strong style={{ fontWeight: "500" }}>
                      {key}:
                    </strong>{" "}
                    {value}
                  </li>
                ))}
              </ul>
            </div>
            {/* Reviews Section */}
            <div className="reviews-section">
              <h2 style={{ fontWeight: "500", marginTop: "2rem" }}>
                Product Reviews:
              </h2>
              {product?.reviews?.map((review, index) => (
                <p
                  key={index}
                  style={{
                    listStyle: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "16px",
                    // marginTop: "20px",
                    // lineHeight: "20px"
                  }}
                >
                  <Avatar icon={<UserOutlined />} />
                  <span style={{ lineHeight: "20px" }}>{review.comment}</span>
                </p>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetail;

ProductDetail.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://computer-valley-server.vercel.app/products`);
  const data = await res.json();
  const porducts = await data?.data;
  // console.log(porducts);

  const paths = porducts.map((product) => ({
    params: { productId: product._id },
  }));
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;

  const res = await fetch(
    `https://computer-valley-server.vercel.app/products/${params?.productId}`
  );
  const data = await res.json();

  return {
    props: {
      product: data,
    },
  };
};
