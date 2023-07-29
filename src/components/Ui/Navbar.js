import { Button, Dropdown, Layout, Menu } from "antd";
import Link from "next/link";

const { Header } = Layout;

const Navbar = () => {
  const items = [
    {
      key: "1",
      label: (
        <Link rel="noopener noreferrer" href="/mainParts/cpu">
          CPU / Processor
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link rel="noopener noreferrer" href="/mainParts/motherboard">
          Motherboard
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link rel="noopener noreferrer" href="/mainParts/ram">
          RAM
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link rel="noopener noreferrer" href="/mainParts/powerSupply">
          Power Supply Unit
        </Link>
      ),
    },
    {
      key: "4",
      label: (
        <Link rel="noopener noreferrer" href="/mainParts/storage">
          Storage Device
        </Link>
      ),
    },
    {
      key: "5",
      label: (
        <Link rel="noopener noreferrer" href="/mainParts/monitor">
          Monitor
        </Link>
      ),
    },
    {
      key: "6",
      label: (
        <Link rel="noopener noreferrer" href="/mainParts/others">
          Others
        </Link>
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
          {/* <Link
            href={"/"}
            className=""
            style={{ fontSize: "20px", fontWeight: "500" }}
          >
            Service
          </Link> */}
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
