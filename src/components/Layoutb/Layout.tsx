import Footer from "./Footer";
import Header from "./Header";

type PropsLayout = {
  children: React.ReactNode;
};
const Layout: React.FC<PropsLayout> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
