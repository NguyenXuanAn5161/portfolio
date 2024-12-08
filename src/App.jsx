import { useEffect, useState } from "react";
import { Button, Layout, Menu, Switch } from "antd";
import reactLogo from "./assets/react.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./contexts/store/themeSlice";
import "./css/theme.css";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { VscColorMode } from "react-icons/vsc";

const { Content, Footer, Sider } = Layout;

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
    icon: <MailOutlined />,
    label: "Navigation One",
    children: [
      {
        key: "11",
        label: "Option 1",
      },
      {
        key: "12",
        label: "Option 2",
      },
      {
        key: "13",
        label: "Option 3",
      },
      {
        key: "14",
        label: "Option 4",
      },
    ],
  },
  {
    key: "2",
    icon: <AppstoreOutlined />,
    label: "Navigation Two",
    children: [
      {
        key: "21",
        label: "Option 1",
      },
      {
        key: "22",
        label: "Option 2",
      },
      {
        key: "23",
        label: "Submenu",
        children: [
          {
            key: "231",
            label: "Option 1",
          },
          {
            key: "232",
            label: "Option 2",
          },
          {
            key: "233",
            label: "Option 3",
          },
        ],
      },
      {
        key: "24",
        label: "Submenu 2",
        children: [
          {
            key: "241",
            label: "Option 1",
          },
          {
            key: "242",
            label: "Option 2",
          },
          {
            key: "243",
            label: "Option 3",
          },
        ],
      },
    ],
  },
  {
    key: "3",
    icon: <SettingOutlined />,
    label: "Navigation Three",
    children: [
      {
        key: "31",
        label: "Option 1",
      },
      {
        key: "32",
        label: "Option 2",
      },
      {
        key: "33",
        label: "Option 3",
      },
      {
        key: "34",
        label: "Option 4",
      },
    ],
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
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontWeight: "700",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              columnGap: 10,
            }}
          >
            <VscColorMode />
            <p>Dark mode</p>
          </div>
          <Switch
            checked={currentTheme === "dark"}
            onChange={() => dispatch(toggleTheme())}
          />
        </div>
      </Sider>
      <Layout>
        <Content
          style={{
            margin: "24px 16px 0",
            overflow: "initial",
          }}
        >
          <p>{`Current Theme: ${currentTheme}`}</p>
          <Button type="primary" onClick={() => dispatch(toggleTheme())}>
            Toggle Theme
          </Button>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;
