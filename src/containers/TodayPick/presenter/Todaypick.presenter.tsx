"use client";

import { type FC } from "react";
import styles from "./TodayPick.module.css";
import classNames from "classnames/bind";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "./TodayPickSlide.css";

const cx = classNames.bind(styles);

interface ITodaypickPresenterProps {
  todayPicks?: {
    id: number;
    brand: string;
    name: string;
    personal_color: string;
    likes: number;
    image_url: string;
    category: string;
  }[];
}

const TodaypickPresenter: FC<ITodaypickPresenterProps> = ({ todayPicks }) => {
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
          {todayPicks?.map((pick) => (
            <SwiperSlide key={pick.id} className={cx("pick-item")}>
              <div>
                <Image
                  src={pick.image_url}
                  alt={pick.name}
                  width={210}
                  height={210}
                  className={cx("pick-item-image")}
                />
              </div>
              <div className={cx("pick-item-info")}>
                <p className={cx("pick-item-brand")}>{pick.brand}</p>
                <p className={cx("pick-item-personalcolor")}>
                  {pick.personal_color}
                </p>
              </div>
              <div className={cx("pick-item-wrapper")}>
                <h2 className={cx("pick-item-name")}>{pick.name}</h2>
                <div className={cx("pick")}>
                  <Heart size={15} className={cx("heart")} />
                  <p className={cx("pick-count")}>+ {pick.likes}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TodaypickPresenter;
