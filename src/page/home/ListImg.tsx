import { Col, Row } from "antd";
import { useTranslationCustom } from "../../hook/useTranslation";
import clsx from "clsx";
import ButtonCustom from "../../components/Button";
const listimg = [
  { span: 6, rowSpan: 2, src: "/img/listcustomer/1-f66.jpg" },
  { span: 6, src: "/img/listcustomer/2-d.jpg" },
  { span: 6, src: "/img/listcustomer/3-9.jpg" },
  { span: 6, src: "/img/listcustomer/4-.jpg" },
  { span: 6, src: "/img/listcustomer/5-b.jpg" },
  { span: 6, colSpan: 2, rowSpan: 2, src: "/img/listcustomer/6-e8.jpg" },
  { span: 6, src: "/img/listcustomer/7-9.jpg" },
  { span: 6, rowSpan: 2, src: "/img/listcustomer/8-.jpg" },

  { span: 6, src: "/img/listcustomer/9-dc.jpg" },
  { span: 6, src: "/img/listcustomer/10-fe.jpg" },
  { span: 6, src: "/img/listcustomer/11-b5.jpg" },
  { span: 6, src: "/img/listcustomer/12-e.jpg" },
  { span: 6, src: "/img/listcustomer/13-a.jpg" },
  { span: 6, src: "/img/listcustomer/14-e5c.jpg" },
  { span: 6, src: "/img/listcustomer/15-1f9.jpg" },
];
const ListImg = () => {
  const { t } = useTranslationCustom();

  return (
    <div className="sm:w-width-primary w-[95%] mx-auto text-center py-40 sm:px-40">
      <p className="text-color-text-primary font-medium text-[3rem]">
        {t("t64")}
      </p>
      <p className="text-primary-color-min-100 font-medium text-[1.8rem]">
        {t("t65")}
      </p>

      <div className="grid mt-16 grid-cols-4 grid-rows-1 relative   gap-4 rounded-t-[200px] overflow-hidden ">
        {listimg.map((item, index) => (
          <div
            key={index}
            className={clsx(
              "relative before:content-[''] before:block before:pb-[100%]",
              {
                "row-span-2": item.rowSpan === 2,
                "col-span-2": item.colSpan === 2,
              }
            )}
          >
            <img
              loading="lazy"
              className={" w-full h-full absolute top-0 "}
              src={item.src}
            />
          </div>
        ))}
        <div className="absolute w-full bottom-0 h-1/5 bg-[linear-gradient(180deg,_rgba(255,255,255,0)_0%,_#FFF_100%)]"></div>
      </div>
      <div className="bg-primary-color-min-300  rounded-[40px] mt-44">
        <Row className="text-left p-20" gutter={[10, 10]}>
          <Col span={24} sm={14}>
            <p className="text-color-text-primary font-medium text-[2.5rem]">
              {t("t67")}
            </p>
            <p className="mt-12 text-color-text-primary  text-[1.6rem]">
              {t("t68")}
            </p>
            <ButtonCustom
              className="px-10 h-[50px] mt-[5rem] text-[1.6rem] "
              type="primary"
              hoverPimaryColor={true}
            >
              {t("t69")}
            </ButtonCustom>
          </Col>
          <Col span={24} sm={10}>
            <img src="/img/step/2-icon1.png" loading="lazy" />
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default ListImg;
