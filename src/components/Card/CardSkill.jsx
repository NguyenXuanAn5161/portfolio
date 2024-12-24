import { Card } from "antd";
import { useState } from "react";
import "../../styles/theme.css";
import { JS } from "../Svg/MySvg";

const CardSkill = ({ data }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="columnCustom gap-10">
      <JS />
      <Card
        title={data?.technology}
        bordered={false}
        style={{
          width: 250,
          boxShadow: hovered
            ? "var(--boxShadow-hovered)"
            : "var(--boxShadow-unhovered)",
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
    </div>
  );
};

export default CardSkill;
