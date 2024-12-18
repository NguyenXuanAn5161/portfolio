import { Button } from "antd";

const ButtonCustom = ({ iconLeft, onPress, loading, label, className }) => {
  return (
    <Button
      type="primary"
      icon={iconLeft}
      loading={loading}
      onClick={() => onPress()}
      className={className}
    >
      {label}
    </Button>
  );
};

export default ButtonCustom;
