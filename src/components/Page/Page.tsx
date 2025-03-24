import { FC, ReactNode } from "react";

interface IPageProps {
  children?: ReactNode;
  title?: string;
}

export const Page: FC<IPageProps> = ({ children, title }) => {
  return (
    <div className="p-1">
      {title && <p className="text-lg text-red-500">{title}</p>}
      <div className="max-">{children}</div>
    </div>
  );
};
