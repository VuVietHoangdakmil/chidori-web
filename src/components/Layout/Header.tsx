import "./index.css";
import { Image } from "antd";
import { useTranslationCustom } from "../../hook/useTranslation";
import ButtonCustom from "../Button";
const Header: React.FC = () => {
  const { t, changeLanguage } = useTranslationCustom();
  const listNav = [
    {
      title: t("t1"),
      active: "",
      path: "",
    },
    {
      title: t("t2"),
      active: "",
      path: "",
    },
    {
      title: t("t3"),
      active: "",
      path: "",
    },
    {
      title: t("t4"),
      active: "",
      path: "",
    },
    {
      title: t("t5"),
      active: "",
      path: "",
    },
  ];

  return (
    <div
      style={{ zIndex: 9999 }}
      className="bg-color-header h-[62px]   sticky top-0 left-0 right-0"
    >
      <div className=" w-width-primary h-full  mx-auto my-0 flex  items-center ">
        <div className="flex w-[70%] h-full justify-between">
          <Image
            src="img/logo.png"
            width="128px"
            height="40px"
            preview={false}
          />

          <div className=" flex justify-around items-center">
            {listNav.map((item, index) => (
              <div
                key={index}
                className="text-color-text-blue font-semibold px-[2.4rem] text-[1.6rem] hover:underline cursor-pointer h-full  flex items-center underline-offset-4"
              >
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[30%] flex justify-end">
          <div className="text-color-text-blue font-semibold text-[1.6rem] flex items-center mr-[1rem]">
            <div
              className="hover:underline cursor-pointer"
              onClick={() => changeLanguage("vi")}
            >
              VI
            </div>
            <div className="bg-color-text-blue w-[1.5px] h-[20px] mx-[0.4rem]"></div>
            <div
              className="hover:underline cursor-pointer"
              onClick={() => changeLanguage("en")}
            >
              EN
            </div>
          </div>
          <ButtonCustom className="w-[140px] " type="primary">
            {t("t6")}
          </ButtonCustom>
        </div>
      </div>
    </div>
  );
};
export default Header;
