"use client";

import { useEffect, useState } from "react";
import { postComment, getComments } from "../api/comments.api";
import { useUserStore } from "@/store/user.store";

export const useComments = (id: string) => {
  const [content, setContent] = useState("");
  const [comments, setComments] = useState<any[]>([]);
  const { userProfile } = useUserStore();

  const onSubmitComment = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!content.trim()) return;

    const { comment: commentData } = await postComment({
      postId: id,
      content,
    });

    setComments([commentData, ...comments]);
    setContent("");
  };

  const onChangeComment = (value: string) => {
    setContent(value);
  };

  useEffect(() => {
    (async () => {
      const { comments } = await getComments(id);

      setComments(comments ?? []);
    })();
  }, [id]);

  return { onSubmitComment, onChangeComment, content, comments, userProfile };
};
