"use client";

import { type FC } from "react";
import styles from "./TodayPick.module.css";
import classNames from "classnames/bind";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "./TodayPickSlide.css";

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
          <div className={`${cx("button")} pick-prev`}>
            <ChevronLeft size={20} />
          </div>
          <div className={`${cx("button")} pick-next`}>
            <ChevronRight size={20} />
          </div>
        </div>
      </div>
      <div className={cx("pick-list-wrapper")}>
        <Swiper
          navigation={{ nextEl: ".pick-next", prevEl: ".pick-prev" }}
          modules={[Navigation]}
          slidesPerView={"auto"}
          spaceBetween={10}
          className="pick-list"
        >
          <SwiperSlide className={cx("pick-item")}>
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
          </SwiperSlide>
          <SwiperSlide className={cx("pick-item")}>
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
          </SwiperSlide>
          <SwiperSlide className={cx("pick-item")}>
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
          </SwiperSlide>
          <SwiperSlide className={cx("pick-item")}>
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
          </SwiperSlide>
          <SwiperSlide className={cx("pick-item")}>
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
          </SwiperSlide>
          <SwiperSlide className={cx("pick-item")}>
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
          </SwiperSlide>
          <SwiperSlide className={cx("pick-item")}>
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
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default TodaypickPresenter;
