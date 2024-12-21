import { Card } from "antd";

const CardSkill = () => {
  return (
    <>
      <Card
        title="Java Spring"
        bordered={false}
        style={{
          width: 300,
        }}
      >
        <p>
          Tôi đã có 3 tháng thực tập tại FPT, nơi tôi chuyên sâu về backend với
          Java Spring và Thymeleaf. Thời gian tại đây đã giúp tôi không chỉ nắm
          vững kỹ thuật mà còn hiểu sâu hơn về quy trình làm việc nhóm trong các
          doanh nghiệp quốc tế. Tôi đã học được cách làm việc hiệu quả, quản lý
          thời gian và phối hợp cùng đồng nghiệp để đạt được mục tiêu chung.
        </p>
        <p>
          Tại trường Đại học Công nghiệp Thành phố Hồ Chí Minh, tôi đã học các
          khái niệm cơ bản và nâng cao của lập trình Java. Các khóa học bao gồm:
        </p>
        <ul>
          <li>OOP (Object-Oriented Programming) - Lập trình hướng đối tượng</li>
          <li>
            Data Structures and Algorithms - Cấu trúc dữ liệu và giải thuật
          </li>
          <li>Database Management - Quản lý cơ sở dữ liệu</li>
          <li>Web Development with Java - Phát triển web với Java</li>
          <li>
            Software Engineering Principles - Các nguyên tắc kỹ thuật phần mềm
          </li>
        </ul>
        <p>
          Những kiến thức này đã trang bị cho tôi nền tảng vững chắc để phát
          triển ứng dụng backend phức tạp và tích hợp hệ thống hiệu quả.
        </p>
      </Card>

      <Card
        title="React"
        bordered={false}
        style={{
          width: 300,
        }}
      >
        <p>
          Trong quá trình học tập và thực tập, tôi đã học được cách xây dựng
          giao diện người dùng hiệu quả và tối ưu hóa trải nghiệm người dùng với
          React. Những kỹ năng chính mà tôi đã phát triển bao gồm:
        </p>
        <ul>
          <li>Component-Based Architecture - Kiến trúc dựa trên thành phần</li>
          <li>State Management với Redux và Context API</li>
          <li>Hook API và cách sử dụng hiệu quả</li>
          <li>Integration with RESTful APIs</li>
          <li>Performance Optimization</li>
        </ul>
      </Card>

      <Card
        title="Node.js"
        bordered={false}
        style={{
          width: 300,
        }}
      >
        <p>
          Tôi có kinh nghiệm làm việc với Node.js để xây dựng các ứng dụng
          server-side hiệu quả. Dưới đây là những kỹ năng mà tôi đã nắm vững:
        </p>
        <ul>
          <li>Asynchronous Programming - Lập trình bất đồng bộ</li>
          <li>Building RESTful APIs</li>
          <li>Database Integration with MongoDB và SQL</li>
          <li>Using Express.js framework</li>
        </ul>
      </Card>
    </>
  );
};

export default CardSkill;
