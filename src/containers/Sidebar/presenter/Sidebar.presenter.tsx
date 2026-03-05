"use client";

import { type FC } from "react";
import styles from "./Sidebar.module.css";
import classNames from "classnames/bind";
import ProfilePresenter from "./Profile.presenter";

const cx = classNames.bind(styles);

interface ISidebarPresenterProps {
  children?: React.ReactNode;
  isLogin: boolean;
  userData?: {
    nickname: string;
    avatar_url: string;
    personal_color_tag: {
      id: string;
      name: string;
      color: string;
    };
  };
}

const SidebarPresenter: FC<ISidebarPresenterProps> = ({
  children,
  isLogin,
  userData,
}) => {
  return (
    <div className={cx("sidebar")}>
      <ProfilePresenter isLogin={isLogin} userData={userData} />
      {children}
    </div>
  );
};

export default SidebarPresenter;
