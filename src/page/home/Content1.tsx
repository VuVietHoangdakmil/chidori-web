import { useTranslationCustom } from "../../hook/useTranslation";
import SvgInBed from "../../svg/inBed";
const Content1 = () => {
  const { t } = useTranslationCustom();
  return (
    <div className=" bg-hero-img h-[669px] w-full bg-no-repeat bg-cover ">
      <div className=" bg-primary-color-rgba h-full text-center flex flex-col justify-between items-center">
        <div className="grid justify-items-center w-[600px] mx-auto pt-[130px]  ">
          <h1 className="bg-primary-color-min-100 w-[438px] text-[3.5rem] font-semibold shadow-lg ">
            {t("t7")}
          </h1>
          <span className="text-[2.5rem] mt-[1rem]">{t("t8")}</span>
          <span className="text-[2rem] mt-11 font-normal">{t("t9")}</span>

          <button className="bg-white text-[1.5rem] font-medium rounded-[50px] w-[260px] h-[52px]  text-primary-color hover:brightness-125 mt-[6rem]">
            {t("t10")}
          </button>
        </div>
        <div className=" flex flex-col items-center w-[260px] h-[165px] bg-primary-color-min-100 cursor-pointer  hover:brightness-110 rounded-t-[500px]">
          <SvgInBed width="100px" height="100px" className="mt-[1rem]" />
          <div className="font-semibold mt-8 underline underline-offset-4 text-[1.5rem]">
            {t("t11")}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Content1;
