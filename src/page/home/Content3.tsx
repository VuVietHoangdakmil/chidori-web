import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Step from "../../components/Step";
import { useTranslationCustom } from "../../hook/useTranslation";
import { ItemStep } from "../../components/Step/StepCustom";
import {
  SvgCoffeeInBed,
  SvgCoffeSpace,
  SvgLevelSeat,
  SvgMettingRoom,
  SvgPrivateRoom,
} from "../../svg";
import { Title } from "../../types/enum";
import ExitAnimation from "../../components/ExitAnimation";
import { Col, ConfigProvider, Row } from "antd";
import ButtonCustom from "../../components/Button/Button";
import color from "../../color";
import ThemeBlue from "../../components/Theme/ThemeBlue";
import { useGetDataSpace } from "../../hook/useGetData";
export type PropsSlide = {
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  text1: string;
  title: string;
  text3: string;
  icons: { imgicon: string; text: string }[];
  pathGotoDetail: string;
  pathBooking?: string;
};
const steps = [
  {
    title: (
      <ItemStep
        svg={<SvgCoffeSpace className="w-[80px] h-[80px]" />}
        title={Title.COFFEE_SAPCE}
      />
    ),
  },
  {
    title: (
      <ItemStep
        svg={<SvgMettingRoom className="w-[80px] h-[80px]" />}
        title={Title.METTING_ROOM}
      />
    ),
  },
  {
    title: (
      <ItemStep
        svg={<SvgLevelSeat className="w-[80px] h-[80px]" />}
        title={Title.LEVEL_SEAT}
      />
    ),
  },
  {
    title: (
      <ItemStep
        svg={<SvgCoffeeInBed className="w-[80px] h-[80px]" />}
        title={Title.COFFEE_IN_BAD}
      />
    ),
  },
  {
    title: (
      <ItemStep
        svg={<SvgPrivateRoom className="w-[80px] h-[80px]" />}
        title={Title.PRIVATE_ROOM}
      />
    ),
  },
];
export const IconCusom = ({
  imgicon,
  text,
}: {
  imgicon: string;
  text: string;
}) => {
  return (
    <div className="flex flex-col items-center">
      {" "}
      <img src={imgicon} className="w-[70%] h-[10rem]" />
      <div className=" text-primary-color text-[1.4rem] text-center font-medium">
        {text}
      </div>
    </div>
  );
};
const Slide: React.FC<PropsSlide> = ({
  img1,
  img2,
  img3,
  img4,
  text1,
  title,
  text3,
  icons,
  pathGotoDetail,
  pathBooking,
}) => {
  const { t } = useTranslationCustom();
  const navigate = useNavigate();

  return (
    <Row gutter={44}>
      <Col span={16}>
        <div className="rounded-tl-[150px] rounded-br-[150px] overflow-hidden">
          <Row
            gutter={[8, 8]}
            className="rounded-tl-[150px] rounded-br-[150px] overflow-hidden"
          >
            <Col span={10}>
              <img src={img1} className="h-[300px]" width="100%" />
            </Col>
            <Col span={14}>
              <img src={img2} className="h-[300px]" width="100%" />
            </Col>
            <Col span={14}>
              <img src={img3} className="h-[300px]" width="100%" />
            </Col>
            <Col span={10}>
              <img src={img4} className="h-[300px]" width="100%" />
            </Col>
          </Row>
        </div>
      </Col>
      <Col span={8}>
        <div className="text-primary-color-2-min-100 text-[1.2rem] font-medium">
          {text1?.toUpperCase()}
        </div>
        <div className="text-primary-color-2 text-[2.4rem] font-medium">
          {title}
        </div>
        <div className="text-color-text-primary text-[1.6rem] mt-[1rem] text-justify ">
          {text3}
        </div>
        <Row gutter={[18, 18]} className="my-[3rem]">
          {icons?.map((item, index) => (
            <Col key={index} span={12} className="flex flex-col items-center">
              <IconCusom imgicon={item.imgicon} text={item.text} />
            </Col>
          ))}
        </Row>

        <ButtonCustom
          onClick={() => {
            navigate(pathGotoDetail);
          }}
          className=" w-full h-[5rem] mt-[1.5rem] mb-[0.8rem] text-primary-color-2 text-[1.6rem] font-medium"
        >
          {t("t32")}
        </ButtonCustom>
        {pathBooking && (
          <ThemeBlue>
            <ButtonCustom className="w-full h-[5rem]   text-[1.6rem] font-medium  ">
              {t("t36") + " " + title}
            </ButtonCustom>
          </ThemeBlue>
        )}
      </Col>
    </Row>
  );
};
const Content3 = () => {
  const { t } = useTranslationCustom();
  const { DataSpace } = useGetDataSpace();
  const dataSlider: PropsSlide[] = DataSpace;

  const [current, setCurrent] = useState(0);
  const slides = useMemo(
    () =>
      steps.map((step, index) => {
        console.log(step);
        const {
          img1,
          img2,
          img3,
          img4,
          text1,
          title,
          text3,
          pathGotoDetail,
          pathBooking,
          icons,
        } = dataSlider[index] ?? [];
        return (
          <Slide
            key={index}
            img1={img1}
            img2={img2}
            img3={img3}
            img4={img4}
            text1={text1}
            text3={text3}
            title={title}
            icons={icons}
            pathGotoDetail={pathGotoDetail}
            pathBooking={pathBooking}
          />
        );
      }),
    [steps.length, JSON.stringify(dataSlider)]
  );
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: color["primary-color-2-min-100"],
        },
      }}
    >
      <div className="w-width-primary mx-auto mt-20">
        <div className="text-primary-color-2 font-medium text-[2.4rem] text-center">
          {t("t24")}
        </div>
        <div className="text-primary-color-2-min-100 font-medium text-[1.8rem] text-center">
          {t("t25")}
        </div>
        <div className="mt-32">
          <Step steps={steps} setCurrent={setCurrent} current={current} />
        </div>
        <div className="py-[6rem]">
          <ExitAnimation
            hiddenArrow={true}
            hiddenDot={true}
            slides={slides}
            dataNumber={current}
            slideSize="100%"
            setCurrent={setCurrent}
          />
        </div>
      </div>
    </ConfigProvider>
  );
};
export default Content3;
