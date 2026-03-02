import { type FC } from "react";
import styles from "./Profile.module.css";
import classNames from "classnames/bind";
import Image from "next/image";

const cx = classNames.bind(styles);

interface IProfilePresenterProps {
  isLogin: boolean;
}

const ProfilePresenter: FC<IProfilePresenterProps> = ({ isLogin }) => {
  return (
    <div className={cx("profile")}>
      {isLogin ? (
        <div className={cx("profile-info")}>
          <div className={cx("profile-image-wrapper")}>
            <div className={cx("profile-image")} />
          </div>
          <div className={cx("profile-text")}>
            <h2 className={cx("profile-name")}>닉네임</h2>
            <p className={cx("profile-personalcolor")}>겨울 쿨 브라이트</p>
          </div>
        </div>
      ) : (
        <div className={cx("profile")}>
          <div className={cx("login-prompt")}>
            <p className={cx("prompt-text")}>로그인이 필요합니다.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePresenter;
