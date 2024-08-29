import { useTranslationCustom } from "./useTranslation";
import { Location } from "../types/location";
import { Title } from "../types/enum";
import { useMemo } from "react";
import { PropsSlide } from "../page/home/Content3";
import { path } from "../routes";
import { Prams } from "../until/textHander";

import {
  SvgIconAir,
  SvgIconDesk,
  SvgIconPaper,
  SvgIconProjector,
  SvgIconTissue,
  SvgIconWifi,
  SvgIconWorkDesk,
} from "../svg";
const useGetDataLocation = () => {
  const { t } = useTranslationCustom();
  const locations: Location[] = [
    {
      // img: "/img/location/location1.jpg",
      img: "/img/grey/1b.jpg",
      text: t("t51"),
      title: t("t30"),
      spaces: [Title.COFFEE_SAPCE],
    },
    {
      img: "/img/grey/2b.jpg",
      text: t("t53"),
      title: t("t52"),
      spaces: [Title.COFFEE_SAPCE],
    },
  ];
  return { t, locations };
};
const useGetDataSpace = () => {
  const { t } = useTranslationCustom();
  const DataSpace: PropsSlide[] = useMemo(
    () => [
      {
        // img1: "/img/step/1.jpg",
        // img2: "/img/step/2.jpg",
        // img3: "/img/step/3.jpg",
        // img4: "/img/step/4.jpg",
        img1: "/img/grey/1b.jpg",
        img2: "/img/grey/2b.jpg",
        img3: "/img/grey/3b.jpg",
        img4: "/img/grey/4b.jpg",
        text1: t("t28"),
        title: Title.COFFEE_SAPCE,
        text3: t("t29"),
        icons: [
          { imgicon: "/img/step/1-icon1.png", text: t("t30") },
          { imgicon: "/img/step/1-icon2.png", text: t("t31") },
        ],
        pathGotoDetail:
          path.spaceDetail + "/" + Prams(Title.COFFEE_SAPCE).conver,
        pathBooking: "",
      },
      {
        // img1: "/img/step/1-a.jpg",
        // img2: "/img/step/2-c.jpg",
        // img3: "/img/step/3-c1.jpg",
        // img4: "/img/step/4-c2.jpg",
        img1: "/img/grey/1b.jpg",
        img2: "/img/grey/3b.jpg",
        img3: "/img/grey/2b.jpg",
        img4: "/img/grey/5b.jpg",
        text1: t("t28"),
        title: Title.METTING_ROOM,
        text3: t("t33"),
        icons: [
          { imgicon: "/img/step/2-icon1.png", text: t("t34") },
          { imgicon: "/img/step/1-icon2.png", text: t("t35") },
        ],
        pathGotoDetail:
          path.spaceDetail + "/" + Prams(Title.METTING_ROOM).conver,
        pathBooking: "1",
      },
      {
        // img1: "/img/step/1-b1.jpg",
        // img2: "/img/step/2-b2.jpg",
        // img3: "/img/step/3-b3.jpg",
        // img4: "/img/step/4-b4.jpg",
        img1: "/img/grey/2b.jpg",
        img2: "/img/grey/3b.jpg",
        img3: "/img/grey/4b.jpg",
        img4: "/img/grey/5b.jpg",
        text1: t("t28"),
        title: Title.LEVEL_SEAT,
        text3: t("t37"),
        icons: [
          { imgicon: "/img/step/3-icon1.png", text: t("t38") },
          { imgicon: "/img/step/3-icon2.png", text: t("t40") },
        ],
        pathGotoDetail: path.spaceDetail + "/" + Prams(Title.LEVEL_SEAT).conver,
        pathBooking: "1",
      },
      {
        // img1: "/img/step/1-d1.jpg",
        // img2: "/img/step/2-d2.jpg",
        // img3: "/img/step/3-d3.jpg",
        // img4: "/img/step/4-d4.jpg",
        img1: "/img/grey/2b.jpg",
        img2: "/img/grey/3b.jpg",
        img3: "/img/grey/5b.jpg",
        img4: "/img/grey/1b.jpg",
        text1: t("t28"),
        title: Title.COFFEE_IN_BAD,
        text3: t("t41"),
        icons: [
          { imgicon: "/img/step/4-icon1.png", text: t("t42") },
          { imgicon: "/img/step/4-icon2.png", text: t("t43") },
          { imgicon: "/img/step/4-icon3.png", text: t("t44") },
        ],
        pathGotoDetail:
          path.spaceDetail + "/" + Prams(Title.COFFEE_IN_BAD).conver,
        pathBooking: "1",
      },
      {
        // img1: "/img/step/5a.jpg",
        // img2: "/img/step/5b.jpg",
        // img3: "/img/step/5c.jpg",
        // img4: "/img/step/5d.jpg",

        img1: "/img/grey/4b.jpg",
        img2: "/img/grey/3b.jpg",
        img3: "/img/grey/5b.jpg",
        img4: "/img/grey/2b.jpg",
        text1: t("t28"),
        title: Title.PRIVATE_ROOM,
        text3: t("t45"),
        icons: [
          { imgicon: "/img/step/5-icon1.png", text: t("t46") },
          { imgicon: "/img/step/5-icon2.png", text: t("t47") },
        ],
        pathGotoDetail:
          path.spaceDetail + "/" + Prams(Title.PRIVATE_ROOM).conver,
        pathBooking: "1",
      },
    ],
    [t("t28")]
  );
  return { t, DataSpace };
};
const useGetDataSpaceDetail = () => {
  const { t } = useTranslationCustom();
  const [Air, Desk, Wifi, Page, Projector, Power, FreeTea, WorkDesk, Tissue] =
    t("tServices").split("#");
  const DataSpaceDetail = useMemo(
    () => [
      {
        // img: "/img/step/1.jpg",
        img: "/img/grey/3b.jpg",
        key: Title.COFFEE_SAPCE,
        contentInfo: t("t55"),
        svg: [
          { text: Air, svg: <SvgIconAir className="h-[30px] w-[30px]" /> },
          { text: Wifi, svg: <SvgIconWifi className="h-[30px] w-[30px]" /> },
          { text: Desk, svg: <SvgIconDesk className="h-[30px] w-[30px]" /> },
        ],
      },
      {
        // img: "/img/step/1-a.jpg",
        img: "/img/grey/2b.jpg",
        contentInfo: t("t59"),
        key: Title.METTING_ROOM,
        svg: [
          { text: Page, svg: <SvgIconPaper className="h-[30px] w-[30px]" /> },
          { text: Wifi, svg: <SvgIconWifi className="h-[30px] w-[30px]" /> },
          {
            text: Projector,
            svg: <SvgIconProjector className="h-[30px] w-[30px]" />,
          },
          {
            text: Power,
            svg: <SvgIconProjector className="h-[30px] w-[30px]" />,
          },
        ],
      },
      {
        // img: "/img/step/2-b2.jpg",
        img: "/img/grey/4b.jpg",
        contentInfo: t("t60"),
        key: Title.LEVEL_SEAT,
        svg: [
          {
            text: FreeTea,
            svg: <SvgIconWorkDesk className="h-[30px] w-[30px]" />,
          },
          { text: Wifi, svg: <SvgIconWifi className="h-[30px] w-[30px]" /> },
          {
            text: Tissue,
            svg: <SvgIconTissue className="h-[30px] w-[30px]" />,
          },
          {
            text: WorkDesk,
            svg: <SvgIconWorkDesk className="h-[30px] w-[30px]" />,
          },
        ],
      },
    ],
    [t("t28")]
  );
  return { t, DataSpaceDetail };
};
const useGetNavList = () => {
  const { t } = useTranslationCustom();
  const listNav = useMemo(
    () => [
      {
        title: t("t1"),
        active: "",
        path: "",
        key: 1,
      },
      {
        title: t("t2"),
        active: "",
        path: "",
        key: 2,
      },
      {
        title: t("t3"),
        active: "",
        path: path.membership,
        key: 3,
      },
      {
        title: t("t4"),
        active: "",
        path: path.about,
        key: 4,
      },
      {
        title: t("t5"),
        active: "",
        path: "",
        key: 5,
      },
    ],
    [t("t3")]
  );
  return { t, listNav };
};
export {
  useGetDataLocation,
  useGetDataSpace,
  useGetDataSpaceDetail,
  useGetNavList,
};
