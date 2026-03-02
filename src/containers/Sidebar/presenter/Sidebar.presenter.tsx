"use client";

import { type FC } from "react";
import styles from "./Sidebar.module.css";
import classNames from "classnames/bind";
import ProfilePresenter from "./Profile.presenter";

const cx = classNames.bind(styles);

interface ISidebarPresenterProps {
  children?: React.ReactNode;
  isLogin: boolean;
}

const SidebarPresenter: FC<ISidebarPresenterProps> = ({
  children,
  isLogin,
}) => {
  return (
    <div className={cx("sidebar")}>
      <ProfilePresenter isLogin={isLogin} />
      {children}
    </div>
  );
};

export default SidebarPresenter;
