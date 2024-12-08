import "./index.css";

import { useLocation, useNavigate } from "react-router-dom";
import { Image, Grid, Drawer } from "antd";

import ButtonCustom from "../Button";
import { path } from "../../routes";
import { cn } from "../../util/helper/class.helper";
import { FaBars } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { memo, useEffect, useState } from "react";
const { useBreakpoint } = Grid;
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

const ListNave: React.FC<{ isMobie?: boolean }> = ({ isMobie }) => {
  const navigate = useNavigate();
  return listNav.map((item, index) => (
    <div
      key={index}
      className={cn(
        " text-color-text-primary font-semibold px-[2.4rem] text-[1.6rem] underline cursor-pointer h-full  flex items-center underline-offset-4",
        {
          "px-0": isMobie,
          "mb-11": isMobie,
        }
      )}
      onClick={() => navigate(item.path)}
    >
      <span>{item.title}</span>
    </div>
  ));
};
const BtnBookNow: React.FC<{ isMobie?: boolean }> = ({ isMobie }) => {
  const navigate = useNavigate();
  return (
    <ButtonCustom
      onClick={() => navigate(path.booking)}
      className={cn({ "w-full": isMobie })}
      type="primary"
      hoverPimaryColor={true}
    >
      {"Book now"}
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
          <ListNave isMobie={true} />
          <div className="mt-8">
            <BtnBookNow isMobie={true} />
          </div>
        </div>
      </Drawer>
    </>
  );
});
const Header: React.FC = () => {
  const navigate = useNavigate();
  const { sm } = useBreakpoint();
  return (
    <div
      style={{ zIndex: 999 }}
      className="bg-color-header h-[62px]   sticky top-0 left-0 right-0"
    >
      <div className=" sm:w-width-primary w-[98%] h-full  mx-auto my-0 flex  items-center  ">
        <div className="flex sm:w-[80%] w-full h-full ">
          <Image
            src="/img/logo.png"
            width="128px"
            height="40px"
            preview={false}
            onClick={() => navigate(path.home)}
            className="cursor-pointer"
          />

          {sm && (
            <div className=" flex  items-center ml-[1rem] ">
              <ListNave />
            </div>
          )}
        </div>

        <div className="w-[20%] flex justify-end">
          {sm ? <BtnBookNow /> : <DrawSideMenu />}
        </div>
      </div>
    </div>
  );
};
export default Header;
