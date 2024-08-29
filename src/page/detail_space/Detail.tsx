import { useParams } from "react-router-dom";
import { Prams } from "../../until/textHander";
import { Title } from "../../types/enum";
import {
  SvgCoffeeInBed,
  SvgCoffeSpace,
  SvgLevelSeat,
  SvgMettingRoom,
  SvgPrivateRoom,
} from "../../svg";
import {
  useGetDataLocation,
  useGetDataSpace,
  useGetDataSpaceDetail,
} from "../../hook/useGetData";

const svgObj: any = {
  [Title.COFFEE_IN_BAD]: <SvgCoffeeInBed className="w-[110px] h-[110px]" />,
  [Title.COFFEE_SAPCE]: <SvgCoffeSpace className="w-[110px] h-[110px]" />,
  [Title.LEVEL_SEAT]: <SvgLevelSeat className="w-[110px] h-[110px]" />,
  [Title.METTING_ROOM]: <SvgMettingRoom className="w-[110px] h-[110px]" />,
  [Title.PRIVATE_ROOM]: <SvgPrivateRoom className="w-[110px] h-[110px]" />,
};
import ViewSvg from "../../components/ViewSvg";
import { Col, Row } from "antd";
import { IconCusom } from "../home/Content3";
const Detail = () => {
  const { id } = useParams();
  const { t } = useGetDataLocation();
  const { DataSpaceDetail } = useGetDataSpaceDetail();
  const { DataSpace } = useGetDataSpace();

  const Title = Prams(id + "").unConver;

  const space = DataSpace.find((item) => item.title === Title);
  const spaceDetail = DataSpaceDetail.find((item) => item.key === Title);

  return (
    <div>
      <div
        className="h-[450px] bg-no-repeat  bg-center bg-cover  w-full"
        style={{ backgroundImage: `url(${spaceDetail?.img})` }}
      ></div>
      <div className="w-width-primary mx-auto relative">
        <ViewSvg
          svg={svgObj[Title]}
          active
          styles={{
            position: "absolute",
            top: "-70px",
            width: "150px",
            height: "150px",
          }}
        />
      </div>
      <div className="w-width-primary mx-auto my-[10rem] ">
        <Row>
          <Col span={12}>
            <div>
              <div className="text-color-text-primary text-[2.8rem] font-medium">
                {Title}
              </div>
              <p className="text-color-text-primary text-[1.6rem] mt-12">
                {spaceDetail?.contentInfo}
              </p>

              <div className="bg-primary-color-2-min-300 min-h-[180px] p-7 mt-20">
                <div className="text-primary-color-2 text-[1.8rem] font-medium ">
                  {t("t56")}
                </div>
                <Row gutter={[0, 25]} className=" mt-8">
                  {spaceDetail?.svg.map((item, index) => (
                    <Col key={index} span={12} className="flex items-center">
                      <div className="text-white">{item.svg}</div>
                      <div className="text-white text-[1.6rem] ml-6">
                        {item.text}
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </div>
            <hr className="bg-primary-color-min-200 w-full h-[1.5px] my-14 " />
            <div>
              <div className="text-color-text-primary text-[2rem] font-medium">
                {t("t58")}
              </div>

              <Row className="mt-11" gutter={[40, 20]}>
                {space?.icons.map((icon, index) => (
                  <Col key={index} span={8}>
                    <IconCusom imgicon={icon.imgicon} text={icon.text} />
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
          <Col span={12}></Col>
        </Row>
      </div>
    </div>
  );
};
export default Detail;
