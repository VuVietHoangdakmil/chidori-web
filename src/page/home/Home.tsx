import Content1 from "./Content1";
import Content2 from "./Content2";
import Content3 from "./Content3";
import Content4 from "./Content4";
import ListImg from "./ListImg";
import { Grid } from "antd";
const { useBreakpoint } = Grid;
const Home = () => {
  const { sm } = useBreakpoint();
  return (
    <>
      <Content1 />
      <Content2 />
      {sm && <Content3 />}
      <Content4 />
      <ListImg />
    </>
  );
};
export default Home;
