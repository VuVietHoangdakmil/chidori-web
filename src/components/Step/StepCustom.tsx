import React from "react";

import "./index.css";
import { Steps, StepsProps } from "antd";
import clsx from "clsx";
import ButtonCustom from "../Button";
import { useTranslationCustom } from "../../hook/useTranslation";
import ViewSvg from "../ViewSvg";
export const ItemStep = ({
  svg,
  title,
}: {
  svg: React.ReactNode;
  title: string;
}) => {
  return (
    <div className="mt-14">
      <ViewSvg svg={svg} />
      <div className="text-primary-color-min-100 hover-text">{title}</div>
    </div>
  );
};

type PropsStep = {
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
  steps: { title: string | React.ReactNode }[];
};
const Step: React.FC<PropsStep> = ({ current, setCurrent, steps }) => {
  const { t } = useTranslationCustom();
  const onChange = (value: number) => {
    setCurrent(value);
  };
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  const customDot: StepsProps["progressDot"] = (dot, { status, index }) => (
    <>
      {status === "process" ? (
        <div
          className={clsx(
            "text-[6rem] w-[100px] h-[100px] flex  flex-row-reverse  absolute top-[-30px] left-[-51px]",
            { "-scale-x-100": index !== steps.length - 1 }
          )}
        >
          🕊️
        </div>
      ) : (
        dot
      )}
    </>
  );
  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  return (
    <div className="flex ">
      <ButtonCustom
        className="text-primary-color-2 font-medium "
        type="default"
        style={{ border: "2px solid #93c5fd " }}
        onClick={prev}
        disabled={current <= 0}
      >
        {t("t26")}
      </ButtonCustom>
      <Steps
        progressDot={customDot}
        onChange={onChange}
        current={current}
        items={items}
        className="custom-step-container"
      />
      <ButtonCustom
        className="text-primary-color-2 font-medium "
        type="default"
        style={{ border: "2px solid #93c5fd " }}
        onClick={next}
        disabled={current >= steps.length - 1}
      >
        {t("t27")}
      </ButtonCustom>
      {/* <div style={contentStyle}>{steps[current].content}</div> */}
    </div>
  );
};
export default Step;
