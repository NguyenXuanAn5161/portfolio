import { useEffect, useState } from "react";
import { Layout } from "antd";
import { useSelector } from "react-redux";
import HeaderComponent from "../HeaderComponent";
import FooterComponent from "../FooterComponent";
import SiderComponent from "../SiderComponent";
import "../../styles/theme.css";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

const LayoutComponent = () => {
  const [stateOpenKeys, setStateOpenKeys] = useState(["2", "23"]);
  const currentTheme = useSelector((state) => state.theme.theme);

  // Thay đổi className của body khi theme thay đổi
  useEffect(() => {
    document.body.className = currentTheme === "dark" ? "dark-theme" : "";
  }, [currentTheme]);

  return (
    <Layout>
      <SiderComponent
        stateOpenKeys={stateOpenKeys}
        setStateOpenKeys={setStateOpenKeys}
      />
      <Layout>
        <HeaderComponent />
        <Content>
          <Outlet />
        </Content>
        <FooterComponent />
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;
