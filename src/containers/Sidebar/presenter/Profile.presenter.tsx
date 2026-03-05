import { type FC } from "react";
import styles from "./Profile.module.css";
import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";

const cx = classNames.bind(styles);

interface IProfilePresenterProps {
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

const ProfilePresenter: FC<IProfilePresenterProps> = ({
  isLogin,
  userData,
}) => {
  return (
    <div className={cx("profile")}>
      {isLogin ? (
        <div className={cx("profile-info")}>
          <div className={cx("profile-image-wrapper")}>
            <div className={cx("profile-image")}>
              {userData?.avatar_url && (
                <Image
                  src={`https://lsapyxmfpbrgttavcxag.supabase.co/storage/v1/object/public/avatars/${userData.avatar_url}`}
                  alt={`${userData.nickname}의 프로필 이미지`}
                  width={80}
                  height={80}
                />
              )}
            </div>
          </div>
          <div className={cx("profile-text")}>
            <h2 className={cx("profile-name")}>{userData?.nickname}</h2>
            <p className={cx("profile-personalcolor")}>
              {userData?.personal_color_tag.name}
            </p>
          </div>
        </div>
      ) : (
        <div className={cx("profile")}>
          <div className={cx("login")}>
            <Link href="/login" className={cx("login-link")}>
              로그인
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePresenter;
