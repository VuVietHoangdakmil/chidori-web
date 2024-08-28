import Footer from "./Footer";
import Header from "./Header";
import PopupAdvertisement from "../Popup/Advertisement";
type PropsLayout = {
  children: React.ReactNode;
};
const Layout: React.FC<PropsLayout> = ({ children }) => {
  return (
    <>
      <PopupAdvertisement />
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
