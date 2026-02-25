"use client";

import { type FC } from "react";
import { useProfileSetting } from "./hook/useProfileSetting";
import ProfileSettingPresenter from "./presenter/ProfileSetting.presenter";

const ProfileSettingContainer: FC = () => {
  const {
    onSelectTone,
    previewUrl,
    onChangeFile,
    onChangeNickname,
    nickname,
    personalColorList,
    onSubmitProfileSetting,
    errorMessage,
    isSubmitting,
  } = useProfileSetting();
  return (
    <ProfileSettingPresenter
      onSelectTone={onSelectTone}
      previewUrl={previewUrl}
      onChangeFile={onChangeFile}
      onChangeNickname={onChangeNickname}
      nickname={nickname}
      personalColorList={personalColorList}
      onSubmitProfileSetting={onSubmitProfileSetting}
      errorMessage={errorMessage}
      isSubmitting={isSubmitting}
    />
  );
};

export default ProfileSettingContainer;
