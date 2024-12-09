import { Switch } from "antd";
import { VscColorMode } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "antd/es/layout/layout";
import { toggleTheme } from "../../contexts/store/themeSlice";

const HeaderComponent = () => {
  const currentTheme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  return (
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
  );
};

export default HeaderComponent;
