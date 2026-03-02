import { type FC } from "react";
import styles from "./page.module.css";
import classNames from "classnames/bind";
import {
  ArrowLeft,
  Heart,
  MessageCircle,
  Share2,
  Send,
  ThumbsUp,
} from "lucide-react";
import Image from "next/image";

const cx = classNames.bind(styles);

const PopularWritingPage: FC = () => {
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
          <div className={cx("content")}>
            <div className={cx("user-info")}>
              <div className={cx("user-image")}></div>
              <div className={cx("user")}>
                <div className={cx("user-details")}>
                  <p className={cx("user-name")}>닉네임</p>
                  <div className={cx("personal-color-tag")}>
                    겨울 쿨 브라이트
                  </div>
                </div>
                <div className={cx("count-info")}>
                  <p className={cx("time-posted")}>2시간 전</p>
                  <p className={cx("view-count")}>조회 1240</p>
                </div>
              </div>
            </div>
            <div className={cx("tag")}>
              <p className={cx("tag-hot")}>HOT</p>
              <p className={cx("tag-category")}>질문</p>
            </div>
            <div className={cx("writing-content")}>
              <h2 className={cx("writing-title")}>
                겨울 쿨톤 립스틱 추천 받습니다!
              </h2>
              <p className={cx("writing-text")}>
                안녕하세요! 겨울 쿨톤인데 립스틱 추천 좀 받을 수 있을까요?
                <br />
                요즘 MLBB 톤으로 찾고 있어요. 너무 진하지 않고 자연스러운
                색상이면 좋겠어요. 평소에는 입생로랑 틴트 자주 쓰는데 다른
                브랜드도 써보고 싶네요.
                <br />
                댓글로 제품명이랑 호수 알려주시면 감사하겠습니다!! 😊
              </p>
              <div className={cx("writing-image")}>
                <Image
                  src="/images/post.png"
                  alt="Writing Image"
                  width={500}
                  height={300}
                />
              </div>
              <div className={cx("writing-footer")}>
                <div className={cx("likes")}>
                  <Heart size={15} className={cx("heart-icon")} />
                  <p className={cx("like-count")}>124</p>
                </div>
                <div className={cx("writing-actions")}>
                  <div className={cx("comment-count-section")}>
                    <MessageCircle size={15} className={cx("comment-icon")} />
                    <p className={cx("comment-count")}>3</p>
                  </div>
                  <div className={cx("share")}>
                    <Share2 size={15} className={cx("share-icon")} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={cx("comments-section")}>
            <div className={cx("comments")}>
              <h3 className={cx("comments-title")}>댓글</h3>
              <span className={cx("comments-count")}>3</span>
            </div>
            <div className={cx("comments-user")}>
              <div className={cx("comments-user-image")}></div>
              <div className={cx("comments-content")}>
                <textarea
                  className={cx("comments-input")}
                  placeholder="댓글을 입력하세요..."
                />
                <button type="submit" className={cx("comments-submit-button")}>
                  <Send size={15} className={cx("send-icon")} />
                </button>
              </div>
            </div>
            <div className={cx("comments-list")}>
              <div className={cx("comment")}>
                <div className={cx("comment-user-image")}></div>
                <div className={cx("comment-content")}>
                  <div className={cx("comment-header")}>
                    <p className={cx("comment-user-name")}>사용자1</p>
                    <p className={cx("comment-time")}>1시간 전</p>
                  </div>
                  <p className={cx("comment-text")}>
                    저는 맥의 러스트를 추천드려요! 겨울 쿨톤에 잘 어울리는 MLBB
                    색상입니다.
                  </p>
                  <div className={cx("comment-likes")}>
                    <ThumbsUp size={12} className={cx("comment-like-icon")} />
                    <p className={cx("comment-like")}>좋아요 12</p>
                  </div>
                </div>
              </div>
              <div className={cx("comment")}>
                <div className={cx("comment-user-image")}></div>
                <div className={cx("comment-content")}>
                  <div className={cx("comment-header")}>
                    <p className={cx("comment-user-name")}>사용자2</p>
                    <p className={cx("comment-time")}>30분 전</p>
                  </div>
                  <p className={cx("comment-text")}>
                    에뛰드의 MLBB 컬렉션도 괜찮아요! 가격도 부담 없고 색상도
                    다양해서 추천드립니다.
                  </p>
                  <div className={cx("comment-likes")}>
                    <ThumbsUp size={12} className={cx("comment-like-icon")} />
                    <p className={cx("comment-like")}>좋아요 8</p>
                  </div>
                </div>
              </div>
              <div className={cx("comment")}>
                <div className={cx("comment-user-image")}></div>
                <div className={cx("comment-content")}>
                  <div className={cx("comment-header")}>
                    <p className={cx("comment-user-name")}>사용자3</p>
                    <p className={cx("comment-time")}>10분 전</p>
                  </div>
                  <p className={cx("comment-text")}>
                    입생로랑 틴트 중에서는 16호가 겨울 쿨톤에 잘 어울리는 MLBB
                    색상이에요!
                  </p>
                  <div className={cx("comment-likes")}>
                    <ThumbsUp size={12} className={cx("comment-like-icon")} />
                    <p className={cx("comment-like")}>좋아요 5</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
