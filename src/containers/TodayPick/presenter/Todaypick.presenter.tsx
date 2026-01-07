import { type FC } from "react";
import styles from "./TodayPick.module.css";
import classNames from "classnames/bind";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

const cx = classNames.bind(styles);

const TodaypickPresenter: FC = () => {
  return (
    <div className={cx("today-pick")}>
      <div className={cx("header")}>
        <div className={cx("header-wrapper")}>
          <h2 className={cx("title")}>오늘의 추천</h2>
          <p className={cx("sub-title")}>for 겨울 쿨 브라이트</p>
        </div>
        <div className={cx("controls")}>
          <div className={cx("button")}>
            <ChevronLeft size={20} />
          </div>
          <div className={cx("button")}>
            <ChevronRight size={20} />
          </div>
        </div>
      </div>
      <ul className={cx("pick-list")}>
        <li className={cx("pick-item")}>
          <div className={cx("pick-item-image")}></div>
          <div className={cx("pick-item-info")}>
            <p className={cx("pick-item-brand")}>김필러 컬러리츠</p>
            <p className={cx("pick-item-personalcolor")}>겨울 쿨</p>
          </div>
          <div className={cx("pick-item-wrapper")}>
            <h2 className={cx("pick-item-name")}>윈터 쿨톤 립스틱</h2>
            <div className={cx("pick")}>
              <Heart size={15} className={cx("heart")} />
              <p className={cx("pick-count")}>+ 128</p>
            </div>
          </div>
        </li>
        <li className={cx("pick-item")}>
          <div className={cx("pick-item-image")}></div>
          <div className={cx("pick-item-info")}>
            <p className={cx("pick-item-brand")}>스프링 블룸</p>
            <p className={cx("pick-item-personalcolor")}>봄 웜</p>
          </div>
          <div className={cx("pick-item-wrapper")}>
            <h2 className={cx("pick-item-name")}>블러쉬 팔레트 핑크</h2>
            <div className={cx("pick")}>
              <Heart size={15} className={cx("heart")} />
              <p className={cx("pick-count")}>+ 102</p>
            </div>
          </div>
        </li>
        <li className={cx("pick-item")}>
          <div className={cx("pick-item-image")}></div>
          <div className={cx("pick-item-info")}>
            <p className={cx("pick-item-brand")}>윈터 베리</p>
            <p className={cx("pick-item-personalcolor")}>겨울 쿨</p>
          </div>
          <div className={cx("pick-item-wrapper")}>
            <h2 className={cx("pick-item-name")}>아이섀도우 팔레트</h2>
            <div className={cx("pick")}>
              <Heart size={15} className={cx("heart")} />
              <p className={cx("pick-count")}>+ 89</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TodaypickPresenter;
