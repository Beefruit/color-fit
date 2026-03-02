import { type FC } from "react";
import SidebarPresenter from "./presenter/Sidebar.presenter";
import SideBarMenuContainer from "../SideBarMenu/SideBarMenu.container";
import { getUserProfile } from "./api/userProfile.api";

const SidebarContainer: FC = async () => {
  let isLogin = false;

  try {
    const data = await getUserProfile();

    if (!data) {
      isLogin = false;
    } else {
      isLogin = true;
    }
  } catch (error) {
    isLogin = false;
    console.error("Error fetching user profile:", error);
  }

  return (
    <SidebarPresenter isLogin={isLogin}>
      <SideBarMenuContainer />
    </SidebarPresenter>
  );
};

export default SidebarContainer;
