"use client";

import { useEffect, useState } from "react";
import { postComment, getComments } from "../api/comments.api";
import { useUserStore } from "@/store/user.store";
import { useConfirmModalStore } from "@/store/confirmModal.store";
import { useRouter } from "next/navigation";

export const useComments = (id: string) => {
  const [content, setContent] = useState("");
  const [comments, setComments] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { userProfile } = useUserStore();
  const {
    setIsOpen,
    setTitle,
    setMessage,
    setCancelText,
    setConfirmText,
    setOnConfirm,
    setOnCancel,
  } = useConfirmModalStore();

  const onSubmitComment = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!content.trim()) return;

    if (!userProfile) {
      setTitle("로그인이 필요합니다.");
      setMessage("댓글을 작성하려면 로그인이 필요합니다.");
      setCancelText("취소");
      setConfirmText("로그인");
      setIsOpen(true);
      setOnCancel(() => setIsOpen(false));
      setOnConfirm(() => {
        router.push("/login");
        setIsOpen(false);
      });
      return;
    }

    setLoading(true);

    try {
      const { comment: commentData } = await postComment({
        postId: id,
        content,
      });

      setComments([commentData, ...comments]);
      setContent("");
    } catch (error) {
      if ((error as any).cause.includes("로그인이 필요합니다.")) {
        setIsOpen(true);
      }
    }

    setLoading(false);
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

  return {
    onSubmitComment,
    onChangeComment,
    content,
    comments,
    userProfile,
    loading,
  };
};
