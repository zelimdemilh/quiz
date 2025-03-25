import {Button} from "antd";
import {Page} from "../../components";

export const NotFound = () => {
  return (
    <Page>
      Такой страницы не существует, возвратиться на <Button className='p-0 m-0 text-base' type='link' href="/">главную</Button>
    </Page>
  );
};
