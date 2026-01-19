"use client";

import { useState } from "react";

export const useSearchbar = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onChangeSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return {
    isFocused,
    onFocus,
    onBlur,
    searchValue,
    onChangeSearchValue,
  };
};
