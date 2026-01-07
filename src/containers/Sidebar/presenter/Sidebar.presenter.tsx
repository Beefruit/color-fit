import { type FC } from "react";
import styles from "./Sidebar.module.css";
import classNames from "classnames/bind";
import ProfilePresenter from "./Profile.presenter";
import { House, MessageCircle } from "lucide-react";

const cx = classNames.bind(styles);

const SidebarPresenter: FC = () => {
  return (
    <div className={cx("sidebar")}>
      <ProfilePresenter />
      <div className={cx("menu")}>
        <ul className={cx("menu-list")}>
          <li className={cx("menu-item", "active")}>
            <House size={15} />홈
          </li>
          <li className={cx("menu-item", "theme", "spring", "active")}>봄</li>
          <li className={cx("menu-item", "theme", "summer", "active")}>여름</li>
          <li className={cx("menu-item", "theme", "autumn", "active")}>가을</li>
          <li className={cx("menu-item", "theme", "winter", "active")}>겨울</li>
          <li className={cx("menu-item")}>
            <MessageCircle size={15} />
            커뮤니티
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarPresenter;
