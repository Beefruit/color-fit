import { type FC } from "react";
import styles from "./Profile.module.css";
import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";

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
        <div className={cx("login-prompt")}>
          <Link href="/login" className={cx("login-link")}>
            로그인
          </Link>
          <p className={cx("login-prompt-text")}>
            로그인 후 프로필을 설정해보세요!
          </p>
        </div>
      )}
    </div>
  );
};

export default ProfilePresenter;
