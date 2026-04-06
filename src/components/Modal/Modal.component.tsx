"use client";

import { type FC } from "react";

import styles from "./Modal.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface IModalprops {
  children: React.ReactNode;
  onCloseBtn: () => void;
  isOpen: boolean;
}

export const ModalComponent: FC<IModalprops> = ({
  children,
  onCloseBtn,
  isOpen,
}) => {
  return (
    isOpen && (
      <div className={cx("modal")}>
        <button type="button" className={cx("close-btn")} onClick={onCloseBtn}>
          <span className={cx("close-icon")} />
          <span className={cx("close-icon")} />
        </button>
        <div className={cx("modal-content")}>{children}</div>
      </div>
    )
  );
};
