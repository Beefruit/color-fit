import { type FC } from "react";
import styles from "./Header.module.css";
import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";
import SearchBarContainer from "@/containers/Searchbar/Searchbar.container";

const cx = classNames.bind(styles);

interface IHeaderPresenterProps {
  nickname: string;
  avatar_url: string;
}

const HeaderPresenter: FC<IHeaderPresenterProps> = ({
  nickname,
  avatar_url,
}) => {
  return (
    <header className={cx("header")}>
      <div className={cx("header-wrapper")}>
        <h1 className={cx("title")}>
          <Image
            src="/images/colorfit-logo.png"
            alt="logo"
            width={120}
            height={65}
          />
        </h1>
        <SearchBarContainer />
        <div className={cx("utils")}>
          <div className={cx("my-info")}>
            {nickname ? (
              <div className={cx("profile-info")}>
                <div className={cx("profile-image-wrapper")}>
                  <div className={cx("profile-image")}>
                    {avatar_url ? (
                      <Image
                        src={`https://lsapyxmfpbrgttavcxag.supabase.co/storage/v1/object/public/avatars/${avatar_url}`}
                        alt={`${nickname}의 프로필 이미지`}
                        width={40}
                        height={40}
                      />
                    ) : (
                      <Image
                        src="/images/user-profile.png"
                        alt="기본 프로필 이미지"
                        width={40}
                        height={40}
                      />
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className={cx("login")}>
                <Link href="/login" className={cx("login-link")}>
                  로그인
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default HeaderPresenter;
