import { Dropdown, Menu, Radio, Space, Switch } from "antd";
import { VscColorMode } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "antd/es/layout/layout";
import { toggleTheme } from "../contexts/store/themeSlice";
import { useEffect, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";

const HeaderComponent = () => {
  const currentTheme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  const { i18n } = useTranslation();

  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    setLanguage(i18n.language);
  }, [i18n.language]);

  const onLanguageChange = (e) => {
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  const languageMenu = (
    <Menu>
      <Radio.Group onChange={onLanguageChange} value={language}>
        <Menu.Item key="1">
          <Radio value="en">
            <ReactCountryFlag countryCode="US" svg style={{ marginRight: 8 }} />
            English
          </Radio>
        </Menu.Item>
        <Menu.Item key="2">
          <Radio value="vi">
            <ReactCountryFlag countryCode="VN" svg style={{ marginRight: 8 }} />
            Vietnamese
          </Radio>
        </Menu.Item>
      </Radio.Group>
    </Menu>
  );

  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        height: "4%",
        padding: 0,
      }}
    >
      <div
        style={{
          fontWeight: "700",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Dropdown overlay={languageMenu} trigger={["hover"]}>
          <Space style={{ cursor: "pointer" }}>
            <ReactCountryFlag
              style={{ width: "1.9em", height: "1.9em" }}
              countryCode={language === "en" ? "US" : "VN"}
              svg
            />
            <Space>{language.toUpperCase()}</Space>
          </Space>
        </Dropdown>
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
