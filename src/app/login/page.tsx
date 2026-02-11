import { type FC } from "react";
import styles from "./page.module.css";
import classNames from "classnames/bind";
import LoginFormContainer from "@/containers/LoginForm/LoginForm.container";

const cx = classNames.bind(styles);

const LoginPage: FC = () => {
  return (
    <div className={cx("login-container")}>
      <div className={cx("left-container")}>
        <div className={cx("left-container__header")}>
          <h2 className={cx("title")}>당신만의 퍼스널 컬러를 찾아보세요</h2>
          <p className={cx("subtitle")}>
            컬러핏과 함께
            <br />더 아름다운 나를 발견하는 여정
          </p>
        </div>
        <div className={cx("cta-banner")}>
          <div className={cx("cta-banner__membership")}>
            <div className={cx("cta-banner__avatars")}>
              <div className={cx("avatar")}></div>
              <div className={cx("avatar")}></div>
              <div className={cx("avatar")}></div>
            </div>
            <p className={cx("members")}>+2.5 members</p>
          </div>
          <p className={cx("description")}>
            이미 많은 분들이 자신의 인생 컬러를 찾았어요.
            <br /> 지금 바로 시작해보세요!
          </p>
        </div>
      </div>
      <div className={cx("right-container")}>
        <LoginFormContainer />
      </div>
    </div>
  );
};

export default LoginPage;
