import { Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { useTranslationCustom } from "../../hook/useTranslation";
import { useMemo } from "react";
import { SvgInBed } from "../../svg";
import ButtonCustom from "../../components/Button";
import clsx from "clsx";
type PropsMenu = {
  text1: string;
  text2: string;
  textLink?: {
    svg: boolean;
    text: string;
    link: string;
  };
  number: number;
};
const Menu: React.FC<PropsMenu> = ({ text1, text2, textLink, number }) => {
  const navigate = useNavigate();
  const handeler = () => {
    navigate(textLink?.link ?? "");
  };

  return (
    <div className="mt-[5.5rem] flex space-x-6 ">
      <div>
        <div
          className="bg-primary-color-min-200 w-[4.8rem] rounded-b-full h-[4.8rem] relative 
    mt-[2.4rem]"
        >
          <span className="text-primary-color text-[4.8rem] absolute bottom-[1.4rem] left-1/2 transform -translate-x-1/2 ">
            {number}
          </span>
        </div>
      </div>

      <div>
        <div className="text-[2rem] text-primary-color font-semibold">
          {text1}
        </div>
        <div className="text-[1.6rem] text-color-text-primary mt-[1rem] ">
          {text2}
        </div>
        {textLink && (
          <div
            className={clsx("flex items-center ", {
              "mt-[2rem]": !!textLink?.svg,
            })}
          >
            {textLink?.svg && (
              <SvgInBed className="text-primary-color w-[48px] h-[64px] mr-[1rem]" />
            )}
            <div
              onClick={handeler}
              className=" text-[1.6rem] text-primary-color mt-[1rem] font-medium underline underline-offset-4 cursor-pointer hover:text-primary-color-hover"
            >
              {textLink?.text}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Content1 = () => {
  const { t } = useTranslationCustom();

  const listMenu: PropsMenu[] = [
    {
      text1: t("t15"),
      text2: t("t16"),
      textLink: {
        svg: true,
        text: t("t11"),
        link: "",
      },
      number: 1,
    },
    {
      text1: t("t17"),
      text2: t("t18"),
      number: 2,
    },
    {
      text1: t("t19"),
      text2: t("t20"),
      textLink: {
        svg: false,
        text: t("t21"),
        link: "",
      },
      number: 3,
    },
    {
      text1: t("t22"),
      text2: t("t23"),
      number: 4,
    },
  ];

  const customt12 = useMemo(() => {
    const t12 = t("t12").split("#");
    return t12.map((t, index) => {
      if (t === "không gian" || t === "your own space") {
        return (
          <span key={index} className="bg-amber-300 px-1">
            {t}
          </span>
        );
      }
      return t;
    });
  }, [t("t12")]);

  return (
    <div className="bg-primary-color-min-300  w-full ">
      <div className="w-width-primary mx-auto py-32">
        <div className="w-[80%] mx-auto mb-[5rem]">
          <div className="text-color-text-primary text-center font-semibold text-[2.4rem]">
            {customt12}
          </div>
          <div className="text-color-text-primary text-center text-[1.8rem] mt-6">
            {t("t13")}
          </div>
        </div>
        <Row gutter={10} className="pb-[5rem]">
          <Col span={8}>
            <span className="text-[2rem] text-color-text-primary font-semibold">
              {t("t14")}
            </span>

            {listMenu.map((item, index) => (
              <Menu
                text1={item.text1}
                text2={item.text2}
                textLink={
                  item?.textLink && {
                    svg: !!item.textLink?.svg,
                    link: item?.textLink?.link + "",
                    text: item?.textLink?.text + "",
                  }
                }
                number={item.number}
                key={index}
              />
            ))}
            <div className="text-center">
              <ButtonCustom
                className="w-[150px] h-[50px] mt-[5rem] "
                type="primary"
                hoverPimaryColor={true}
              >
                {t("t6")}
              </ButtonCustom>
            </div>
          </Col>
          <Col span={16} className="grid justify-items-end">
            <div className="relative">
              <img
                src="/img/how-to-1.jpg"
                style={{ borderRadius: "50%" }}
                className="w-[633px] h-[633px] relative  z-40"
              />
              <div
                className="w-[506px] z-30 h-[506px] bg-primary-color-min-200 absolute left-1/2 transform -translate-x-1/2 top-[40%]"
                style={{ borderRadius: "50%" }}
              ></div>
              <div
                className="w-[460px] h-[460px] border border-white  absolute z-50 left-1/2 transform -translate-x-1/2 top-[42%]"
                style={{ borderRadius: "50%" }}
              ></div>
              <div
                className="w-[380px] h-[380px] z-10 border border-primary-color-min-100 absolute z-50 left-[14%] top-[69%]"
                style={{ borderRadius: "50%" }}
              ></div>
              <img
                src="/img/how-to-2.jpg"
                style={{ borderRadius: "50%" }}
                className="w-[422px] h-[422px] absolute z-40 left-1/2 transform -translate-x-1/2  top-[62%] "
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Content1;
