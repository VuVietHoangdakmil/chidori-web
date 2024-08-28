import clsx from "clsx";
import React from "react";
import "./index.css";
type Props = {
  svg: React.ReactNode;
  styles?: React.CSSProperties;
  active?: boolean;
};
const ViewSvg: React.FC<Props> = ({ svg, styles, active }) => {
  return (
    <div
      className={clsx(
        " w-[120px] h-[120px] bg-primary-color-min-300 flex items-center justify-center custom-item svg-css-main",
        { active: active }
      )}
      style={{ borderRadius: "50%", ...styles }}
    >
      {svg}
    </div>
  );
};
export default ViewSvg;
