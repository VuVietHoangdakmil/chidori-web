import React from "react";

import type { FormProps } from "antd";
import { DatePicker, Form, Input, Select } from "antd";

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

const App: React.FC = () => (
  <>
    <div className="w-[80%] mx-auto  border-[2px] border-primary-color rounded-lg">
      <div className="text-white font-medium text-[2.5rem] bg-primary-color h-[70px] leading-[60px] pl-[20px] ">
        Thông tin cá nhân
      </div>
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
          rules={[{ required: true, message: "Vui lòng chọn số điện thoại!" }]}
        >
          <Input className="h-[40px]" />
        </Form.Item>
        <Form.Item<FieldType>
          label={<div className=" text-primary-color font-bold">Họ và tên</div>}
          name="userName"
          rules={[{ required: true, message: "Vui lòng chọn họ và tên!" }]}
        >
          <Input className="h-[40px]" />
        </Form.Item>
        <Form.Item<FieldType>
          label={<div className=" text-primary-color font-bold">Email</div>}
          name="Email"
          rules={[{ required: true, message: "Vui lòng chọn email!" }]}
        >
          <Input className="h-[40px]" />
        </Form.Item>
        <Form.Item<FieldType>
          label={<div className=" text-primary-color font-bold">Ngày sinh</div>}
          name="Date"
          rules={[{ required: true, message: "Vui lòng chọn ngày sinh!" }]}
        >
          <DatePicker
            placeholder=""
            format={["DD/MM/YY"]}
            className="h-[40px] w-full"
          />
        </Form.Item>
        <Form.Item<FieldType>
          label={<div className=" text-primary-color font-bold">Giới tính</div>}
          style={{ color: "red" }}
          name={"Male"}
          rules={[{ required: true, message: "Vui lòng chọn giới tính" }]}
        >
          <Select
            allowClear
            className="h-[40px] w-full"
            options={[
              { label: "Chọn giới tính", value: null },
              { label: "Nam", value: "Nam" },
              { label: "Nữ", value: "Nu" },
              { label: "Khác", value: "Khác" },
            ]}
          />
        </Form.Item>
      </Form>
    </div>
    <div className=" w-[80%] mx-auto text-white rounded-[25px] font-medium text-[1.6rem] h-[50px] leading-[50px] text-center bg-[#3663ab] cursor-pointer hover:opacity-30 mt-20">
      Đăng ký
    </div>
  </>
);

export default App;
