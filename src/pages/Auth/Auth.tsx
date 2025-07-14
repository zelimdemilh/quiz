import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useUserSignInMutation } from '@shared/api';
import { Page } from '@shared/ui';

export const Auth: FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [userSignIn, { error: resError }] = useUserSignInMutation();
  const [form] = useForm();

  const onFinish: FormProps['onFinish'] = async () => {
    const values = await form.validateFields({ validateOnly: false });
    await userSignIn(values).unwrap();
    setError(null);
  };

  useEffect(() => {
    // @ts-ignore
    if (resError?.status === 401) {
      setError('Неверный логин или пароль');
      form.setFields([
        { name: 'username', errors: [' '] },
        { name: 'password', errors: [' '] },
      ]);
    } else {
      setError(null);
    }
  }, [resError]);

  return (
    <Page className="flex justify-center h-full items-center">
      <Form form={form} className="w-[300px]" onFinish={onFinish} autoComplete="off">
        <Form.Item
          label="Логин"
          labelCol={{ span: 6, style: { textAlign: 'start' } }}
          wrapperCol={{ span: 18 }}
          name="username"
          rules={[{ required: true, message: 'Введите логин' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Пароль"
          labelCol={{ span: 6, style: { textAlign: 'start' } }}
          wrapperCol={{ span: 18 }}
          name="password"
          rules={[{ required: true, message: 'Введите пароль' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Войти
          </Button>
          <Link to="/signup">
            <Button type="link">Регистрация</Button>
          </Link>
        </Form.Item>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </Form>
    </Page>
  );
};
