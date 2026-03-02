"use client";

import { type FC } from "react";
import styles from "./Sidebar.module.css";
import classNames from "classnames/bind";
import ProfilePresenter from "./Profile.presenter";

const cx = classNames.bind(styles);

interface ISidebarPresenterProps {
  children?: React.ReactNode;
}

const SidebarPresenter: FC<ISidebarPresenterProps> = ({ children }) => {
  return (
    <div className={cx("sidebar")}>
      <ProfilePresenter />
      {children}
    </div>
  );
};

export default SidebarPresenter;
