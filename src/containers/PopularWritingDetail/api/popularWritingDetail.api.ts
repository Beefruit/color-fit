export const getPopularWritingDetail = async (id: string) => {
  try {
    const response = await fetch(`${process.env.API_URL}/post/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log("Fetched popular writing detail:", data);

    return data;
  } catch {
    console.error("Failed to fetch popular writing detail");

    return null;
  }
};

export const postIncreaseLikeCount = async (id: string) => {
  try {
    const response = await fetch(`/api/post/${id}/like`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    return data.like_count;
  } catch (error) {
    console.error("Failed to like the post", error);
    return null;
  }
};

export const postDecreaseLikeCount = async (id: string) => {
  try {
    const response = await fetch(`/api/post/${id}/like`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    return data.like_count;
  } catch (error) {
    console.error("Failed to unlike the post", error);
    return null;
  }
};
