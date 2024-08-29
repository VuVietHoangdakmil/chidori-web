import { Col, Row, Image } from "antd";
import { Link } from "react-router-dom";
import { useTranslationCustom } from "../../hook/useTranslation";
import contactData from "../../data/contactData";
const Footer: React.FC = () => {
  const { t } = useTranslationCustom();
  const listFooter = [
    {
      title: t("t1"),
      active: "",
      path: "",
      key: 1,
    },
    {
      title: t("t4"),
      active: "",
      path: "",
      key: 2,
    },
    {
      title: t("t2"),
      active: "",
      path: "",
      key: 3,
    },
    {
      title: t("t5"),
      active: "",
      path: "",
      key: 4,
    },
    {
      title: "Menu",
      active: "",
      path: "",
      key: 5,
    },
    {
      title: t("t3"),
      active: "",
      path: "",
      key: 6,
    },
    {
      title: t("t63"),
      active: "",
      path: "",
      key: 7,
    },
  ];
  return (
    <div className=" bg-primary-color-2">
      <div className="w-width-footer mx-auto">
        <Row gutter={[50, 0]} className="pb-28">
          <Col span={6} className="h-[50px] mt-14">
            <Image
              src="https://chidori.vn/assets/logo-white-9d84a8f7ae91bbbe77f7f8b075bf1cac6f96f640ae6749d0464a42e1ad42b9d8.svg"
              preview={false}
              width="120px"
            />
            <div className="text-white text-[1.6rem]">
              The authentic coffee in bed® from Japan
            </div>
          </Col>
          <Col span={18}>
            <Row className="pt-32" gutter={18}>
              <Col span={9}>
                <div className="w-10 bg-white h-[1px]"></div>
                {listFooter.slice(0, 4).map((item) => (
                  <Link
                    key={item.key}
                    className="block text-white underline-offset-4 hover:underline hover:text-white text-[1.8rem] py-5"
                    to={item.path}
                  >
                    {item.title}
                  </Link>
                ))}
              </Col>
              <Col span={9}>
                <div className="w-10 bg-white h-[1px]"></div>
                {listFooter.slice(4).map((item) => (
                  <Link
                    key={item.key}
                    className="block text-white underline-offset-4 hover:underline hover:text-white text-[1.8rem] py-5"
                    to={item.path}
                  >
                    {item.title}
                  </Link>
                ))}
              </Col>
              <Col span={6}>
                <div className="w-10 bg-white h-[1px] mb-5"></div>
                {contactData.map((item, index) => (
                  <a
                    className="flex items-center py-2 px-4 bg-primary-color-min-100 mb-8 rounded-lg text-[1.8rem]"
                    key={index}
                  >
                    <div className="mr-2">{item.icon} </div> {item.name}
                  </a>
                ))}
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Footer;
