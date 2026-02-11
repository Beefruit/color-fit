import { type FC } from "react";
import styles from "./page.module.css";
import classNames from "classnames/bind";
import MainBannerContainer from "@/containers/MainBanner/MainBanner.container";
import TodayPickContainer from "@/containers/TodayPick/TodayPick.container";
import PopularWritingContainer from "@/containers/PopularWriting/PopularWriting.container";

const cx = classNames.bind(styles);

const HomePage: FC = () => {
  return (
    <div className={cx("container")}>
      <MainBannerContainer />
      <TodayPickContainer />
      <PopularWritingContainer />
    </div>
  );
};

export default HomePage;
