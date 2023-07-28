import product1 from "@/assets/product1.jpg";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Card, Rate } from "antd";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  const { Meta } = Card;
  return (
    <Card
      hoverable
      cover={
        <Image
          style={{ padding: "0rem 2rem" }}
          src={product1}
          width={500}
          height={200}
          responsive
          alt="news image"
        />
      }
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "10px 0px",
        }}
      >
        {/* <Meta title={product?.productName} /> */}
        <p
          style={{
            fontSize: "16px",
            fontWeight: "700",
            margin: "0px",
          }}
        >
          {product?.productName.length > 25
            ? product?.productName.slice(0, 20) + ".."
            : product?.productName}
        </p>
        <p
          style={{
            fontSize: "18px",
            fontWeight: "700",
            margin: "0px",
            color: "#296dc1",
          }}
        >
          ${product?.price}
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p
          style={{
            fontSize: "14px",
            // fontWeight: "700",
            margin: "0px",
            color: "gray",
          }}
        >
          Category:{" "}
          <span
            style={{
              fontSize: "14px",
              fontWeight: "700",
              margin: "0px",
              color: "gray",
            }}
          >
            {product?.category}
          </span>
        </p>
        <p
          style={{
            fontSize: "14px",
            // fontWeight: "700",
            margin: "0px",
            color: "gray",
          }}
        >
          <span
            style={{
              fontSize: "14px",
              fontWeight: "700",
              margin: "0px",
              color: "gray",
            }}
          >
            {product?.status}
          </span>
        </p>
      </div>

      <Rate
        disabled
        defaultValue={product?.rating}
        style={{ fontSize: "16px" }}
      />

      <Link href={`/products/${product?._id}`}>
        <p
          style={{
            fontSize: "15px",
            marginTop: "20px",
            backgroundColor: "black",
            color: "white",
            width: "100%",
            padding: "2px 5px ",
            fontWeight: "300",
            letterSpacing: "3px",
            textAlign: "center",
          }}
        >
          View Detail <ArrowRightOutlined />
        </p>
      </Link>
    </Card>
  );
};

export default ProductCard;
