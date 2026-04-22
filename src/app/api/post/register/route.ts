import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

const POST_IMAGES_BUCKET =
  process.env.SUPABASE_POST_IMAGES_BUCKET ?? "post_images";

export const POST = async (request: Request) => {
  const supabase = await createClient();

  // 1. 로그인 유저 확인
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json(
      { error: "로그인이 필요합니다." },
      { status: 401 },
    );
  }

  // 2. form-data 파싱
  const formData = await request.formData().catch(() => null);

  if (!formData) {
    return NextResponse.json(
      { error: "올바른 form-data 형식이 아닙니다." },
      { status: 400 },
    );
  }

  const title = formData.get("title");
  const content = formData.get("content");
  const imageFiles = formData
    .getAll("images")
    .filter((value): value is File => value instanceof File && value.size > 0);

  if (!title || typeof title !== "string" || title.trim() === "") {
    return NextResponse.json({ error: "title은 필수입니다." }, { status: 400 });
  }

  const imageUrls: string[] = [];

  for (const imageFile of imageFiles) {
    const imageExt = imageFile.name.split(".").pop() ?? "jpg";
    const imageName = `${user.id}/${Date.now()}-${crypto.randomUUID()}.${imageExt}`;

    const { error: uploadError } = await supabase.storage
      .from(POST_IMAGES_BUCKET)
      .upload(imageName, imageFile, {
        cacheControl: "3600",
        upsert: false,
        contentType: imageFile.type || undefined,
      });

    if (uploadError) {
      return NextResponse.json({ error: uploadError.message }, { status: 500 });
    }

    const { data: publicUrlData } = supabase.storage
      .from(POST_IMAGES_BUCKET)
      .getPublicUrl(imageName);

    imageUrls.push(publicUrlData.publicUrl);
  }

  // 3. community_posts 삽입
  const { data, error } = await supabase
    .from("community_posts")
    .insert({
      user_id: user.id,
      title: title.trim(),
      content: typeof content === "string" ? content : null,
      image_urls: imageUrls,
      like_count: 0,
      comment_count: 0,
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data }, { status: 201 });
};
