import { type NextRequest, NextResponse } from "next/server";
import { updateSession } from "@/utils/supabase/proxy";
import { createClient } from "@/utils/supabase/server";

export async function proxy(request: NextRequest) {
  // 1. 유저의 인증 세션을 업데이트합니다. (쿠키 갱신)
  // 이 단계에서 세션 정보를 담은 response 객체가 생성됩니다.
  const response = await updateSession(request);

  // 2. 서버 사이드 클라이언트를 생성하여 현재 유저 상태를 확인합니다.
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // 3. 경로 제어 로직
  const { pathname } = request.nextUrl;

  // 보호하고 싶은 경로들을 정의합니다.
  // 특히 'profile-setting'은 가입 후 반드시 거쳐야 하므로 보호 대상에 포함합니다.
  const isProtectedRoute = pathname.startsWith("/profile-setting");

  const isLoginPage = pathname.startsWith("/login");

  // [Case 1] 로그인이 안 된 유저가 보호된 페이지에 접근할 때
  if (!user && isProtectedRoute) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    // 로그인 후 다시 원래 페이지로 돌아올 수 있게 쿼리 파라미터를 추가합니다.
    url.searchParams.set("next", pathname);
    return NextResponse.redirect(url);
  }

  // [Case 2] 이미 로그인한 유저가 로그인 페이지에 접근할 때
  if (user && isLoginPage) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // 4. 모든 검사를 통과하면 업데이트된 세션 응답을 반환합니다.
  return response;
}

export const config = {
  matcher: [
    /*
     * 아래 경로를 제외한 모든 요청에서 미들웨어 실행:
     * - _next/static (정적 파일)
     * - _next/image (이미지 최적화 파일)
     * - favicon.ico (파비콘)
     * - 이미지 파일들 (svg, png 등)
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
