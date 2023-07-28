import { Layout } from "antd";
import Navbar from "../Ui/Navbar";
const { Header, Footer, Content } = Layout;

const RootLayout = ({ children }) => {
  const headerStyle = {
    textAlign: "center",
    height: 64,
    paddingInline: 50,
    lineHeight: "64px",
  };
  const contentStyle = {
    textAlign: "center",
    minHeight: 120,
    lineHeight: "120px",
  };
  const footerStyle = {
    textAlign: "center",
    backgroundColor: "#7dbcea",
  };
  return (
    <Layout>
      <Navbar style={headerStyle}></Navbar>
      <Content style={contentStyle}>{children}</Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Computer Valley ©2023 Created by ZeroBug_404
      </Footer>
    </Layout>
  );
};

export default RootLayout;
