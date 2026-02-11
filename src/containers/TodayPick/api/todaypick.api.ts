export const getTodayPicks = async () => {
  try {
    const response = await fetch(`${process.env.API_URL}/today-pick`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    return data;
  } catch {
    console.error("Failed to fetch today picks");

    return null;
  }
};
