import { Image } from "antd";
import { useTranslation } from "react-i18next";
import ButtonCustom from "../../components/Button/Button";
import { useState } from "react";
import { SiGoogledocs } from "react-icons/si";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Introduction = () => {
  const { t } = useTranslation();
  const [loadingPortfolio, setLoadingPortfolio] = useState(false);
  const [loadingResume, setLoadingResume] = useState(false);

  const handleViewPortfolio = () => {
    setLoadingPortfolio(true);
    setTimeout(() => {
      setLoadingPortfolio(false);
    }, 1000);
  };

  const handleViewResume = () => {
    setLoadingResume(true);
    setTimeout(() => {
      setLoadingResume(false);
    }, 1000);
  };

  return (
    <div
      className="rowCustom introduction-bg"
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
        <div style={{ columnGap: 10, display: "flex" }}>
          <ButtonCustom
            loading={loadingPortfolio}
            onPress={handleViewPortfolio}
            iconLeft={<FaArrowAltCircleRight />}
            label={"View Portfolio"}
          />
          <ButtonCustom
            loading={loadingResume}
            onPress={handleViewResume}
            iconLeft={<SiGoogledocs />}
            label={"View Resume"}
            className={"btn-resume"}
          />
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Image height={300} width={400} src="https://placehold.co/800x600" />
      </div>
    </div>
  );
};

export default Introduction;
