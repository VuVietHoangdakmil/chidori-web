import { Col, Row, Image } from "antd";
import { Link } from "react-router-dom";
import { useTranslationCustom } from "../../hook/useTranslation";
import contactData from "../../data/contactData";
import ButtonCustom from "../Button";
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
    <div className="">
      <div className="w-width-primary mx-auto ">
        <div className="rounded-[20px] h-[300px] overflow-hidden bg-cover bg-no-repeat bg-center bg-[url('/img/imgFooter.jpg')] ">
          <div
            className=" h-full flex justify-center  flex-col pl-32"
            style={{
              background: "radial-gradient(ellipse at 0 0,#000,#00000000)",
            }}
          >
            <div className="text-white text-[3rem] font-medium">
              Chidori | Coffee in Bed®
            </div>
            <ButtonCustom
              className="w-[140px] h-[40px] text-[1.6rem] mt-10 "
              type="primary"
              hoverPimaryColor={true}
            >
              ĐẶT CHỖ
            </ButtonCustom>
          </div>
        </div>
        <Row gutter={[50, 0]} className="pb-28 mt-20">
          <Col span={8} className="h-[50px] mt-14">
            <Image src="/img/logo.png" preview={false} width="250px" />
            <div className="text-primary-color-min-100 text-[1.6rem] mt-24">
              The authentic coffee in bed® from Japan
            </div>
          </Col>

          <Col span={8}>
            <div className="text-[2.4rem] text-color-text-primary ">
              Chidori
            </div>

            {listFooter.slice(0, 4).map((item) => (
              <Link
                key={item.key}
                className="block text-primary-color-min-100 underline-offset-4 hover:underline hover:text-primary-color text-[1.8rem] py-5"
                to={item.path}
              >
                {item.title}
              </Link>
            ))}
          </Col>

          <Col span={8}>
            <div className="text-[2.4rem] text-color-text-primary ">
              Liên hệ
            </div>
            {contactData.map((item, index) => (
              <a
                className="w-[50%] text-primary-color-min-100 flex items-center py-2 px-4  mb-4 rounded-lg text-[1.8rem] border-[1px] border-zinc-200 hover:text-primary-color-min-100 hover:bg-slate-100"
                key={index}
              >
                <div className="mr-2">{item.icon} </div> {item.name}
              </a>
            ))}
          </Col>
        </Row>
        <hr />
        <div className="text-center py-10 text-[1.8rem] text-gray-300">
          ©2024 Chidori | Coffee in Bed®.
        </div>
      </div>
    </div>
  );
};
export default Footer;
