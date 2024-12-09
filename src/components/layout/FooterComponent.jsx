import { Footer } from "antd/es/layout/layout";
import { useTranslation } from "react-i18next";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const FooterComponent = () => {
  const { t } = useTranslation();

  return (
    <Footer
      style={{
        textAlign: "center",
        padding: "20px 0",
        color: "var(--text-color)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div>
          <p>
            © {new Date().getFullYear()} Nguyễn Xuân An. {t("footer.copyright")}
          </p>
          <p> {t("footer.designed_with")} </p>
        </div>
        <div>
          <p>
            {t("footer.degree")}, <br /> {t("footer.class")}
          </p>
        </div>
        <div style={{ display: "flex", gap: "20px", marginTop: "10px" }}>
          <a
            href="https://www.linkedin.com/in/an-nguy%E1%BB%85n-xu%C3%A2n-1a751731a/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#0077b5" }}
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/NguyenXuanAn5161"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#333" }}
          >
            <FaGithub size={24} />
          </a>
          <a
            href="mailto:nguyenxuanan20021010@gmail.com"
            style={{ color: "#c71610" }}
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComponent;
