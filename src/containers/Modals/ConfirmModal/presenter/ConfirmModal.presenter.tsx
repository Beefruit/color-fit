"use client";

import { type FC } from "react";
import styles from "./ConfirmModal.module.css";
import classNames from "classnames/bind";
import { Modal } from "@/components";
import { TriangleAlert } from "lucide-react";

const cx = classNames.bind(styles);

interface IConfirmModalPresenter {
  onConfirmBtn: () => void;
  isOpen: boolean;
  onCloseBtn: () => void;
  title?: string;
  message?: string;
  cancelText?: string;
  confirmText?: string;
  onCancel?: () => void;
}

const ConfirmModalPresenter: FC<IConfirmModalPresenter> = ({
  onConfirmBtn,
  isOpen,
  onCloseBtn,
  title,
  message,
  cancelText,
  confirmText,
  onCancel,
}) => {
  return (
    <Modal onCloseBtn={onCloseBtn} isOpen={isOpen}>
      <div className={cx("confirm-modal")}>
        <div className={cx("alert-background")}>
          <TriangleAlert size={32} className={cx("alert-icon")} />
        </div>
        <div className={cx("confirm-text")}>
          <h2 className={cx("confirm-title")}>{title}</h2>
          <p className={cx("confirm-message")}>{message}</p>
        </div>
        <div className={cx("confirm-actions")}>
          <button
            type="button"
            className={cx("cancel-button")}
            onClick={onCancel}
          >
            {cancelText}
          </button>
          <button
            type="button"
            className={cx("confirm-button")}
            onClick={onConfirmBtn}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmModalPresenter;
