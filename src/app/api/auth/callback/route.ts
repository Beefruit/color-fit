import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");

  if (code) {
    const supabase = await createClient();
    const { error: authError } =
      await supabase.auth.exchangeCodeForSession(code);

    if (!authError) {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        // [DB 연동] profiles 테이블에 해당 유저 ID가 있는지 확인
        const { data: profile } = await supabase
          .from("profiles")
          .select("id")
          .eq("id", user.id)
          .single();

        // 프로필 정보가 없다면 가입 단계로 판단 -> 프로필 설정 페이지로 이동
        if (!profile) {
          return NextResponse.redirect(`${origin}/profile-setting`);
        }

        // 이미 프로필이 있다면 메인 페이지로 이동
        return NextResponse.redirect(`${origin}/`);
      }
    }
  }

  return NextResponse.redirect(`${origin}/login?error=auth_failed`);
}
