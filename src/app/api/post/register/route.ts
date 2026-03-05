import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

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

  // 2. 요청 바디 파싱
  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json(
      { error: "올바른 JSON 형식이 아닙니다." },
      { status: 400 },
    );
  }

  const { title, content, imageUrls } = body;

  if (!title || typeof title !== "string" || title.trim() === "") {
    return NextResponse.json({ error: "title은 필수입니다." }, { status: 400 });
  }

  // 3. community_posts 삽입
  const { data, error } = await supabase
    .from("community_posts")
    .insert({
      user_id: user.id,
      title: title.trim(),
      content: content ?? null,
      image_urls: Array.isArray(imageUrls) ? imageUrls : [],
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
