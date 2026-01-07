import { type FC } from "react";
import styles from "./PopularWriting.module.css";
import classNames from "classnames/bind";
import { ArrowRight, Heart, MessageCircle } from "lucide-react";

const cx = classNames.bind(styles);

const PopularWritingPresenter: FC = () => {
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
        <li className={cx("writing-item")}>
          <div className={cx("user-image")}></div>
          <div className={cx("writing-info")}>
            <div className={cx("user-info")}>
              <div className={cx("user")}>
                <p className={cx("user-name")}>윈터타입</p>
                <p className={cx("user-personalcolor")}>겨울 쿨 브라이트</p>
              </div>
              <p className={cx("time-posted")}>34분 전</p>
            </div>
            <h2 className={cx("writing-title")}>나에게 어울리는 립스틱 찾기</h2>
            <div className={cx("writing-image")}></div>
            <div className={cx("writing-footer")}>
              <div className={cx("likes")}>
                <Heart size={15} className={cx("heart-icon")} />
                <p className={cx("like-count")}>95</p>
              </div>
              <div className={cx("comments")}>
                <MessageCircle size={15} className={cx("comment-icon")} />
                <p className={cx("comment-count")}>댓글 27</p>
              </div>
            </div>
          </div>
        </li>
        <li className={cx("writing-item")}>
          <div className={cx("user-image")}></div>
          <div className={cx("writing-info")}>
            <div className={cx("user-info")}>
              <div className={cx("user")}>
                <p className={cx("user-name")}>윈터타입</p>
                <p className={cx("user-personalcolor")}>겨울 쿨 브라이트</p>
              </div>
              <p className={cx("time-posted")}>34분 전</p>
            </div>
            <h2 className={cx("writing-title")}>나에게 어울리는 립스틱 찾기</h2>
            <div className={cx("writing-image")}></div>
            <div className={cx("writing-footer")}>
              <div className={cx("likes")}>
                <Heart size={15} className={cx("heart-icon")} />
                <p className={cx("like-count")}>95</p>
              </div>
              <div className={cx("comments")}>
                <MessageCircle size={15} className={cx("comment-icon")} />
                <p className={cx("comment-count")}>댓글 27</p>
              </div>
            </div>
          </div>
        </li>
        <li className={cx("writing-item")}>
          <div className={cx("user-image")}></div>
          <div className={cx("writing-info")}>
            <div className={cx("user-info")}>
              <div className={cx("user")}>
                <p className={cx("user-name")}>윈터타입</p>
                <p className={cx("user-personalcolor")}>겨울 쿨 브라이트</p>
              </div>
              <p className={cx("time-posted")}>34분 전</p>
            </div>
            <h2 className={cx("writing-title")}>나에게 어울리는 립스틱 찾기</h2>
            <div className={cx("writing-image")}></div>
            <div className={cx("writing-footer")}>
              <div className={cx("likes")}>
                <Heart size={15} className={cx("heart-icon")} />
                <p className={cx("like-count")}>95</p>
              </div>
              <div className={cx("comments")}>
                <MessageCircle size={15} className={cx("comment-icon")} />
                <p className={cx("comment-count")}>댓글 27</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default PopularWritingPresenter;
