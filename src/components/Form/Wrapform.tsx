import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const WrapForm: React.FC<Props> = ({ title, children, style }) => {
  return (
    <div
      style={style}
      className="w-[80%] mx-auto  border-[2px] border-primary-color rounded-lg"
    >
      <div className="text-white font-medium text-[2.5rem] bg-primary-color h-[70px] leading-[60px] pl-[20px] ">
        {title}
      </div>
      {children}
    </div>
  );
};
export default WrapForm;
