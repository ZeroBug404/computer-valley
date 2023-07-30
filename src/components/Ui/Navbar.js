import { Button, Dropdown, Layout, Menu } from "antd";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const { Header } = Layout;

const Navbar = () => {
  const { data: session } = useSession();
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
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Dropdown menu={{ items }} placement="bottomLeft" arrow style={{}}>
            <Button size="large" style={{ fontWeight: "500" }}>
              Categories
            </Button>
          </Dropdown>
          <Link
            href={"/"}
            className=""
            style={{ fontSize: "20px", fontWeight: "500" }}
          >
            Home
          </Link>

          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <Link href={"/pcBuilder"}>
              <Button style={{ fontWeight: "500" }} size="large" type="primary">
                Build PC
              </Button>
            </Link>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            {session?.user ? (
                <Button
                  danger
                  style={{ fontWeight: "500" }}
                  size="large"
                  type="primary"
                  onClick={() => signOut()}
                >
                  Logout
                </Button>
            ) : (
              <Link href={"/login"}>
                <Button
                  danger
                  style={{ fontWeight: "500" }}
                  size="large"
                  type="primary"
                >
                  Login
                </Button>
              </Link>
            )}
          </div>
        </div>
      </Menu>
    </Header>
  );
};

export default Navbar;
