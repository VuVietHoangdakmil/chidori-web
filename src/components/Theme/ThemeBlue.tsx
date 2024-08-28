import { ConfigProvider } from "antd";
import color from "../../color";
const Theme = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: color["primary-color-2"],
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};
export default Theme;
