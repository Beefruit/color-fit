"use client";

import { useState } from "react";

export const useLike = () => {
  const [isLiked, setIsLiked] = useState(false);

  const onClickLike = () => {
    setIsLiked(!isLiked);
  };

  return {
    isLiked,
    onClickLike,
  };
};
