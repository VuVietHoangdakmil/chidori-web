import { createBrowserRouter, Outlet, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Layoutb from "./components/Layoutb";
import Home from "./page/home";
import SpaceDetail from "./page/detail_space";
import Member from "./page/member/Member";
import About from "./page/about";
export const path = {
  home: "/a/home",
  menu: "menu",
  about: "/b/about",
  spaceDetail: "/a/space",
  membership: "/b/membership",
};
export const browserRoute = createBrowserRouter([
  {
    path: "/a",
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
        path: path.menu,
        element: <div></div>,
      },
      {
        path: path.spaceDetail + "/:id",
        element: <SpaceDetail />,
      },
    ],
  },
  {
    path: "/b",
    element: (
      <Layoutb>
        <Outlet />
      </Layoutb>
    ),
    children: [
      {
        path: path.membership,
        element: <Member />,
      },
      {
        path: path.about,
        element: <About />,
      },
    ],
  },
  {
    path: "/",
    element: <Navigate to={path.home} />,
  },
]);
