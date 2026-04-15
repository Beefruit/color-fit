"use client";

import { useEffect, useState } from "react";
import {
  postIncreaseLikeCount,
  postDecreaseLikeCount,
} from "../api/popularWritingDetail.api";

export const useLike = (id: string, like_count: number) => {
  const storageKey = `post_${id}_liked`;
  const [likeCount, setLikeCount] = useState(like_count);
  const [isLiked, setIsLiked] = useState(false); // true or false
  const [loading, setLoading] = useState(false);

  const onClickLike = async () => {
    if (loading) return;

    setLoading(true);
    setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));

    if (isLiked) {
      setIsLiked(false);
      localStorage.setItem(storageKey, "false");
      const updatedLikeCount = await postDecreaseLikeCount(id);

      setLikeCount(updatedLikeCount ?? likeCount);
      localStorage.setItem(storageKey, updatedLikeCount ? "false" : "true");
    } else {
      setIsLiked(true);
      localStorage.setItem(storageKey, "true");
      const updatedLikeCount = await postIncreaseLikeCount(id);

      setLikeCount(updatedLikeCount ?? likeCount);
      localStorage.setItem(storageKey, updatedLikeCount ? "true" : "false");
    }
    setLoading(false);
  };

  useEffect(() => {
    const storedValue = localStorage.getItem(storageKey);
    const liked = storedValue === "true";
    setIsLiked(liked);
  }, [id]);

  return { isLiked, likeCount, onClickLike };
};
