"use client";

import { loginWithGoogleOauth } from "../api/loginForm.api";

interface IuseLoginFormReturn {
  onClickGoogleOauth: () => void;
}

export const useLoginForm = (): IuseLoginFormReturn => {
  /**
   * onClickGoogleOauth
   * @description 구글 OAuth 로그인 버튼 클릭 핸들러
   */
  const onClickGoogleOauth = () => {
    loginWithGoogleOauth();
  };

  return {
    onClickGoogleOauth,
  };
};
