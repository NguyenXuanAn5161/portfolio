import { useEffect, useState } from "react";
import { Button, Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./contexts/store/themeSlice";
import { useTranslation } from "react-i18next";
import HeaderComponent from "./components/layout/HeaderComponent";
import FooterComponent from "./components/layout/FooterComponent";
import SiderComponent from "./components/layout/SiderComponent";
import "./styles/theme.css";

const { Content } = Layout;

const App = () => {
  const [stateOpenKeys, setStateOpenKeys] = useState(["2", "23"]);
  const currentTheme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  // Thay đổi className của body khi theme thay đổi
  useEffect(() => {
    document.body.className = currentTheme === "dark" ? "dark-theme" : "";
  }, [currentTheme]);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Thay đổi ngôn ngữ
  };

  return (
    <Layout
      style={{
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
        transition: "background-color 0.3s, color 0.3s",
      }}
    >
      <SiderComponent
        stateOpenKeys={stateOpenKeys}
        setStateOpenKeys={setStateOpenKeys}
      />
      <Layout>
        <HeaderComponent />
        <Content
          style={{
            padding: "24px 16px 0",
            overflow: "initial",
          }}
        >
          <p
            style={{ color: "var(--text-color)" }}
          >{`Current Theme: ${currentTheme}`}</p>
          <Button type="primary" onClick={() => dispatch(toggleTheme())}>
            Toggle Theme
          </Button>

          <h1>{t("welcome")}</h1>
          <p>{t("about")}</p>
          <p>{t("contact")}</p>
          <button onClick={() => changeLanguage("en")}>English</button>
          <button onClick={() => changeLanguage("vi")}>Tiếng Việt</button>
          <h1>{t("user.name")}</h1>
          <p style={{ fontSize: 18 }}>{t("user.major")}</p>
          <p>{t("user.description")}</p>
        </Content>
        <FooterComponent />
      </Layout>
    </Layout>
  );
};

export default App;
