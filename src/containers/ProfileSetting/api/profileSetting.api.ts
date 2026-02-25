export const postSetProfileSetting = async ({
  nickname,
  image,
  personalColor,
}: {
  nickname: string;
  image: File | null;
  personalColor: {
    name: string;
    id: string;
    color: string;
  };
}) => {
  try {
    const formData = new FormData();
    formData.append("nickname", nickname);
    formData.append("personalColor", JSON.stringify(personalColor));
    if (image) {
      formData.append("image", image);
    }

    const response = await fetch("/api/profile-setting", {
      method: "POST",
      body: formData,
    });

    return await response.json();
  } catch (error) {
    return error;
  }
};
