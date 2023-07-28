import { Button, Dropdown, Layout, Menu } from "antd";
import Link from "next/link";

const { Header } = Layout;

const Navbar = () => {
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          CPU / Processor
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Motherboard
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          RAM
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          Power Supply Unit
        </a>
      ),
    },
    {
      key: "4",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          Storage Device
        </a>
      ),
    },
    {
      key: "5",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          Monitor
        </a>
      ),
    },
    {
      key: "6",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          Others
        </a>
      ),
    },
  ];
  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "white",
        color: "gray",
      }}
    >
      <div className="bg-white" />
      <Menu theme="" mode="horizontal" defaultSelectedKeys={["2"]}>
        <div
          style={{
            display: "flex",
            gap: "2rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link
            href={"/"}
            className=""
            style={{ fontSize: "20px", fontWeight: "500" }}
          >
            Home
          </Link>
          <Link
            href={"/"}
            className=""
            style={{ fontSize: "20px", fontWeight: "500" }}
          >
            Service
          </Link>
          <Dropdown menu={{ items }} placement="bottomLeft" arrow style={{}}>
            <Button size="large" style={{ fontWeight: "500" }}>
              Categories
            </Button>
          </Dropdown>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <Button style={{ fontWeight: "500" }} size="large" type="primary">
              Build PC
            </Button>
          </div>
        </div>
      </Menu>
    </Header>
  );
};

export default Navbar;
