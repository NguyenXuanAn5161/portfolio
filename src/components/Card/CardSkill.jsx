import { Card } from "antd";
import { useState } from "react";

const CardSkill = ({ data }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Card
      title={data?.technology}
      bordered={false}
      style={{
        width: 250,
        boxShadow: hovered
          ? "0px 8px 16px rgba(0, 0, 0, 0.2)"
          : "0px 4px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        transition: "box-shadow 0.3s ease-in-out",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <p>{data?.description}</p>
      {Array.isArray(data?.skills) && (
        <ul>
          {data?.skills.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </Card>
  );
};

export default CardSkill;
