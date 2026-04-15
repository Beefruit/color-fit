"use client";

import { type FC } from "react";
import styles from "./PopularWritingDetail.module.css";
import classNames from "classnames/bind";
import { Heart } from "lucide-react";
import { commarize } from "@/utils/commarize";
import { useLike } from "../hook/useLike";

const cx = classNames.bind(styles);

interface LikeButtonPresenterProps {
  like_count: number;
  id: string;
}

const LikeButtonPresenter: FC<LikeButtonPresenterProps> = ({
  like_count,
  id,
}) => {
  const { isLiked, likeCount, onClickLike } = useLike(id, like_count);

  return (
    <div
      className={cx("likes", { "likes--active": isLiked })}
      onClick={onClickLike}
    >
      <Heart
        size={15}
        fill={isLiked ? "#ff6b6b" : "none"}
        className={cx("heart-icon")}
      />
      <p className={cx("like-count")}>{commarize(likeCount)}</p>
    </div>
  );
};

export default LikeButtonPresenter;
