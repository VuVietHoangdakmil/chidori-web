import { Location } from "../../types/location";
import CardWrap from "./CardWrap";
interface Props extends Location {
  t?: string;
}
const CardCustom: React.FC<Props> = ({ img, title, text }) => {
  return (
    <CardWrap>
      <img alt="none" className="h-[300px] w-full" src={img}></img>
      <div className="p-10">
        <div className="font-medium text-[2.4rem] text-color-text-primary ">
          {title}
        </div>
        <div className="mt-7 text-[1.6rem] text-primary-color-min-100 ">
          {text}
        </div>
      </div>
    </CardWrap>
  );
};
export default CardCustom;
