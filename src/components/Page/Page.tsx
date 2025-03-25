import { FC, ReactNode } from "react";
import clsx from "clsx";

interface IPageProps {
  children?: ReactNode;
  title?: string;
  className?: string
}

export const Page: FC<IPageProps> = ({ children, title, className }) => {
  return (
    <div className={clsx(className, "px-2")}>
      {title && <p className="text-3xl">{title}</p>}
      <div className="">{children}</div>
    </div>
  );
};
