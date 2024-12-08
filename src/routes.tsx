import { createBrowserRouter, Outlet } from "react-router-dom";
import Layout from "./components/Layout";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("./page/home"));
const SpaceDetail = lazy(() => import("./page/detail_space"));
const Member = lazy(() => import("./page/member/Member"));
const About = lazy(() => import("./page/about"));
const Booking = lazy(() => import("./page/booking"));
export const path = {
  home: "/home",
  menu: "menu",
  about: "/about",
  spaceDetail: "/space",
  booking: "/booking",
  membership: "/membership",
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
        element: (
          <Suspense fallback={<></>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: path.booking,
        element: (
          <Suspense fallback={<></>}>
            <Booking />
          </Suspense>
        ),
      },
      {
        path: path.spaceDetail + "/:id",
        element: (
          <Suspense fallback={<></>}>
            <SpaceDetail />{" "}
          </Suspense>
        ),
      },
      {
        path: path.membership,
        element: (
          <Suspense fallback={<></>}>
          
            <Member />
          </Suspense>
        ),
      },
      {
        path: path.about,
        element: (
          <Suspense fallback={<></>}>
            <About />{" "}
          </Suspense>
        ),
      },
    ],
  },
  
]);
