import { type FC } from "react";
import styles from "./Comments.module.css";
import classNames from "classnames/bind";
import { Send, ThumbsUp } from "lucide-react";
import { formatTimeAgo } from "@/utils";
import Image from "next/image";

const cx = classNames.bind(styles);

interface ICommentsPresenterProps {
  onSubmitComment: (event: React.FormEvent<HTMLFormElement>) => void;
  onChangeComment: (value: string) => void;
  content: string;
  comments: {
    id: number;
    content: string;
    like_count: number;
    created_at: string;
    nickname: string;
    avatar_url: string;
  }[];
}

const CommentsPresenter: FC<ICommentsPresenterProps> = ({
  onSubmitComment,
  onChangeComment,
  content,
  comments,
}) => {
  return (
    <div className={cx("comments-section")}>
      <div className={cx("comments")}>
        <h3 className={cx("comments-title")}>댓글</h3>
        <span className={cx("comments-count")}>{comments.length} </span>
      </div>
      <div className={cx("comments-user")}>
        <div className={cx("comments-user-image")}>
          {/* <Image
            src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/avatars/${comment.avatar_url}`}
            alt={comment.nickname}
            width={44}
            height={44}
          /> */}
        </div>
        <div className={cx("comments-content")}>
          <form className={cx("comments-form")} onSubmit={onSubmitComment}>
            <textarea
              className={cx("comments-input")}
              placeholder="댓글을 입력하세요..."
              value={content}
              onChange={(e) => onChangeComment(e.target.value)}
            />
            <button type="submit" className={cx("comments-submit-button")}>
              <Send size={15} className={cx("send-icon")} />
            </button>
          </form>
        </div>
      </div>
      <div className={cx("comments-list")}>
        {comments.map((comment) => (
          <div key={comment.id} className={cx("comment")}>
            <div className={cx("comment-user-image")}>
              <Image
                src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/avatars/${comment.avatar_url}`}
                alt={comment.nickname}
                width={44}
                height={44}
              />
            </div>
            <div className={cx("comment-content")}>
              <div className={cx("comment-header")}>
                <p className={cx("comment-user-name")}>{comment.nickname}</p>
                <p className={cx("comment-time")}>
                  {formatTimeAgo(comment.created_at)}
                </p>
              </div>
              <p className={cx("comment-text")}>{comment.content}</p>
              <div className={cx("comment-likes")}>
                <ThumbsUp size={12} className={cx("comment-like-icon")} />
                <p className={cx("comment-like")}>{comment.like_count}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentsPresenter;
