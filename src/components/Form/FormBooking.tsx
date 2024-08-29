import React, { useState } from "react";
import WrapForm from "./Wrapform";
import type { FormProps } from "antd";
import {
  Col,
  DatePicker,
  Form,
  Input,
  Modal,
  Row,
  Select,
  TimePicker,
  TreeSelect,
} from "antd";
import TextArea from "antd/es/input/TextArea";
type Location = { name: string; address: string };
const locations: Location[] = [
  {
    name: "Chidori Hoa Cau",
    address: "6 Hoa Cau, phường 7, quận Phú Nhuận, Hồ Chí Minh",
  },
  {
    name: "Chidori Lam Sơn",
    address: "25A Lam Sơn, phường 2, quận Tân Bình, Hồ Chí Minh",
  },
  {
    name: "Chidori Đinh Tiên Hoàng",
    address: "191 Đinh Tiên Hoàng, Đa Kao, quận 1, Hồ Chí Minh",
  },
  {
    name: "Chidori Sư Vạn Hạnh",
    address: "796/2A Sư Vạn Hạnh, phường 12, quận 10, Hồ Chí Minh",
  },
  {
    name: "Chidori Pasteur",
    address: "134 Pasteur, phường Bến Nghé, quận 1, Hồ Chí Minh",
  },
  {
    name: "Chidori Lam Sơn",
    address: "6 Hoa Cau, phường 7, quận Phú Nhuận, Hồ Chí Minh",
  },
];
const treeData = [
  {
    value: "coffeeInBed",
    title: "coffee In Bed",
    disabled: true,
    children: [
      {
        value: "Little-Rechar-ger",
        title: "Little Recharger . 1 giờ",
      },
      {
        value: "take-a-break",
        title: "Take a Break . 2 giờ",
      },
      {
        value: "mini-stay-cation",
        title: "Mini Staycation . 1giờ",
      },
    ],
  },
  {
    value: "Private-room",
    title: "Private Room",
    disabled: true,
    children: [
      {
        value: "the-private-room",
        title: "The Private Room . 4 giờ",
      },
      {
        value: "wish-room",
        title: "Make a Wish Private Room . 4 giờ",
      },
    ],
  },
];
type FieldType = {
  phoneNumber?: string;
  userName?: string;
  Email?: string;
  Date?: string;
  Male?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [locationselect, setLocationSelect] = useState<Location | null>(null);
  const [value, setValue] = useState<string>();

  const onChange = (newValue: string) => {
    setValue(newValue);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <WrapForm
        style={{
          marginTop: "50px",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
        title="Thông tin liên lạc"
      >
        <Form
          layout="vertical"
          name="basic"
          //   labelCol={{ span: 8 }}
          //   wrapperCol={{ span: 16 }}
          style={{ width: "100%", padding: "20px" }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label={
              <div className=" text-primary-color font-bold">Số điện thoại</div>
            }
            name="phoneNumber"
            rules={[
              { required: true, message: "Vui lòng chọn số điện thoại!" },
            ]}
          >
            <Input className="h-[40px]" />
          </Form.Item>
        </Form>
      </WrapForm>
      <WrapForm
        style={{
          marginTop: "50px",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
        title="Thông tin Đặt chỗ"
      >
        <Form
          layout="vertical"
          name="basic"
          //   labelCol={{ span: 8 }}
          //   wrapperCol={{ span: 16 }}
          style={{ width: "100%", padding: "20px" }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label={
              <div className=" text-primary-color font-bold">Chi nhánh</div>
            }
            name="phoneNumber"
            rules={[
              { required: true, message: "Vui lòng chọn số điện thoại!" },
            ]}
          >
            {locationselect ? (
              <div className="bg-primary-color-min-300 my-[20px] px-10 py-5 rounded-xl  h-[150px]">
                <div className="text-color-text-primary text-[2.5rem] font-medium">
                  {locationselect?.name}
                </div>
                <div className="color-text-primary-100 mt-6 text-[1.5rem] font-medium">
                  {locationselect?.address}
                </div>
                <div
                  onClick={showModal}
                  className="bg-primary-color-2-min-100 font-medium hover:opacity-60 w-[150px] text-center text-white text-[1.6rem] py-2  rounded-[40px] mt-5 cursor-pointer"
                >
                  Đổi chi nhánh
                </div>
              </div>
            ) : (
              <div
                className="cursor-pointer hover:bg-primary-color-min-200 text-[1.6rem] leading-[150px] text-primary-color text-center h-[150px] border-dashed border-2 border-primary-color"
                onClick={showModal}
              >
                {" "}
                Chọn chi nhánh bạn muốn ghé thăm
              </div>
            )}
            <Modal
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              footer={[]}
              style={{ zIndex: "9999", position: "relative" }}
            >
              <div className=" text-primary-color font-bold text-[2rem]">
                Chọn Chi nhánh
              </div>
              {locations.map(({ address, name }, index) => (
                <div
                  onClick={() => {
                    setLocationSelect({ address, name });
                    handleCancel();
                  }}
                  className="bg-primary-color-min-300 my-[20px] px-10 py-5 rounded-xl cursor-pointer hover:opacity-60"
                  key={index}
                >
                  <div className="text-color-text-primary text-[2.5rem] font-medium">
                    {name}
                  </div>
                  <div className="color-text-primary-100 mt-6 text-[1.5rem] font-medium">
                    {address}
                  </div>
                </div>
              ))}
            </Modal>
          </Form.Item>
          <Form.Item<FieldType>
            label={
              <div className=" text-primary-color font-bold">
                Bạn muốn ghé thăm chidori bao lâu?
              </div>
            }
            name="userName"
            rules={[{ required: true, message: "Vui lòng chọn thông tin!" }]}
          >
            <TreeSelect
              className="h-[40px]"
              showSearch
              style={{ width: "100%" }}
              value={value}
              dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
              allowClear
              treeDefaultExpandAll
              onChange={onChange}
              treeData={treeData}
            />
          </Form.Item>
          <Form.Item<FieldType>
            label={
              <div className=" text-primary-color font-bold">
                Thêm thời gian
              </div>
            }
            name="Email"
            rules={[{ required: true, message: "Vui lòng chọn thông tin!" }]}
          >
            <Select
              allowClear
              className="h-[40px] w-full"
              options={[
                { label: "Không thêm", value: null },
                { label: "Thêm 1 giờ (+50.000đ)", value: "1h" },
                { label: "Thêm 2 giờ (+80.000đ)", value: "2h" },
              ]}
            />
          </Form.Item>
          <Row gutter={25}>
            <Col span={12}>
              <Form.Item<FieldType>
                label={
                  <div className=" text-primary-color font-bold">Ngày tới</div>
                }
                name="Date"
                rules={[
                  { required: true, message: "Vui lòng chọn thông tin!" },
                ]}
              >
                <DatePicker
                  placeholder=""
                  format={["DD/MM/YY"]}
                  className="h-[40px] w-full"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item<FieldType>
                label={<div className=" text-primary-color font-bold">Giờ</div>}
                name="Date"
                rules={[
                  { required: true, message: "Vui lòng chọn thông tin!" },
                ]}
              >
                {" "}
                <TimePicker placeholder="" className="h-[40px] w-full" />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item<FieldType>
            label={
              <div className=" text-primary-color font-bold">Lời nhắn</div>
            }
            style={{ color: "red" }}
            name={"Male"}
            rules={[{ required: true, message: "Vui lòng chọn thông tin" }]}
          >
            <TextArea className="h-[60px] w-full" />
          </Form.Item>
        </Form>
      </WrapForm>
      <div className=" w-[80%] mt-14 mb-24 mx-auto text-white rounded-[25px] font-medium text-[1.6rem] h-[50px] leading-[50px] text-center bg-[#3663ab] cursor-pointer hover:opacity-70">
        Chọn phương thức thanh toán
      </div>
    </>
  );
};

export default App;
