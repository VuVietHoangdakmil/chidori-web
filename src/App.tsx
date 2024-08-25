import { ConfigProvider } from "antd";
import { RouterProvider } from "react-router-dom";
import { browserRoute } from "./routes";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#936a4e",
        },
        components: {
          Button: {
            primaryShadow: "none",
            algorithm: true, //
          },
        },
      }}
    >
      <RouterProvider router={browserRoute} />
    </ConfigProvider>
  );
}

export default App;
