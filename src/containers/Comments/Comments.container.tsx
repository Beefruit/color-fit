"use client";

import { type FC } from "react";
import CommentsPresenter from "./presenter/Comments.presenter";
import { useComments } from "./hook/useComments";

interface CommentsContainerProps {
  id: string;
}

const CommentsContainer: FC<CommentsContainerProps> = ({ id }) => {
  const {
    onSubmitComment,
    onChangeComment,
    content,
    comments,
    userProfile,
    loading,
  } = useComments(id);

  return (
    <CommentsPresenter
      onSubmitComment={onSubmitComment}
      onChangeComment={onChangeComment}
      content={content}
      comments={comments}
      userProfile={userProfile}
      loading={loading}
    />
  );
};

export default CommentsContainer;
