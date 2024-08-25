import { createBrowserRouter, Outlet } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./page/home";
export const path = {
  home: "/home",
  menu: "/menu",
  about: "/about",
};
export const browserRoute = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        path: path.home,
        element: <Home />,
      },
      {
        path: path.about,
        element: <div></div>,
      },
      {
        path: path.menu,
        element: <div></div>,
      },
    ],
  },
]);
