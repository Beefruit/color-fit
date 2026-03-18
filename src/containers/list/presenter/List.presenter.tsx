import { type FC } from "react";
import styles from "./List.module.css";
import classNames from "classnames/bind";
import { ArrowLeft, Heart, MessageCircle } from "lucide-react";
import Link from "next/link";

const cx = classNames.bind(styles);

const ListPresenter: FC = () => {
  return (
    <div className={cx("list-container")}>
      <div className={cx("list-header")}>
        <div className={cx("list-header-icon")}>
          <ArrowLeft size={20} className={cx("arrow-icon")} />
          <h1 className={cx("list-title")}>실시간 인기글</h1>
        </div>
        <Link href="/community/register" className={cx("link-button")}>
          글쓰기
        </Link>
      </div>
      <ul className={cx("list-content")}>
        <li className={cx("list-item")}>
          <div className={cx("list-item-header")}>
            <div className={cx("list-item-lank")}>
              <p className={cx("list-item-lank-number")}>1</p>
            </div>
            <div className={cx("list-item-info")}>
              <div className={cx("left")}>
                <div className={cx("user-image")}></div>
                <div className={cx("user-info")}>
                  <p className={cx("user-name")}>윈터타임</p>
                  <p className={cx("personal-color")}>겨울 쿨 브라이트</p>
                </div>
              </div>
              <div className={cx("time-posted")}>34분 전</div>
            </div>
          </div>
          <div className={cx("list-item-content")}>
            <h2 className={cx("list-item-title")}>인기 글 제목</h2>
            <p className={cx("list-item-description")}>
              인기 글 내용 미리보기. 인기 글 내용 미리보기. 인기 글 내용
              미리보기.
            </p>
            <div className={cx("list-item-footer")}>
              <div className={cx("list-item-likes")}>
                <Heart size={16} className={cx("like-icon")} />
                <p className={cx("like-count")}>55</p>
              </div>
              <div className={cx("list-item-comments")}>
                <MessageCircle size={16} className={cx("comment-icon")} />
                <p className={cx("comment-count")}>댓글 11</p>
              </div>
            </div>
          </div>
        </li>
        <li className={cx("list-item")}>
          <div className={cx("list-item-header")}>
            <div className={cx("list-item-lank")}>
              <p className={cx("list-item-lank-number")}>2</p>
            </div>
            <div className={cx("list-item-info")}>
              <div className={cx("left")}>
                <div className={cx("user-image")}></div>
                <div className={cx("user-info")}>
                  <p className={cx("user-name")}>윈터타임</p>
                  <p className={cx("personal-color")}>겨울 쿨 브라이트</p>
                </div>
              </div>
              <div className={cx("time-posted")}>34분 전</div>
            </div>
          </div>
          <div className={cx("list-item-content")}>
            <h2 className={cx("list-item-title")}>인기 글 제목</h2>
            <p className={cx("list-item-description")}>
              인기 글 내용 미리보기. 인기 글 내용 미리보기. 인기 글 내용
              미리보기.
            </p>
            <div className={cx("list-item-footer")}>
              <div className={cx("list-item-likes")}>
                <Heart size={16} className={cx("like-icon")} />
                <p className={cx("like-count")}>55</p>
              </div>
              <div className={cx("list-item-comments")}>
                <MessageCircle size={16} className={cx("comment-icon")} />
                <p className={cx("comment-count")}>댓글 11</p>
              </div>
            </div>
          </div>
        </li>
        <li className={cx("list-item")}>
          <div className={cx("list-item-header")}>
            <div className={cx("list-item-lank")}>
              <p className={cx("list-item-lank-number")}>3</p>
            </div>
            <div className={cx("list-item-info")}>
              <div className={cx("left")}>
                <div className={cx("user-image")}></div>
                <div className={cx("user-info")}>
                  <p className={cx("user-name")}>윈터타임</p>
                  <p className={cx("personal-color")}>겨울 쿨 브라이트</p>
                </div>
              </div>
              <div className={cx("time-posted")}>34분 전</div>
            </div>
          </div>
          <div className={cx("list-item-content")}>
            <h2 className={cx("list-item-title")}>인기 글 제목</h2>
            <p className={cx("list-item-description")}>
              인기 글 내용 미리보기. 인기 글 내용 미리보기. 인기 글 내용
              미리보기.
            </p>
            <div className={cx("list-item-footer")}>
              <div className={cx("list-item-likes")}>
                <Heart size={16} className={cx("like-icon")} />
                <p className={cx("like-count")}>55</p>
              </div>
              <div className={cx("list-item-comments")}>
                <MessageCircle size={16} className={cx("comment-icon")} />
                <p className={cx("comment-count")}>댓글 11</p>
              </div>
            </div>
          </div>
        </li>
        <li className={cx("list-item")}>
          <div className={cx("list-item-header")}>
            <div className={cx("list-item-lank")}>
              <p className={cx("list-item-lank-number")}>4</p>
            </div>
            <div className={cx("list-item-info")}>
              <div className={cx("left")}>
                <div className={cx("user-image")}></div>
                <div className={cx("user-info")}>
                  <p className={cx("user-name")}>윈터타임</p>
                  <p className={cx("personal-color")}>겨울 쿨 브라이트</p>
                </div>
              </div>
              <div className={cx("time-posted")}>34분 전</div>
            </div>
          </div>
          <div className={cx("list-item-content")}>
            <h2 className={cx("list-item-title")}>인기 글 제목</h2>
            <p className={cx("list-item-description")}>
              인기 글 내용 미리보기. 인기 글 내용 미리보기. 인기 글 내용
              미리보기.
            </p>
            <div className={cx("list-item-footer")}>
              <div className={cx("list-item-likes")}>
                <Heart size={16} className={cx("like-icon")} />
                <p className={cx("like-count")}>55</p>
              </div>
              <div className={cx("list-item-comments")}>
                <MessageCircle size={16} className={cx("comment-icon")} />
                <p className={cx("comment-count")}>댓글 11</p>
              </div>
            </div>
          </div>
        </li>
        <li className={cx("list-item")}>
          <div className={cx("list-item-header")}>
            <div className={cx("list-item-lank")}>
              <p className={cx("list-item-lank-number")}>5</p>
            </div>
            <div className={cx("list-item-info")}>
              <div className={cx("left")}>
                <div className={cx("user-image")}></div>
                <div className={cx("user-info")}>
                  <p className={cx("user-name")}>윈터타임</p>
                  <p className={cx("personal-color")}>겨울 쿨 브라이트</p>
                </div>
              </div>
              <div className={cx("time-posted")}>34분 전</div>
            </div>
          </div>
          <div className={cx("list-item-content")}>
            <h2 className={cx("list-item-title")}>인기 글 제목</h2>
            <p className={cx("list-item-description")}>
              인기 글 내용 미리보기. 인기 글 내용 미리보기. 인기 글 내용
              미리보기.
            </p>
            <div className={cx("list-item-footer")}>
              <div className={cx("list-item-likes")}>
                <Heart size={16} className={cx("like-icon")} />
                <p className={cx("like-count")}>55</p>
              </div>
              <div className={cx("list-item-comments")}>
                <MessageCircle size={16} className={cx("comment-icon")} />
                <p className={cx("comment-count")}>댓글 11</p>
              </div>
            </div>
          </div>
        </li>
        <li className={cx("list-item")}>
          <div className={cx("list-item-header")}>
            <div className={cx("list-item-lank")}>
              <p className={cx("list-item-lank-number")}>6</p>
            </div>
            <div className={cx("list-item-info")}>
              <div className={cx("left")}>
                <div className={cx("user-image")}></div>
                <div className={cx("user-info")}>
                  <p className={cx("user-name")}>윈터타임</p>
                  <p className={cx("personal-color")}>겨울 쿨 브라이트</p>
                </div>
              </div>
              <div className={cx("time-posted")}>34분 전</div>
            </div>
          </div>
          <div className={cx("list-item-content")}>
            <h2 className={cx("list-item-title")}>인기 글 제목</h2>
            <p className={cx("list-item-description")}>
              인기 글 내용 미리보기. 인기 글 내용 미리보기. 인기 글 내용
              미리보기.
            </p>
            <div className={cx("list-item-footer")}>
              <div className={cx("list-item-likes")}>
                <Heart size={16} className={cx("like-icon")} />
                <p className={cx("like-count")}>55</p>
              </div>
              <div className={cx("list-item-comments")}>
                <MessageCircle size={16} className={cx("comment-icon")} />
                <p className={cx("comment-count")}>댓글 11</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ListPresenter;
