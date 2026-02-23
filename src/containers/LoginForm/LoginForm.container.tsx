"use client";

import { type FC } from "react";
import LoginFormPresenter from "./presenter/LoginForm.presenter";
import { useLoginForm } from "./hook/useLoginForm";

const LoginFormContainer: FC = () => {
  const { onClickGoogleOauth } = useLoginForm();
  return <LoginFormPresenter onClickGoogleOauth={onClickGoogleOauth} />;
};

export default LoginFormContainer;
