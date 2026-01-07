import { type FC } from "react";
import styles from "./Header.module.css";
import classNames from "classnames/bind";
import Image from "next/image";
import SearchBarContainer from "@/containers/Searchbar/Searchbar.container";

const cx = classNames.bind(styles);

const HeaderPresenter: FC = () => {
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
          <div className={cx("my-info")}></div>
        </div>
      </div>
    </header>
  );
};
export default HeaderPresenter;
