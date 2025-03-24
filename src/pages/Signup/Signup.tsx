import { FC, useEffect } from "react";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { useUserSignUpMutation } from "../../sevices";
import { TUserSignUpApiArg } from "../../sevices/user";
import { useNavigate } from "react-router-dom";

export const Signup: FC = () => {
  const [userSignUp, { error, isSuccess }] = useUserSignUpMutation();
  const [form] = useForm<TUserSignUpApiArg>();
  const navigate = useNavigate();

  const onFinish: FormProps["onFinish"] = async () => {
    const values = await form.validateFields({ validateOnly: false });
    await userSignUp(values);
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/auth");
    }
  }, [isSuccess]);

  useEffect(() => {
    // @ts-ignore
    if (error?.status === 409) {
      form.setFields([{ name: "username", errors: ["Логин уже занят"] }]);
    }
  }, [error]);

  return (
    <div className="flex justify-center h-full items-center">
      <Form<TUserSignUpApiArg>
        form={form}
        onFinish={onFinish}
        autoComplete="off"
        initialValues={{
          firstname: "123",
          lastname: "123",
          username: "123",
          password: "123",
        }}
      >
        <Form.Item
          label="Имя"
          labelCol={{ span: 8, style: { textAlign: "start" } }}
          wrapperCol={{ span: 12 }}
          name="firstname"
          rules={[{ required: true, message: "Введите имя" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Фамилия"
          labelCol={{ span: 8, style: { textAlign: "start" } }}
          wrapperCol={{ span: 12 }}
          name="lastname"
          rules={[{ required: true, message: "Введите фамилию" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Логин"
          labelCol={{ span: 8, style: { textAlign: "start" } }}
          wrapperCol={{ span: 12 }}
          name="username"
          rules={[{ required: true, message: "Введите логин" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Пароль"
          labelCol={{ span: 8, style: { textAlign: "start" } }}
          wrapperCol={{ span: 12 }}
          name="password"
          rules={[{ required: true, message: "Введите пароль" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Зарегистрироваться
          </Button>
          <Button type="link" href="/auth">
            Войти
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
