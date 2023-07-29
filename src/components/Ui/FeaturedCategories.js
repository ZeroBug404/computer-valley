import { Card, Col, Row } from "antd";
import Link from "next/link";
import { useState } from "react";
import { BsCpu } from "react-icons/bs";
import { FiMonitor } from "react-icons/fi";
import { MdStorage } from "react-icons/md";
import { ImPowerCord } from "react-icons/im";
import { BsDiagram3 } from "react-icons/bs";
import { BsMotherboard } from "react-icons/bs";

const FeaturedCategories = () => {
  const [isCpuHovered, setIsCpuHovered] = useState(false);
  const [isMonitorHovered, setIsMonitorHovered] = useState(false);
  const [isStorageHovered, setIsStorageHovered] = useState(false);
  const [isPowerHovered, setIsPowerHovered] = useState(false);
  const [isRamHovered, setIsRamHovered] = useState(false);
  const [isMotherboardHovered, setIsMotherboardHovered] = useState(false);

  const handleCpuMouseEnter = () => {
    setIsCpuHovered(true);
  };

  const handleCpuMouseLeave = () => {
    setIsCpuHovered(false);
  };
  const handleMonitorMouseEnter = () => {
    setIsMonitorHovered(true);
  };

  const handleMonitorMouseLeave = () => {
    setIsMonitorHovered(false);
  };
  const handleStorageMouseEnter = () => {
    setIsStorageHovered(true);
  };

  const handleStorageMouseLeave = () => {
    setIsStorageHovered(false);
  };
  const handlePowerMouseEnter = () => {
    setIsPowerHovered(true);
  };

  const handlePowerMouseLeave = () => {
    setIsPowerHovered(false);
  };
  const handleRamMouseEnter = () => {
    setIsRamHovered(true);
  };

  const handleRamMouseLeave = () => {
    setIsRamHovered(false);
  };
  const handleMotherboradMouseEnter = () => {
    setIsMotherboardHovered(true);
  };

  const handleMotherboradMouseLeave = () => {
    setIsMotherboardHovered(false);
  };

  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <h2
        style={{
          textAlign: "left",
          color: "gray",
          fontSize: "30px",
          lineHeight: "20px",
          fontWeight: "600",
          marginTop: "4rem",
          marginBottom: "3rem",
        }}
      >
        Featured Categories
      </h2>
      <Row gutter={[16, 16]} style={{ width: "100%", margin: "auto" }}>
        {/* Show 3 cards on large devices */}
        <Col
          xs={24}
          sm={12}
          md={8}
          lg={8}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link href={"/mainParts/cpu"}>
            <Card
              hoverable
              bordered={false}
              style={{
                width: 350,
                height: 200,
                backgroundColor: isCpuHovered ? "#548ACD" : "white",
                transition: "background-color 0.3s ease",
                color: isCpuHovered ? "white" : "#548ACD",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onMouseEnter={handleCpuMouseEnter}
              onMouseLeave={handleCpuMouseLeave}
            >
              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <BsCpu style={{ fontSize: "75px" }} />
                <span style={{ fontSize: "25px", fontWeight: "500" }}>CPU</span>
              </p>
            </Card>
          </Link>
        </Col>

        <Col
          xs={24}
          sm={12}
          md={8}
          lg={8}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link href={"/mainParts/monitor"}>
            <Card
              hoverable
              bordered={false}
              style={{
                width: 350,
                height: 200,
                backgroundColor: isMonitorHovered ? "#548ACD" : "white",
                transition: "background-color 0.3s ease",
                color: isMonitorHovered ? "white" : "#548ACD",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onMouseEnter={handleMonitorMouseEnter}
              onMouseLeave={handleMonitorMouseLeave}
            >
              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <FiMonitor style={{ fontSize: "75px" }} />
                <span style={{ fontSize: "25px", fontWeight: "500" }}>
                  Monitor
                </span>
              </p>
            </Card>
          </Link>
        </Col>

        <Col
          xs={24}
          sm={12}
          md={8}
          lg={8}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link href={"/mainParts/storage"}>
            <Card
              hoverable
              bordered={false}
              style={{
                width: 350,
                height: 200,
                backgroundColor: isStorageHovered ? "#548ACD" : "white",
                transition: "background-color 0.3s ease",
                color: isStorageHovered ? "white" : "#548ACD",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onMouseEnter={handleStorageMouseEnter}
              onMouseLeave={handleStorageMouseLeave}
            >
              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <MdStorage style={{ fontSize: "75px" }} />
                <span style={{ fontSize: "25px", fontWeight: "500" }}>
                  Storage
                </span>
              </p>
            </Card>
          </Link>
        </Col>
        <Col
          xs={24}
          sm={12}
          md={8}
          lg={8}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link href={"/mainParts/powerSupply"}>
            <Card
              hoverable
              bordered={false}
              style={{
                width: 350,
                height: 200,
                backgroundColor: isPowerHovered ? "#548ACD" : "white",
                transition: "background-color 0.3s ease",
                color: isPowerHovered ? "white" : "#548ACD",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onMouseEnter={handlePowerMouseEnter}
              onMouseLeave={handlePowerMouseLeave}
            >
              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <ImPowerCord style={{ fontSize: "75px" }} />
                <span style={{ fontSize: "25px", fontWeight: "500" }}>
                  Power Supply
                </span>
              </p>
            </Card>
          </Link>
        </Col>
        <Col
          xs={24}
          sm={12}
          md={8}
          lg={8}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link href={"/mainParts/ram"}>
            <Card
              hoverable
              bordered={false}
              style={{
                width: 350,
                height: 200,
                backgroundColor: isRamHovered ? "#548ACD" : "white",
                transition: "background-color 0.3s ease",
                color: isRamHovered ? "white" : "#548ACD",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onMouseEnter={handleRamMouseEnter}
              onMouseLeave={handleRamMouseLeave}
            >
              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <BsDiagram3 style={{ fontSize: "75px" }} />
                <span style={{ fontSize: "25px", fontWeight: "500" }}>RAM</span>
              </p>
            </Card>
          </Link>
        </Col>
        <Col
          xs={24}
          sm={12}
          md={8}
          lg={8}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link href={"/mainParts/motherboard"}>
            <Card
              hoverable
              bordered={false}
              style={{
                width: 350,
                height: 200,
                backgroundColor: isMotherboardHovered ? "#548ACD" : "white",
                transition: "background-color 0.3s ease",
                color: isMotherboardHovered ? "white" : "#548ACD",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onMouseEnter={handleMotherboradMouseEnter}
              onMouseLeave={handleMotherboradMouseLeave}
            >
              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <BsMotherboard style={{ fontSize: "75px" }} />
                <span style={{ fontSize: "25px", fontWeight: "500" }}>
                  Motherboard
                </span>
              </p>
            </Card>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default FeaturedCategories;
