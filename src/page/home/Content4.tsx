import { Col, Row } from "antd";

import CardCustom from "../../components/Card";
import { useGetDataLocation } from "../../hook/useGetData";

const Content1 = () => {
  const { t, locations } = useGetDataLocation();
  return (
    <div className=" bg-primary-color-min-300  w-full  ">
      <div className="sm:w-width-primary w-[98%] mx-auto py-40">
        <div className=" font-medium text-[2.4rem] text-color-text-primary text-center">
          {t("t48")}
        </div>
        <div className="mt-7 text-[1.8rem] text-primary-color-min-100 text-center">
          {t("t49")}
        </div>
        <Row className="py-20" gutter={[20, 20]}>
          {locations.map(({ img, text, title }, index) => (
            <Col span={24} sm={12} key={index + img}>
              <CardCustom img={img} title={title} text={text} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};
export default Content1;
