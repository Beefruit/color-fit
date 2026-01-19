"use client";

import { useTheme } from "next-themes";
import { useMounted } from "@/hooks/useMounted";

export const useSidebar = () => {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();

  const onClickThemeBtn = (themeName: string) => {
    setTheme(themeName);
  };

  return { theme, onClickThemeBtn, mounted };
};
