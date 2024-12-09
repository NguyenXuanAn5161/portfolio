import { Menu, Layout } from "antd";
import reactLogo from "../../assets/react.svg";
import { FaUser, FaBriefcase, FaFileAlt, FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const { Sider } = Layout;

const siderStyle = {
  overflow: "auto",
  height: "100vh",
  top: 0,
  bottom: 0,
  scrollbarWidth: "thin",
};

const getMenuItems = (t) => [
  {
    key: "1",
    icon: <FaUser />,
    label: t("menu.about"),
  },
  {
    key: "2",
    icon: <FaBriefcase />,
    label: t("menu.portfolio"),
  },
  {
    key: "3",
    icon: <FaFileAlt />,
    label: t("menu.resume"),
  },
  {
    key: "4",
    icon: <FaEnvelope />,
    label: t("menu.contact"),
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

const SiderComponent = ({ stateOpenKeys, setStateOpenKeys }) => {
  const { t } = useTranslation();
  const items = getMenuItems(t); // Truyền t vào hàm để lấy danh sách menu
  const levelKeys = getLevelKeys(items);
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

  return (
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
  );
};

export default SiderComponent;
