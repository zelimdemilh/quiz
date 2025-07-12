import { Button, Divider, Typography } from 'antd';

const ERROR_DATA = {
  code: 403,
  title: 'Доступ запрещен',
  description: 'Не хватает прав для доступа к платформе.',
  homeBtn: 'Вернуться на главную',
};

export const Error403 = () => {
  return (
    <>
      <div className="flex bg-transparent justify-center items-center">
        <div className="w-[550px]">
          <Typography.Title level={3} className="mx-4 my-0 text-white">
            {`${ERROR_DATA.code!} ${ERROR_DATA.title!}`}
          </Typography.Title>
          <Divider className="border-gray-500 my-4" />
          <p className="mx-4 text-violet-400">{ERROR_DATA.description}</p>
        </div>
      </div>
      <div className="text-white text-xs  flex items-center justify-between mb-6 w-[550px] m-auto">
        <Button>{ERROR_DATA.homeBtn}</Button>
      </div>
    </>
  );
};
