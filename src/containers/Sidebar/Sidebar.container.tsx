import { type FC } from "react";
import SidebarPresenter from "./presenter/Sidebar.presenter";
import SideBarMenuContainer from "../SideBarMenu/SideBarMenu.container";

const SidebarContainer: FC = () => {
  return (
    <SidebarPresenter>
      <SideBarMenuContainer />
    </SidebarPresenter>
  );
};

export default SidebarContainer;
