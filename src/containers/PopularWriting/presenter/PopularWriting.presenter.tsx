import { type FC } from "react";
import styles from "./PopularWriting.module.css";
import classNames from "classnames/bind";
import { ArrowRight, Heart, MessageCircle } from "lucide-react";
import Link from "next/link";

const cx = classNames.bind(styles);

interface PopularWritingPresenterProps {
  popularWritings?: {
    id: number;
    user_id: string;
    title: string;
    content: string;
    image_urls: string[];
    like_count: number;
    comment_count: number;
    created_at: string;
  }[];
}

const PopularWritingPresenter: FC<PopularWritingPresenterProps> = (props) => {
  return (
    <div className={cx("popular-writing")}>
      <div className={cx("header")}>
        <h2 className={cx("title")}>실시간 인기 글</h2>
        <div className={cx("more-button")}>
          <p className={cx("button")}>전체보기</p>
          <ArrowRight size={15} className={cx("arrow-icon")} />
        </div>
      </div>
      <ul className={cx("writing-list")}>
        {props.popularWritings?.map((writing) => (
          <li key={writing.id} className={cx("writing-item")}>
            <Link
              href={`/popular-writing/${writing.id}`}
              className={cx("writing-link")}
            >
              <div className={cx("user-image")}></div>
              <div className={cx("writing-info")}>
                <div className={cx("user-info")}>
                  <div className={cx("user")}>
                    <p className={cx("user-name")}>{writing.user_id}</p>
                    <p className={cx("user-personalcolor")}>겨울 쿨 브라이트</p>
                  </div>
                  <p className={cx("time-posted")}>{writing.created_at}</p>
                </div>
                <h2 className={cx("writing-title")}>{writing.title}</h2>
                {/* <div>
              <Image
                src={writing.image_urls}
                alt={writing.title}
                width={210}
                height={210}
                className={cx("writing-image")}
              />
            </div> */}
                <div className={cx("writing-footer")}>
                  <div className={cx("likes")}>
                    <Heart size={15} className={cx("heart-icon")} />
                    <p className={cx("like-count")}>{writing.like_count}</p>
                  </div>
                  <div className={cx("comments")}>
                    <MessageCircle size={15} className={cx("comment-icon")} />
                    <p className={cx("comment-count")}>
                      댓글 {writing.comment_count}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularWritingPresenter;
