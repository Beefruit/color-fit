import { type FC } from "react";
import SidebarPresenter from "./presenter/Sidebar.presenter";
import SideBarMenuContainer from "../SideBarMenu/SideBarMenu.container";
import { getUserProfile } from "./api/userProfile.api";
const SidebarContainer: FC = async () => {
  let isLogin = false;
  let userData = null;

  try {
    const user = await getUserProfile();

    if (user) {
      isLogin = true;
      userData = user.profile;
    }
  } catch (error) {
    isLogin = false;
    console.error("Error fetching user profile:", error);
  }

  return (
    <SidebarPresenter userData={userData} isLogin={isLogin}>
      <SideBarMenuContainer />
    </SidebarPresenter>
  );
};

export default SidebarContainer;
