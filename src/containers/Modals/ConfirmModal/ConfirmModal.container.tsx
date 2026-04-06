"use client";

import { type FC } from "react";
import ConfirmModalPresenter from "./presenter/ConfirmModal.presenter";
import { useConfirmModal } from "./hook/useConfirmModal";

const ConfirmModalContainer: FC = () => {
  const {
    onConfirmBtn,
    isOpen,
    onCloseBtn,
    title,
    message,
    cancelText,
    confirmText,
    onCancel,
  } = useConfirmModal();

  return (
    <ConfirmModalPresenter
      onConfirmBtn={onConfirmBtn}
      isOpen={isOpen}
      onCloseBtn={onCloseBtn}
      title={title}
      message={message}
      cancelText={cancelText}
      confirmText={confirmText}
      onCancel={onCancel}
    />
  );
};

export default ConfirmModalContainer;
