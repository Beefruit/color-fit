"use client";

import { type FC } from "react";
import { useProfileSetting } from "./hook/useProfileSetting";
import ProfileSettingPresenter from "./presenter/ProfileSetting.presenter";

const ProfileSettingContainer: FC = () => {
  const {
    selectedTone,
    onSelectTone,
    previewUrl,
    onChangeFile,
    onChangeNickname,
    nickname,
    personalColorList,
  } = useProfileSetting();
  return (
    <ProfileSettingPresenter
      selectedTone={selectedTone}
      onSelectTone={onSelectTone}
      previewUrl={previewUrl}
      onChangeFile={onChangeFile}
      onChangeNickname={onChangeNickname}
      nickname={nickname}
      personalColorList={personalColorList}
    />
  );
};

export default ProfileSettingContainer;
