export const getUserProfile = async () => {
  const response = await fetch(`${process.env.API_URL}/profile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch user profile");
  }

  const data = await response.json();

  return data;
};
