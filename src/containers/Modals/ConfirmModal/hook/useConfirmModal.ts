"use client";

import { useRouter } from "next/navigation";
import { useConfirmModalStore } from "@/store/confirmModal.store";

export const useConfirmModal = () => {
  const router = useRouter();
  const {
    isOpen,
    setIsOpen,
    title,
    message,
    cancelText,
    confirmText,
    onConfirm,
    onCancel,
  } = useConfirmModalStore();

  const onConfirmBtn = () => {
    onConfirm?.();
  };

  const onCloseBtn = () => {
    onCancel?.();
  };

  return {
    onConfirmBtn,
    isOpen,
    setIsOpen,
    title,
    message,
    cancelText,
    confirmText,
    onCancel,
    onCloseBtn,
  };
};
