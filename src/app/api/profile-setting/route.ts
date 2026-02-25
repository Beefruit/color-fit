import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export const POST = async (request: Request) => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { nickname, image, personalColor } = await request
    .formData()
    .then((formData) => ({
      nickname: formData.get("nickname") as string,
      image: formData.get("image") as File | null,
      personalColor: JSON.parse(formData.get("personalColor") as string),
    }));

  let imageUrl = null;

  if (image) {
    const imageExt = image.name.split(".").pop();
    const imageName = `${user.id}-${Date.now()}.${imageExt}`;

    const { data, error } = await supabase.storage
      .from("avatars")
      .upload(imageName, image);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    imageUrl = data?.path || null;
  }

  console.log("Received profile setting data:", {
    nickname,
    image,
    personalColor,
  });

  const { data, error } = await supabase.from("profiles").upsert({
    nickname,
    id: user.id,
    avatar_url: imageUrl,
    personal_color_tag: personalColor,
  });

  if (error) {
    console.log("Error uploading image:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ profile: data }, { status: 200 });
};
