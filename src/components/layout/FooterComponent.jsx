import { Footer } from "antd/es/layout/layout";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const FooterComponent = () => {
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
            © {new Date().getFullYear()} Nguyễn Xuân An. All rights reserved.
          </p>
          <p>
            Designed with <span style={{ color: "red" }}>❤</span> using Ant
            Design
          </p>
        </div>
        <div>
          <p>
            Bachelor of Engineering, Software Engineering,
            <br />
            Class of 2020-2025, Industrial University of Ho Chi Minh City
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
