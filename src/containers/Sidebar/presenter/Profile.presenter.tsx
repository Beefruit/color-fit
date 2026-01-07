import { type FC } from "react";
import styles from "./Profile.module.css";
import classNames from "classnames/bind";
import Image from "next/image";

const cx = classNames.bind(styles);

const ProfilePresenter: FC = () => {
  return (
    <div className={cx("profile")}>
      <div className={cx("profile-info")}>
        <div className={cx("profile-image-wrapper")}>
          <div className={cx("profile-image")} />
        </div>
        <div className={cx("profile-text")}>
          <h2 className={cx("profile-name")}>닉네임</h2>
          <p className={cx("profile-personalcolor")}>겨울 쿨 브라이트</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePresenter;
