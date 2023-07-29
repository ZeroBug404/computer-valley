import { Carousel } from "antd";
import Image from "next/image";
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";

const contentStyle = {
  height: "80vh",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  marginTop: "0px",
};

const imageStyle = {
  width: "100%",
  height: "85vh",
};

const BannerSlider = () => (
  <Carousel autoplay>
    <div>
      {/* <h3 style={contentStyle}>1</h3> */}
      <Image src={banner2} alt="Banner" style={imageStyle} />
    </div>
    <div>
      <Image src={banner1} alt="Banner" style={imageStyle} />
    </div>
  </Carousel>
);
export default BannerSlider;
