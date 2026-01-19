"use client";

import { type FC } from "react";
import SearchBarPresenter from "./presenter/Searchbar.presenter";
import { useSearchbar } from "./hook/useSearchbar";

const SearchBarContainer: FC = () => {
  const { isFocused, onFocus, onBlur, searchValue, onChangeSearchValue } =
    useSearchbar();

  return (
    <SearchBarPresenter
      isFocused={isFocused}
      onFocus={onFocus}
      onBlur={onBlur}
      searchValue={searchValue}
      onChangeSearchValue={onChangeSearchValue}
    />
  );
};

export default SearchBarContainer;
