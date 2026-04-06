export const getList = async () => {
  try {
    const response = await fetch(`${process.env.API_URL}/posts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch popular writings", error);

    return null;
  }
};
