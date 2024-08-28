import React from "react";

interface Props {
  children: React.ReactNode;
  style?: React.CSSProperties;
}
const CardWrap: React.FC<Props> = ({ children, style }) => {
  return (
    <div
      style={style}
      className="bg-white rounded-[4rem] h-full overflow-hidden border-primary-color-min-200 border-[1px] hover:shadow-md"
    >
      {children}
    </div>
  );
};
export default CardWrap;
