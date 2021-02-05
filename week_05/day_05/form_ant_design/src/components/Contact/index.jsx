import React from "react";
import { Form, Input, Button, DatePicker, Select } from "antd";

const { Option } = Select;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const Contact = () => {
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="44">+44</Option>
        <Option value="33">+33</Option>
      </Select>
    </Form.Item>
  );

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div style={{ margin: "40px" }}>
      <Form
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["user", "name"]}
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "surname"]}
          label="Surname"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "email"]}
          label="Email"
          rules={[
            {
              type: "email",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Date de naissance">
          <DatePicker placeholder="Choisir" />
        </Form.Item>
        <Form.Item label="Sexe">
          <Select style={{ width: 120 }}>
            <Option value="woman">Femme</Option>
            <Option value="men">Homme</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            { required: true, message: "Please input your phone number!" },
          ]}
        >
          <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
        </Form.Item>

        <Input.Group compact>
          <Input style={{ width: "20%" }} defaultValue="Code postal" />
          <Input style={{ width: "30%" }} defaultValue="Ville" />
        </Input.Group>

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Contact;
