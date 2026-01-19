import { type FC } from "react";
import styles from "./SearchResult.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface ISearchResultPresenterProps {
  value: string;
}

const SearchResultPresenter: FC<ISearchResultPresenterProps> = ({ value }) => {
  return (
    <div className={cx("search-result")}>
      <p className={cx("search-none")}>검색 결과가 없습니다.</p>

      <ul className={cx("search-list")}>
        <li className={cx("search-item")}>
          {value} <span className={cx("highlight")}>하이라이트</span>
        </li>
        <li className={cx("search-item")}>
          검색어 예시 <span className={cx("highlight")}>하이라이트</span>
        </li>
        <li className={cx("search-item")}>
          검색어 예시 <span className={cx("highlight")}>하이라이트</span>
        </li>
        <li className={cx("search-item")}>
          검색어 예시 <span className={cx("highlight")}>하이라이트</span>
        </li>
      </ul>
    </div>
  );
};

export default SearchResultPresenter;
