import { useTranslation } from "react-i18next";
import CardSkill from "../../components/Card/CardSkill";

const WhatIDo = () => {
  const { t } = useTranslation();

  const data = [
    {
      technology: "Vanilla JavaScript",
      description:
        "Sử dụng JavaScript nguyên bản để phát triển web mà không cần các thư viện hay framework phụ trợ.",
      skills: ["DOM Manipulation", "Event Handling", "ES6+ features"],
    },
    {
      technology: "Angular, React & Vue",
      description:
        "Các framework và thư viện JavaScript phổ biến để xây dựng giao diện người dùng tương tác và ứng dụng một trang.",
      frameworks: {
        Angular:
          "Framework mạnh mẽ được phát triển bởi Google, cung cấp cấu trúc MVC rõ ràng và nhiều tính năng tích hợp.",
        React:
          "Thư viện JavaScript của Facebook để xây dựng các thành phần UI có khả năng tái sử dụng.",
        Vue: "Framework tiến bộ, dễ tiếp cận và linh hoạt cho các ứng dụng giao diện người dùng.",
      },
    },
    {
      technology: "Node.js",
      description:
        "Runtime để thực thi JavaScript phía server, hỗ trợ xây dựng các ứng dụng mạng nhanh và có khả năng mở rộng.",
      skills: [
        "Asynchronous programming",
        "Event-driven architecture",
        "Scalable network applications",
      ],
    },
    {
      technology: "Python & Django",
      description:
        "Ngôn ngữ lập trình đa năng và framework web mạnh mẽ của Python.",
      frameworks: {
        Python:
          "Ngôn ngữ lập trình đa năng, nổi tiếng với cú pháp dễ hiểu và thư viện phong phú.",
        Django:
          "Framework web mạnh mẽ của Python, hỗ trợ phát triển nhanh với các công cụ bảo mật tích hợp sẵn.",
      },
    },
    {
      technology: "PHP",
      description:
        "Ngôn ngữ kịch bản phía server linh hoạt và mạnh mẽ, phổ biến trong việc xây dựng các ứng dụng web động.",
      skills: [
        "Server-side scripting",
        "Database integration (MySQL)",
        "Web development",
      ],
    },
    {
      technology: "npm, Gulp & Grunt",
      description:
        "Các công cụ để quản lý và tự động hóa các tác vụ trong quy trình phát triển.",
      tools: {
        npm: "Trình quản lý gói chính thức của Node.js, giúp quản lý phụ thuộc và cài đặt các module.",
        Gulp: "Công cụ tự động hóa quy trình phát triển, giúp tối ưu hóa thời gian và công sức.",
        Grunt:
          "Trình chạy tác vụ để thực hiện các công việc lặp lại như nén tệp, biên dịch Sass/LESS, và kiểm tra mã.",
      },
    },
    {
      technology: "HTML & CSS",
      description: "Các công nghệ cơ bản để xây dựng trang web.",
      skills: ["HTML markup", "CSS styling", "Responsive web design"],
    },
    {
      technology: "Sass & LESS",
      description:
        "Các bộ tiền xử lý CSS, mở rộng CSS với các tính năng như biến, quy tắc lồng nhau và hàm.",
      tools: {
        Sass: "Bộ tiền xử lý CSS, cho phép sử dụng biến, hàm, và quy tắc lồng nhau, giúp CSS dễ viết và quản lý hơn.",
        LESS: "Bộ tiền xử lý CSS với cú pháp tương tự Sass, hỗ trợ biến và các tính năng nâng cao khác.",
      },
    },
  ];

  return (
    <div
      style={{
        padding: "3rem",
      }}
    >
      <div style={{ padding: "1em" }}>
        <h2 style={{ fontSize: "2rem" }}>| {t("about.wid.title")}</h2>
        <p>{t("about.wid.introduction")}</p>
        <div
          className="rowCustom"
          style={{
            flexWrap: "wrap",
            justifyContent: "space-between",
            rowGap: 10,
          }}
        >
          {data.map((item, index) => (
            <CardSkill data={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
