import { type FC } from "react";
import styles from "./MainBanner.module.css";
import classNames from "classnames/bind";
import Image from "next/image";

const cx = classNames.bind(styles);

const MainBannerPresenter: FC = () => {
  return <div className={cx("main-banner")}></div>;
};

export default MainBannerPresenter;
