import RootLayout from "@/components/Layouts/RootLayout";

const ProductDetail = ({ product }) => {
  return <div>{product?.productName}</div>;
};

export default ProductDetail;

ProductDetail.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:5000/products`);
  const products = await res.json();

  const paths = products?.data?.map((product) => ({
    params: { productId: product._id },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;

  const res = await fetch(`http://localhost:5000/product/${params.productId}`);
  const data = await res.json();

  return {
    props: {
      product: data,
    },
  };
};
