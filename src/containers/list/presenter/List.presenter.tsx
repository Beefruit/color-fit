import { type FC } from "react";
import styles from "./List.module.css";
import classNames from "classnames/bind";
import { ArrowLeft, Heart, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { formatTimeAgo } from "@/utils";

const cx = classNames.bind(styles);

interface ListPresenterProps {
  list?: {
    id: number;
    nickname: string;
    avatar_url: string;
    title: string;
    content: string;
    image_urls: string[];
    like_count: number;
    comment_count: number;
    created_at: string;
  }[];
}

const ListPresenter: FC<ListPresenterProps> = ({ list }) => {
  return (
    <div className={cx("list-container")}>
      <div className={cx("list-header")}>
        <div className={cx("list-header-icon")}>
          <Link href="/" className={cx("back-button")}>
            <ArrowLeft size={20} className={cx("arrow-icon")} />
          </Link>
          <h1 className={cx("list-title")}>실시간 인기글</h1>
        </div>
        <Link href="/community/register" className={cx("link-button")}>
          글쓰기
        </Link>
      </div>
      <ul className={cx("list-content")}>
        {list?.map((item, index) => (
          <li key={item.id} className={cx("list-item")}>
            <Link
              href={`/popular-writing/${item.id}`}
              className={cx("list-item-link")}
            >
              <div className={cx("list-item-header")}>
                <div className={cx("list-item-rank")}>
                  <p
                    className={cx("list-item-rank-number", {
                      ranking: index < 3,
                    })}
                  >
                    {index + 1}
                  </p>
                </div>
              </div>
              <div className={cx("list-item-content")}>
                <div className={cx("list-item-info")}>
                  <div className={cx("left")}>
                    <div className={cx("user-image")}>
                      <Image
                        src={`${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL}/avatars/${item.avatar_url}`}
                        alt={`${item.nickname}의 아바타`}
                        width={40}
                        height={40}
                        className={cx("user-image")}
                      />
                    </div>
                    <div className={cx("user-info")}>
                      <p className={cx("user-name")}>{item.nickname}</p>
                      <p className={cx("personal-color")}>겨울 쿨 브라이트</p>
                    </div>
                  </div>
                  <div className={cx("time-posted")}>
                    {formatTimeAgo(item.created_at)}
                  </div>
                </div>
                <h2 className={cx("list-item-title")}>{item.title}</h2>
                <p className={cx("list-item-description")}>{item.content}</p>
                <div className={cx("list-item-footer")}>
                  <div className={cx("list-item-likes")}>
                    <Heart size={16} className={cx("like-icon")} />
                    <p className={cx("like-count")}>{item.like_count}</p>
                  </div>
                  <div className={cx("list-item-comments")}>
                    <MessageCircle size={16} className={cx("comment-icon")} />
                    <p className={cx("comment-count")}>
                      댓글 {item.comment_count}
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

export default ListPresenter;
