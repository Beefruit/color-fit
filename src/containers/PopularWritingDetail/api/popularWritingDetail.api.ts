export const getPopularWritingDetail = async (id: string) => {
  try {
    const response = await fetch(`${process.env.API_URL}/post/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    return data;
  } catch {
    console.error("Failed to fetch popular writing detail");

    return null;
  }
};
