"use";

import { type FC } from "react";
import styles from "./ProfileSetting.module.css";
import classNames from "classnames/bind";
import { UserRound, Save } from "lucide-react";

const cx = classNames.bind(styles);

interface IProfileSettingPresenterProps {
  onSelectTone: (tone: string) => void;
  onChangeNickname: (e: React.ChangeEvent<HTMLInputElement>) => void;
  nickname: string;
  personalColorList: {
    name: string;
    id: string;
    color: string;
    isActive: boolean;
  }[];
  onSubmitProfileSetting: () => void;
  errorMessage: string;
  isSubmitting: boolean;
}

const ProfileSettingRightPresenter: FC<IProfileSettingPresenterProps> = ({
  onSelectTone,
  onChangeNickname,
  nickname,
  personalColorList,
  onSubmitProfileSetting,
  errorMessage,
  isSubmitting,
}) => {
  return (
    <div className={cx("profile-right-container")}>
      <div className={cx("user")}>
        <UserRound size={16} className={cx("user-icon")} />
        <h2 className={cx("user-nickname")}>닉네임</h2>
      </div>
      <div className={cx("nickname-input-container")}>
        <input
          type="text"
          placeholder="닉네임을 입력하세요"
          className={cx("nickname-input")}
          onChange={onChangeNickname}
          value={nickname}
        />
        <p className={cx("nickname-count")}>{nickname.length}/15</p>
      </div>
      {errorMessage && <p className={cx("error-message")}>{errorMessage}</p>}
      <p className={cx("description")}>커뮤니티 활동 시 보여질 닉네임입니다.</p>
      <span className={cx("divider")} />
      <div className={cx("personal-color-chart")}>
        <div className={cx("personal-color-header")}>
          <div className={cx("personal-color-icon")} />
          <h2 className={cx("personal-color-title")}>퍼스널 컬러</h2>
        </div>
        <div className={cx("personal-color-options")}>
          {personalColorList.map((color) => (
            <button
              key={color.id}
              type="button"
              className={cx("color-option", {
                selected: color.isActive,
              })}
              onClick={() => onSelectTone(color.id)}
            >
              <div
                className={cx("color-texture", color.id)}
                style={{ backgroundColor: color.color }}
              />
              <div className={cx("color-info")}>
                <h2 className={cx("color-text")}>{color.name}</h2>
                <p className={cx("color-check")}>
                  {color.isActive ? "선택됨" : "선택하기"}
                </p>
              </div>
            </button>
          ))}
        </div>
        <p className={cx("description")}>
          자신의 퍼스널 컬러를 선택하면 맞춤형 콘텐츠를 추천해드립니다.
        </p>
      </div>
      <div className={cx("save-button-container")}>
        <button
          type="button"
          disabled={isSubmitting}
          className={cx("save-button", { disabled: isSubmitting })}
          onClick={onSubmitProfileSetting}
        >
          <Save size={16} className={cx("save-icon")} />
          {isSubmitting ? "저장 중..." : "저장하기"}
        </button>
      </div>
    </div>
  );
};

export default ProfileSettingRightPresenter;
