import { FC, useState } from 'react';
import { Button, message } from 'antd';
import { useForm } from 'antd/es/form/Form';

import { TCreateTestApiArg, useCreateTestMutation, useGetAllQuestionsQuery } from '@shared/api';
import { Page } from '@shared/ui';
import { TestForm } from '@entities/tests';

export const CreateTest: FC = () => {
  const [createTest] = useCreateTestMutation();
  const { data: questions, isLoading } = useGetAllQuestionsQuery();
  const [, setFormData] = useState<Partial<TCreateTestApiArg>>({});
  const [form] = useForm();

  const action = async () => {
    const values = form.getFieldsValue();
    try {
      await createTest(values);
      form.resetFields();
      message.success('Тест успешно создан');
    } catch {
      message.error('Ошибка при создании теста');
    }
  };

  return (
    <Page title="Создать тест">
      <TestForm questions={questions || []} isLoading={isLoading} onValuesChange={setFormData} form={form} />
      <Button type="primary" onClick={action}>
        Создать вопрос
      </Button>
    </Page>
  );
};
