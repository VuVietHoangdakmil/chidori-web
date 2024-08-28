import React, { useState } from "react";
import "../../css/cssPopup.css";
import { Col, Modal, Row } from "antd";
import { FaMapMarkerAlt } from "react-icons/fa";
const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  //   const showModal = () => {
  //     setIsModalOpen(true);
  //   };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      className="modal-content-custom"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[]}
      style={{ zIndex: "9999", position: "relative" }}
    >
      <div className="text-center  mt-20">
        <span className="mx-auto  bg-yellow-200 text-[2.5rem] text-color-text-primary px-2  font-medium">
          Miễn phí sử dụng bed
        </span>
        <p className=" mx-auto text-[2.5rem] text-color-text-primary text-center font-medium ">
          cho tất cả combo
        </p>

        <Row gutter={[5, 0]} className=" h-[350px] overflow-hidden">
          <Col span={12} className="relative ">
            <img
              className="w-full h-[70%] rounded-tl-[400px] "
              src="/img/step/4-d4.jpg"
            />
            <div className=" rotate-[-8deg] p-4 rounded-[100%] border-dashed border-2 bg-pink-200 border-color-text-primary top-[10px] left-[25px] absolute  text-[1.6rem] text-color-text-primary">
              Chidori võ oanh{" "}
            </div>
            <div className="flex items-center  justify-center mt-5">
              <FaMapMarkerAlt className="text-color-text-primary" />
              <p className="text-color-text-primary text-[1.2rem]">
                {" "}
                66 Võ Oanh, Phường 25 Bình Thanh
              </p>
            </div>
          </Col>{" "}
          <Col span={12} className="relative ">
            <img
              className="w-full h-[70%]  rounded-tr-[400px]"
              src="/img/step/5d.jpg"
            />
            <div className=" rotate-[10deg] p-4 rounded-[100%] border-dashed border-2 bg-blue-200 border-color-text-primary top-[50px] right-[0px] absolute  text-[1.6rem] text-white">
              Chidori Lam Sơn
            </div>
            <div className="flex items-center  justify-center mt-5">
              <FaMapMarkerAlt className="text-color-text-primary" />
              <p className="text-color-text-primary text-[1.2rem]">
                {" "}
                25 A Lam Sơn, Phường 2 Tân Bình
              </p>
            </div>
          </Col>
        </Row>
        <span className="mx-auto   bg-yellow-200 text-[2.5rem] text-color-text-primary px-2  font-medium">
          Miễn phí sử dụng bed
        </span>
      </div>
    </Modal>
  );
};

export default App;
