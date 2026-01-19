"use client";

import { type FC } from "react";
import SidebarPresenter from "./presenter/Sidebar.presenter";
import { useSidebar } from "./hook/useSidebar";

const SidebarContainer: FC = () => {
  const { mounted, theme, onClickThemeBtn } = useSidebar();

  if (!mounted) return null;

  return <SidebarPresenter theme={theme} onClickThemeBtn={onClickThemeBtn} />;
};

export default SidebarContainer;
