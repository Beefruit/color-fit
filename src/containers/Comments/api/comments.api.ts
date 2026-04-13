export const postComment = async ({
  postId,
  content,
}: {
  postId: string;
  content: string;
}) => {
  try {
    const response = await fetch(`/api/post/${postId}/comment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
    });
    if (!response.ok) {
      throw new Error("Failed to post comment", {
        cause: await response.text(),
      });
    }
    return await response.json();
  } catch (error) {
    throw error;
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
      console.log("Failed to fetch comments", await response.text());
      throw new Error("Failed to fetch comments");
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to fetch comments", error);
    return [];
  }
};
