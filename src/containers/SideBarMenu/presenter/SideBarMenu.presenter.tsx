import { type FC } from "react";
import styles from "./SideBarMenu.module.css";
import classNames from "classnames/bind";
import { House, MessageCircle } from "lucide-react";

const cx = classNames.bind(styles);

interface ISideBarMenuPresenterProps {
  theme?: string;
  onClickThemeBtn: (theme: string) => void;
}

const SideBarMenuPresenter: FC<ISideBarMenuPresenterProps> = ({
  theme,
  onClickThemeBtn,
}) => {
  return (
    <div className={cx("menu")}>
      <ul className={cx("menu-list")}>
        <li className={cx("menu-item", "active")}>
          <House size={15} />홈
        </li>
        <li
          className={cx(
            "menu-item",
            "theme",
            "spring",
            theme === "spring" && "active",
          )}
          onClick={() => onClickThemeBtn("spring")}
        >
          봄
        </li>
        <li
          className={cx(
            "menu-item",
            "theme",
            "summer",
            theme === "summer" && "active",
          )}
          onClick={() => onClickThemeBtn("summer")}
        >
          여름
        </li>
        <li
          className={cx(
            "menu-item",
            "theme",
            "autumn",
            theme === "autumn" && "active",
          )}
          onClick={() => onClickThemeBtn("autumn")}
        >
          가을
        </li>
        <li
          className={cx(
            "menu-item",
            "theme",
            "winter",
            theme === "winter" && "active",
          )}
          onClick={() => onClickThemeBtn("winter")}
        >
          겨울
        </li>
        <li className={cx("menu-item")}>
          <MessageCircle size={15} />
          커뮤니티
        </li>
      </ul>
    </div>
  );
};

export default SideBarMenuPresenter;
