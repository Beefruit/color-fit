import { create } from "zustand";

interface IConfirmModalState {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;

  title: string;
  setTitle: (title: string) => void;

  message: string;
  setMessage: (message: string) => void;

  cancelText: string;
  setCancelText: (cancelText: string) => void;

  confirmText: string;
  setConfirmText: (confirmText: string) => void;

  onConfirm?: () => void;
  setOnConfirm: (onConfirm: () => void) => void;
  onCancel?: () => void;
  setOnCancel: (onCancel: () => void) => void;
}

export const useConfirmModalStore = create<IConfirmModalState>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen: boolean) => set({ isOpen }),

  title: "",
  setTitle: (title: string) => set({ title }),

  message: "",
  setMessage: (message: string) => set({ message }),

  cancelText: "취소",
  setCancelText: (cancelText: string) => set({ cancelText }),

  confirmText: "확인",
  setConfirmText: (confirmText: string) => set({ confirmText }),

  onConfirm: undefined,
  setOnConfirm: (onConfirm: () => void) => set({ onConfirm }),
  onCancel: undefined,
  setOnCancel: (onCancel: () => void) => set({ onCancel }),
}));
