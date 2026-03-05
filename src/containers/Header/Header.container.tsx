import { type FC } from "react";
import HeaderPresenter from "./presenter/Header.presenter";
import { getUserProfile } from "./api/header.api";

const HeaderContainer: FC = async () => {
  const userProfile = await getUserProfile();

  const vProps = {
    nickname: userProfile?.nickname || "",
    avatar_url: userProfile?.avatar_url || "",
  };

  return <HeaderPresenter {...vProps} />;
};

export default HeaderContainer;
