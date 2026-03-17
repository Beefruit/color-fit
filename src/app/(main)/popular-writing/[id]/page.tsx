import { type FC } from "react";
import styles from "./page.module.css";
import classNames from "classnames/bind";
import { ArrowLeft } from "lucide-react";
import PopularWritingDetailContainer from "@/containers/PopularWritingDetail/PopularWritingDetail.container";
import CommentsContainer from "@/containers/Comments/Comments.container";

const cx = classNames.bind(styles);

interface PopularWritingPageProps {
  params: Promise<{ id: string }>;
}

const PopularWritingPage: FC<PopularWritingPageProps> = async ({ params }) => {
  const { id } = await params;

  return (
    <div className={cx("popular-writing-page")}>
      <div className={cx("header")}>
        <div className={cx("header-icon")}>
          <ArrowLeft size={20} className={cx("arrow-icon")} />
        </div>
        <h1 className={cx("title")}>인기글 상세</h1>
      </div>
      <div className={cx("popular-writing-container")}>
        <div className={cx("main")}>
          <PopularWritingDetailContainer id={id} />
          <CommentsContainer id={id} />
        </div>
        <div className={cx("sidebar")}>
          <h2 className={cx("sidebar-title")}>관련 인기 글</h2>
          <ul className={cx("sidebar-list")}>
            <li className={cx("sidebar-item")}>
              <div className={cx("sidebar-image")}></div>
              <div className={cx("sidebar-info")}>
                <h3 className={cx("sidebar-subtitle")}>인기 글 제목 1</h3>
                <div className={cx("sidebar-actions")}>
                  <p className={cx("sidebar-comments")}>댓글 11</p>
                  <p className={cx("sidebar-likes")}>좋아요 55</p>
                </div>
              </div>
            </li>
            <li className={cx("sidebar-item")}>
              <div className={cx("sidebar-image")}></div>
              <div className={cx("sidebar-info")}>
                <h3 className={cx("sidebar-subtitle")}>인기 글 제목 2</h3>
                <div className={cx("sidebar-actions")}>
                  <p className={cx("sidebar-comments")}>댓글 8</p>
                  <p className={cx("sidebar-likes")}>좋아요 42</p>
                </div>
              </div>
            </li>
            <li className={cx("sidebar-item")}>
              <div className={cx("sidebar-image")}></div>
              <div className={cx("sidebar-info")}>
                <h3 className={cx("sidebar-subtitle")}>인기 글 제목 3</h3>
                <div className={cx("sidebar-actions")}>
                  <p className={cx("sidebar-comments")}>댓글 5</p>
                  <p className={cx("sidebar-likes")}>좋아요 30</p>
                </div>
              </div>
            </li>
          </ul>
          <div className={cx("divider")}></div>
          <h2 className={cx("sidebar-title")}>실시간 트렌드</h2>
          <div className={cx("sidebar-trend-tags")}>
            <p className={cx("sidebar-trend-tag")}>#겨울쿨톤</p>
            <p className={cx("sidebar-trend-tag")}>#MLBB</p>
            <p className={cx("sidebar-trend-tag")}>#립스틱추천</p>
            <p className={cx("sidebar-trend-tag")}>#코덕</p>
            <p className={cx("sidebar-trend-tag")}>#뷰티커뮤니티</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularWritingPage;
