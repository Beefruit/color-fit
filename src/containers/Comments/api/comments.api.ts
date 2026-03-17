export const postComment = async ({
  postId,
  content,
}: {
  postId: string;
  content: string;
}) => {
  console.log("댓글 작성 API 호출", { postId, content }); // 디버깅 로그
  try {
    const response = await fetch(`/api/post/${postId}/comment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
    });
    if (!response.ok) {
      throw new Error("Failed to post comment");
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to post comment", error);
  }
};

export const getComments = async (postId: string) => {
  try {
    const response = await fetch(`/api/post/${postId}/comment`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch comments");
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to fetch comments", error);
    return [];
  }
};
