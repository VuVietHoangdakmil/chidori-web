import "./index.css";

import { useLocation, useNavigate } from "react-router-dom";
import { Image, Grid, Drawer } from "antd";
import { useTranslationCustom } from "../../hook/useTranslation";
import ButtonCustom from "../Button";
import { path } from "../../routes";
import { useGetNavList } from "../../hook/useGetData";
import React, { memo, useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { cn } from "../../util/helper/class.helper";
const { useBreakpoint } = Grid;
const ListNav: React.FC<{ csspading?: boolean }> = ({ csspading }) => {
  const { listNav } = useGetNavList();
  const navigate = useNavigate();
  return listNav.map((item, index) => (
    <div
      key={index}
      className={cn(
        "text-color-text-blue font-semibold  text-[1.6rem] hover:underline cursor-pointer h-full  flex items-center underline-offset-4",
        { "px-[2.4rem]": csspading, "mb-11": !csspading }
      )}
      onClick={() => navigate(item.path)}
    >
      <span>{item.title}</span>
    </div>
  ));
};
const BtnBooking: React.FC<{ isLaptop?: boolean }> = ({ isLaptop }) => {
  const navigate = useNavigate();
  const { t } = useTranslationCustom();
  return (
    <ButtonCustom
      className={cn({ "w-[140px]": isLaptop })}
      type="primary"
      hoverPimaryColor={true}
      onClick={() => navigate(path.booking)}
    >
      {t("t6")}
    </ButtonCustom>
  );
};
const DrawSideMenu = memo(() => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState<boolean>(false);
  const onClose = () => {
    setOpen(false);
  };
  const onOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    onClose();
  }, [pathname]);

  return (
    <>
      <FaBars
        onClick={onOpen}
        className="cursor-pointer rounded-lg bg-primary-color-min-100 p-3 text-6xl hover:opacity-50"
      />
      <Drawer
        placement="right"
        closable={false}
        onClose={onClose}
        open={open}
        key="right"
      >
        <div className="grid justify-items-end mb-5">
          <IoCloseSharp
            className="text-4xl cursor-pointer hover:opacity-50"
            onClick={onClose}
          />
        </div>
        <div className="flex flex-col">
          <ListNav />
          <div className="flex mb-11 ">
            <div className="text-color-text-blue font-semibold mr-4 text-[1.6rem]">
              Ngôn Ngữ :
            </div>
            <BtnLanguages />
          </div>
          <BtnBooking />
        </div>
      </Drawer>
    </>
  );
});
const BtnLanguages = () => {
  const { changeLanguage } = useTranslationCustom();
  return (
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
  );
};
const Header: React.FC = () => {
  const navigate = useNavigate();

  const { sm } = useBreakpoint();

  return (
    <div
      style={{ zIndex: 999 }}
      className="bg-color-header h-[62px]   sticky top-0 left-0 right-0"
    >
      <div className=" sm:w-width-primary w-[95%]  h-full  mx-auto my-0 flex  items-center  ">
        <div className="flex w-[80%] h-full ">
          <Image
            src="/img/logo.png"
            width={"128px"}
            height="40px"
            preview={false}
            onClick={() => navigate(path.home)}
            className="cursor-pointer"
          />

          {sm && (
            <div className="flex items-center ml-[4.8rem]">
              <ListNav csspading={true} />
            </div>
          )}
        </div>
        {sm ? (
          <div className="flex items-center">
            <BtnLanguages />
            <BtnBooking />
          </div>
        ) : (
          <div className="w-[20%] flex justify-end ">
            <DrawSideMenu />
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;
