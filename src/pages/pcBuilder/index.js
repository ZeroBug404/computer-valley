import RootLayout from "@/components/Layouts/RootLayout";
import { Button, Space, Table } from "antd";
import Link from "next/link";
import { useState } from "react";
import {
  BsCpu,
  BsDiagram3,
  BsFillCheckCircleFill,
  BsMotherboard,
} from "react-icons/bs";
import { FiMonitor } from "react-icons/fi";
import { ImPowerCord } from "react-icons/im";
import { MdStorage } from "react-icons/md";
import { useSelector } from "react-redux";

const PcBuilder = () => {
  const [complete, setComplete] = useState(false);

  const { addedToBuild } = useSelector((state) => state.product);

  const cpu = addedToBuild.filter((data) => data.category === "CPU");
  const motherboard = addedToBuild.filter(
    (data) => data.category === "Motherboard"
  );
  const monitor = addedToBuild.filter((data) => data.category === "Monitor");
  const storage = addedToBuild.filter(
    (data) => data.category === "Storage Device"
  );
  const powerSupply = addedToBuild.filter(
    (data) => data.category === "Power Supply Unit"
  );
  const ram = addedToBuild.filter((data) => data.category === "RAM");

  
  const columns = [
    {
      title: "Category",
      dataIndex: "nameWithIcon",
      key: "nameWithIcon",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Action",
      key: "action",
      align: "right",
      render: (text, record) => (
        <Link href={`/mainParts/${record.key}`}>
          <Button onClick={() => handleChoose(record)} style={{}}>
            Choose
          </Button>
        </Link>
      ),
    },
  ];

  const handleChoose = (record) => {
    console.log("You chose:", record.name);
  };

  const data = [
    {
      key: "cpu",
      nameWithIcon: (
        <>
          <Space
            style={{
              fontSize: "20px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <BsCpu /> {/* Icon to display before the name */}
            <p>CPU / Processor</p>
          </Space>
          <div>
            {cpu &&
              cpu.map((data, index) => (
                <p
                  key={index}
                  style={{
                    color: "gray",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <BsFillCheckCircleFill style={{ color: "#548ACD" }} />
                  {data.productName}
                </p>
              ))}
          </div>
        </>
      ),
    },
    {
      key: "motherboard",
      nameWithIcon: (
        <>
          <Space
            style={{ fontSize: "20px", display: "flex", alignItems: "center" }}
          >
            <BsMotherboard /> {/* Icon to display before the name */}
            <p>Motherboard</p>
          </Space>
          <div>
            {motherboard &&
              motherboard.map((data, index) => (
                <p
                  key={index}
                  style={{
                    color: "gray",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <BsFillCheckCircleFill style={{ color: "#548ACD" }} />
                  {data.productName}
                </p>
              ))}
          </div>
        </>
      ),
    },
    {
      key: "monitor",
      nameWithIcon: (
        <>
          <Space
            style={{ fontSize: "20px", display: "flex", alignItems: "center" }}
          >
            <FiMonitor /> {/* Icon to display before the name */}
            <p>Monitor</p>
          </Space>
          <div>
            {monitor &&
              monitor.map((data, index) => (
                <p
                  key={index}
                  style={{
                    color: "gray",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <BsFillCheckCircleFill style={{ color: "#548ACD" }} />
                  {data.productName}
                </p>
              ))}
          </div>
        </>
      ),
    },
    {
      key: "storage",
      nameWithIcon: (
        <>
          <Space
            style={{ fontSize: "20px", display: "flex", alignItems: "center" }}
          >
            <MdStorage /> {/* Icon to display before the name */}
            <p>Storage</p>
          </Space>
          <div>
            {storage &&
              storage.map((data, index) => (
                <p
                  key={index}
                  style={{
                    color: "gray",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <BsFillCheckCircleFill style={{ color: "#548ACD" }} />
                  {data.productName}
                </p>
              ))}
          </div>
        </>
      ),
    },
    {
      key: "powerSupply",
      nameWithIcon: (
        <>
          <Space
            style={{ fontSize: "20px", display: "flex", alignItems: "center" }}
          >
            <ImPowerCord /> {/* Icon to display before the name */}
            <p>Power Supply</p>
          </Space>
          <div>
            {powerSupply &&
              powerSupply.map((data, index) => (
                <p
                  key={index}
                  style={{
                    color: "gray",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <BsFillCheckCircleFill style={{ color: "#548ACD" }} />
                  {data.productName}
                </p>
              ))}
          </div>
        </>
      ),
    },
    {
      key: "ram",
      nameWithIcon: (
        <>
          <Space
            style={{ fontSize: "20px", display: "flex", alignItems: "center" }}
          >
            <BsDiagram3 /> {/* Icon to display before the name */}
            <p>RAM</p>
          </Space>
          <div>
            {ram &&
              ram.map((data, index) => (
                <p
                  key={index}
                  style={{
                    color: "gray",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <BsFillCheckCircleFill style={{ color: "#548ACD" }} />
                  {data.productName}
                </p>
              ))}
          </div>
        </>
      ),
    },
  ];
  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <style jsx>{`
        @media screen and (max-width: 767px) {
          .table-container {
            width: 100%;
            margin: auto;
            font-size: 30px;
          }
        }
        @media screen and (min-width: 768px) {
          .table-container {
            width: 75%;
            margin: auto;
            font-size: 30px;
          }
        }
      `}</style>
      <h1>PC Builder - Build Your Own Computer</h1>
      <div className="table-container">
        <div
          style={{
            lineHeight: "0px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p style={{ marginBottom: "25px" }}>Select Components</p>
          {complete === true ? (
            <Button size="large" danger style={{ marginBottom: "0px" }}>
              Complete
            </Button>
          ) : (
            <Button size="large" danger disabled>
              Complete
            </Button>
          )}
        </div>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default PcBuilder;

PcBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
