import { Button, Image } from "antd";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <>
      <div
        className="rowCustom"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          columnGap: "1.5rem",
          padding: "3rem",
        }}
      >
        <div style={{ padding: "1em" }}>
          <h2 style={{ fontSize: "3rem", margin: 0 }}>{t("user.name")}</h2>
          <p style={{ fontSize: "1.5rem", fontWeight: "300", margin: 0 }}>
            {t("user.major")}
          </p>
          <p>{t("user.description")}</p>
          <Button>View Portfolio</Button>
          <Button>View Resume</Button>
        </div>
        <div style={{ textAlign: "center" }}>
          <Image height={300} width={400} src="https://placehold.co/800x600" />
        </div>
      </div>
    </>
  );
};
export default AboutMe;
