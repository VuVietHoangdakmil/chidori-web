import "./index.css";

import { useNavigate } from "react-router-dom";
import { Image } from "antd";

import ButtonCustom from "../Button";
import { path } from "../../routes";

const listNav = [
  {
    title: "BlOG",
    active: "",
    path: "",
    key: 1,
  },
  {
    title: "LÀM VIỆC TẠI CHIDORI",
    active: "",
    path: "",
    key: 2,
  },
  {
    title: "NỘI QUY ",
    active: "",
    path: "",
    key: 3,
  },
  {
    title: "MENU",
    active: "",
    path: "",
    key: 4,
  },
];

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{ zIndex: 9999 }}
      className="bg-color-header h-[62px]   sticky top-0 left-0 right-0"
    >
      <div className=" w-width-primary h-full  mx-auto my-0 flex  items-center  ">
        <div className="flex w-[80%] h-full ">
          <Image
            src="/img/logo.png"
            width="128px"
            height="40px"
            preview={false}
            onClick={() => navigate(path.home)}
            className="cursor-pointer"
          />

          <div className=" flex  items-center ml-[1rem] ">
            {listNav.map((item, index) => (
              <div
                key={index}
                className=" text-color-text-primary font-semibold px-[2.4rem] text-[1.6rem] underline cursor-pointer h-full  flex items-center underline-offset-4"
                onClick={() => navigate(item.path)}
              >
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[20%] flex justify-end">
          <ButtonCustom
            className="w-[140px] "
            type="primary"
            hoverPimaryColor={true}
          >
            {"Book now"}
          </ButtonCustom>
        </div>
      </div>
    </div>
  );
};
export default Header;
