"use client";

import { type FC } from "react";
import styles from "./ProfileSetting.module.css";
import classNames from "classnames/bind";
import ProfileSettingLeftPresenter from "./ProfileSettingLeft.presenter";
import ProfileSettingRightPresenter from "./ProfileSettingRight.presenter";

const cx = classNames.bind(styles);

interface IProfileSettingPresenterProps {
  onSelectTone: (tone: string) => void;
  previewUrl: string;
  onChangeFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
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

const ProfileSettingPresenter: FC<IProfileSettingPresenterProps> = ({
  onSelectTone,
  previewUrl,
  onChangeFile,
  onChangeNickname,
  nickname,
  personalColorList,
  onSubmitProfileSetting,
  errorMessage,
  isSubmitting,
}) => {
  return (
    <div className={cx("profile-setting-container")}>
      <div className={cx("left-container")}>
        <ProfileSettingLeftPresenter
          previewUrl={previewUrl}
          onChangeFile={onChangeFile}
        />
      </div>
      <div className={cx("right-container")}>
        <ProfileSettingRightPresenter
          onSelectTone={onSelectTone}
          onChangeNickname={onChangeNickname}
          nickname={nickname}
          personalColorList={personalColorList}
          onSubmitProfileSetting={onSubmitProfileSetting}
          errorMessage={errorMessage}
          isSubmitting={isSubmitting}
        />
      </div>
    </div>
  );
};

export default ProfileSettingPresenter;
