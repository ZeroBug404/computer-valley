import { Card } from "antd";
import { BsCpu } from "react-icons/bs";

const CategoryCard = ({
  item,
  isHovered,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  return (
    <Card
      hoverable
      bordered={false}
      style={{
        width: 300,
        height: 200,
        backgroundColor: isHovered ? "#548ACD" : "white",
        transition: "background-color 0.3s ease",
        color: isHovered ? "white" : "#548ACD",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
        <span style={{ fontSize: "25px", fontWeight: "500" }}>{item.name}</span>
      </p>
    </Card>
  );
};

export default CategoryCard;
