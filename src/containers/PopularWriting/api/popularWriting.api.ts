export const getPopularWritings = async () => {
  try {
    const response = await fetch(`${process.env.API_URL}/popular-writing`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    return data;
  } catch {
    console.error("Failed to fetch popular writings");

    return null;
  }
};
