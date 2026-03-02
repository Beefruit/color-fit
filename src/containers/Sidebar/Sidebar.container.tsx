import { type FC } from "react";
import SidebarPresenter from "./presenter/Sidebar.presenter";
import SideBarMenuContainer from "../SideBarMenu/SideBarMenu.container";
import { getUserProfile } from "./api/userProfile.api";

const SidebarContainer: FC = async () => {
  // let isLogin = false;

  try {
    const data = await getUserProfile();

    // isLogin = true;
  } catch (error) {
    // isLogin = false;

    console.error("Failed to fetch user profile:", error);
  }

  return (
    <SidebarPresenter isLogin={false}>
      <SideBarMenuContainer />
    </SidebarPresenter>
  );
};

export default SidebarContainer;
