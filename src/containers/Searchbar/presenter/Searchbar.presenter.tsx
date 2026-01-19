"use client";

import { type FC } from "react";
import styles from "./Searchbar.module.css";
import classNames from "classnames/bind";
import SearchResultPresenter from "./SearchResult.presenter";
import { Search } from "lucide-react";

const cx = classNames.bind(styles);

interface ISearchBarPresenterProps {
  isFocused: boolean;
  onFocus: () => void;
  onBlur: () => void;
  searchValue: string;
  onChangeSearchValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBarPresenter: FC<ISearchBarPresenterProps> = ({
  isFocused,
  onFocus,
  onBlur,
  searchValue,
  onChangeSearchValue,
}) => {
  return (
    <div
      className={cx(
        "search-bar",
        { "search-bar--focused": isFocused },
        "winter"
      )}
    >
      <Search className={cx("search-icon")} size={20} />
      <input
        type="text"
        onFocus={onFocus}
        onBlur={onBlur}
        className={cx("search-input")}
        placeholder="화장품, 브랜드, 퍼스널컬러를 검색해보세요!"
        value={searchValue}
        onChange={onChangeSearchValue}
      />
      {isFocused && searchValue && (
        <SearchResultPresenter value={searchValue} />
      )}
    </div>
  );
};
export default SearchBarPresenter;
