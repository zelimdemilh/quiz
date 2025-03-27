import { FC, ReactNode } from "react";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

interface IPageProps {
  children?: ReactNode;
  title?: ReactNode;
  className?: string;
}

export const Page: FC<IPageProps> = ({ children, title, className }) => {
  return (
    <div className={clsx(className, "px-2")}>
      {title && (
        <h2 className="text-xl font-bold mb-2 p-2">
          <NavLink to="/">{title}</NavLink>
        </h2>
      )}
      <div className="">{children}</div>
    </div>
  );
};
