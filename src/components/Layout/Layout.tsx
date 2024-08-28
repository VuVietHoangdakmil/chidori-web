import Footer from "./Footer";
import Header from "./Header";
import HeaderB from "../Layoutb/Header";
import FooterB from "../Layoutb/Footer";
import { useNavigate, useLocation } from "react-router-dom";
import PopupAdvertisement from "../Popup/Advertisement";
import { useEffect } from "react";
import { path } from "../../routes";
type PropsLayout = {
  children: React.ReactNode;
};
const Layout: React.FC<PropsLayout> = ({ children }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const condition =
    pathname.startsWith(path.membership) || pathname.startsWith(path.about);
  useEffect(() => {
    if (pathname === "/") navigate(path.home);
  }, []);
  const HeaderH = condition ? <HeaderB /> : <Header />;
  const FooterH = condition ? <FooterB /> : <Footer />;
  return (
    <>
      <PopupAdvertisement />
      {HeaderH}
      {children}
      {FooterH}
    </>
  );
};
export default Layout;
