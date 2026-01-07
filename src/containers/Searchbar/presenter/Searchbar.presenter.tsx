"use client";

import { type FC } from "react";
import styles from "./Searchbar.module.css";
import classNames from "classnames/bind";
import { Search } from "lucide-react";

const cx = classNames.bind(styles);

interface ISearchBarPresenterProps {
  isFocused: boolean;
  onFocus: () => void;
  onBlur: () => void;
}

const SearchBarPresenter: FC<ISearchBarPresenterProps> = ({
  isFocused,
  onFocus,
  onBlur,
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
      />
    </div>
  );
};
export default SearchBarPresenter;
