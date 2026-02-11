import { type FC } from "react";
import styles from "./LoginForm.module.css";
import classNames from "classnames/bind";
import Link from "next/link";
import Image from "next/image";
import { Mail, Lock, Eye } from "lucide-react";

const cx = classNames.bind(styles);

const LoginFormPresenter: FC = () => {
  return (
    <div className={cx("login-form-container")}>
      <h2 className={cx("form-title")}>환영합니다!</h2>
      <p className={cx("form-subtitle")}>
        오늘도 당신의 아름다움을 기록하세요.
      </p>
      <form className={cx("login-form")}>
        <label htmlFor="email" className={cx("form-label")}>
          이메일
        </label>
        <div className={cx("form-field")}>
          <Mail strokeWidth={1} size={20} className={cx("form-icon")} />
          <input
            type="email"
            id="email"
            placeholder="example@email.com"
            className={cx("form-input")}
          />
        </div>
        <label htmlFor="password" className={cx("form-label")}>
          비밀번호
        </label>
        <div className={cx("form-field")}>
          <Lock strokeWidth={1} size={20} className={cx("form-icon")} />
          <input type="password" id="password" className={cx("form-input")} />
          <Eye
            strokeWidth={1}
            size={20}
            className={cx("form-icon", "form-icon--right")}
          />
        </div>
        <button type="submit" className={cx("submit-button")}>
          로그인
        </button>
      </form>
      <div className={cx("divider")}>
        <span className={cx("line")}></span>
        <span className={cx("text")}>또는</span>
        <span className={cx("line")}></span>
      </div>
      <button className={cx("oauth-button")}>
        <span className={cx("oauth-content")}>
          <Image
            src="/images/google-icon.svg"
            alt="Google"
            width={18}
            height={18}
          />
          Google로 계속하기
        </span>
      </button>
      <p className={cx("signup-text")}>
        계정이 없으신가요?
        <Link href="/signup" className={cx("signup-link")}>
          회원가입
        </Link>
      </p>
    </div>
  );
};

export default LoginFormPresenter;
