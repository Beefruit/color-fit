import { type FC } from "react";
import styles from "./PopularWritingDetail.module.css";
import classNames from "classnames/bind";
import Image from "next/image";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import { formatTimeAgo, commarize } from "@/utils";

const cx = classNames.bind(styles);

interface PopularWritingDetailPresenterProps {
  title: string;
  content: string;
  image_urls: string[];
  like_count: number;
  comment_count: number;
  created_at: string;
  nickname: string;
  avatar_url: string;
}

const PopularWritingDetailPresenter: FC<PopularWritingDetailPresenterProps> = ({
  title,
  content,
  image_urls,
  like_count,
  comment_count,
  created_at,
  nickname,
  avatar_url,
}) => {
  return (
    <div className={cx("content")}>
      <div className={cx("user-info")}>
        <div className={cx("user-image")}>
          <Image
            src={`${process.env.NEXT_PUBLIC_SUPABASE_STORAGE_URL}/avatars/${avatar_url}`}
            alt={`${nickname}의 아바타`}
            width={50}
            height={50}
            className={cx("avatar")}
          />
        </div>
        <div className={cx("user")}>
          <div className={cx("user-details")}>
            <p className={cx("user-name")}>{nickname}</p>
            <div className={cx("personal-color-tag")}>겨울 쿨 브라이트</div>
          </div>
          <div className={cx("count-info")}>
            <p className={cx("time-posted")}>{formatTimeAgo(created_at)}</p>
            <p className={cx("view-count")}>조회 {commarize(1240)}</p>
          </div>
        </div>
      </div>
      <div className={cx("tag")}>
        <p className={cx("tag-hot")}>HOT</p>
        <p className={cx("tag-category")}>질문</p>
      </div>
      <div className={cx("writing-content")}>
        <h2 className={cx("writing-title")}>{title}</h2>
        <p className={cx("writing-text")}>{content}</p>
        <div className={cx("writing-image")}>
          <Image
            src="/images/post.png"
            alt="Writing Image"
            width={500}
            height={300}
          />
        </div>
        <div className={cx("writing-footer")}>
          <div className={cx("writing-actions")}>
            <div className={cx("likes")}>
              <Heart size={15} className={cx("heart-icon")} />
              <p className={cx("like-count")}>{commarize(like_count)}</p>
            </div>
            <div className={cx("comment-count-section")}>
              <MessageCircle size={15} className={cx("comment-icon")} />
              <p className={cx("comment-count")}>{commarize(comment_count)}</p>
            </div>
          </div>
          <div className={cx("share")}>
            <Share2 size={15} className={cx("share-icon")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularWritingDetailPresenter;
