import { Button, ButtonProps } from "antd";
import clsx from "clsx";
import "./index.css";

const ButtonCustom: React.FC<ButtonProps> = ({ children, ...passProps }) => {
  const { className } = passProps;
  return (
    <Button
      type="primary"
      {...passProps}
      className={clsx("rounded-[50px] custom-button", className)}
    >
      {children}
    </Button>
  );
};
export default ButtonCustom;
