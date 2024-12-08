import { useEffect, useState } from "react";
import { Button, Layout, Menu, Switch } from "antd";
import reactLogo from "./assets/react.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./contexts/store/themeSlice";
import "./styles/theme.css";
import {
  FaUser,
  FaBriefcase,
  FaFileAlt,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { VscColorMode } from "react-icons/vsc";

const { Header, Content, Footer, Sider } = Layout;

const siderStyle = {
  overflow: "auto",
  height: "100vh",
  top: 0,
  bottom: 0,
  scrollbarWidth: "thin",
};

const items = [
  {
    key: "1",
    icon: <FaUser />,
    label: "About Me",
  },
  {
    key: "2",
    icon: <FaBriefcase />,
    label: "Portfolio",
  },
  {
    key: "3",
    icon: <FaFileAlt />,
    label: "Resume",
  },
  {
    key: "4",
    icon: <FaEnvelope />,
    label: "Contact",
  },
];

const getLevelKeys = (items1) => {
  const key = {};
  const func = (items2, level = 1) => {
    items2.forEach((item) => {
      if (item.key) {
        key[item.key] = level;
      }
      if (item.children) {
        func(item.children, level + 1);
      }
    });
  };
  func(items1);
  return key;
};

const levelKeys = getLevelKeys(items);

const App = () => {
  const [stateOpenKeys, setStateOpenKeys] = useState(["2", "23"]);
  const onOpenChange = (openKeys) => {
    const currentOpenKey = openKeys.find(
      (key) => stateOpenKeys.indexOf(key) === -1
    );
    // open
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
      setStateOpenKeys(
        openKeys
          // remove repeat key
          .filter((_, index) => index !== repeatIndex)
          // remove current level all child
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey])
      );
    } else {
      // close
      setStateOpenKeys(openKeys);
    }
  };

  const currentTheme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  // Thay đổi className của body khi theme thay đổi
  useEffect(() => {
    document.body.className = currentTheme === "dark" ? "dark-theme" : "";
  }, [currentTheme]);

  return (
    <Layout>
      <Sider style={siderStyle}>
        <div style={{ textAlign: "center" }}>
          <img src={reactLogo} className="logo" alt="Vite logo" />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["231"]}
          items={items}
          openKeys={stateOpenKeys}
          onOpenChange={onOpenChange}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            height: "4%",
            backgroundColor: "var(--bg-color)",
            color: "var(--text-color)",
            transition: "background-color 0.3s, color 0.3s",
          }}
        >
          <div
            style={{
              fontWeight: "700",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              columnGap: 10,
              color: "var(--text-color)",
            }}
          >
            <VscColorMode style={{ fontSize: 20 }} />
            <Switch
              checked={currentTheme === "dark"}
              onChange={() => dispatch(toggleTheme())}
            />
          </div>
        </Header>
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
        </Content>
        <Footer
          style={{
            textAlign: "center",
            padding: "20px 0",
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
                © {new Date().getFullYear()} Nguyễn Xuân An. All rights
                reserved.
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
      </Layout>
    </Layout>
  );
};
export default App;
