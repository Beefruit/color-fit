"use client";

import { type FC } from "react";
import { useSideBarMenu } from "./hook/useSideBarMenu";
import SideBarMenuPresenter from "./presenter/SideBarMenu.presenter";

const SideBarMenuContainer: FC = () => {
  const { mounted, theme, onClickThemeBtn } = useSideBarMenu();

  if (!mounted) return null;

  return (
    <SideBarMenuPresenter theme={theme} onClickThemeBtn={onClickThemeBtn} />
  );
};

export default SideBarMenuContainer;
