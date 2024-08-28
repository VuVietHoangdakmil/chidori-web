import { Button, ButtonProps } from "antd";
import clsx from "clsx";
import "./index.css";
interface ButtonPropsCustom extends ButtonProps {
  hoverPimaryColor?: boolean;
  hoverOpacity?: boolean;
}
const ButtonCustom: React.FC<ButtonPropsCustom> = ({
  children,
  ...passProps
}) => {
  const { className, hoverPimaryColor, hoverOpacity } = passProps;
  return (
    <Button
      type="primary"
      {...passProps}
      className={clsx("rounded-[50px] custom-button ", className, {
        "hover-bg-primary": hoverPimaryColor,
        "hover-bg-opacyti": hoverOpacity,
      })}
    >
      {children}
    </Button>
  );
};
export default ButtonCustom;
