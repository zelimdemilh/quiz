import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      Такой страницы не существует, возвратиться на <Link to="/">главную</Link>
    </div>
  );
};
