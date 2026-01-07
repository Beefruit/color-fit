"use client";

import { type FC } from "react";
import SearchBarPresenter from "./presenter/Searchbar.presenter";
import { useSearchbar } from "./hook/useSearchbar";

const SearchBarContainer: FC = () => {
  const { isFocused, onFocus, onBlur } = useSearchbar();

  return (
    <SearchBarPresenter
      isFocused={isFocused}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

export default SearchBarContainer;
