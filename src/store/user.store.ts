import { create } from "zustand";
import { IUserProfile } from "@/types";

interface IUserState {
  userProfile: IUserProfile | null;
  setUserProfile: (userProfile: IUserProfile | null) => void;

  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
}

export const useUserStore = create<IUserState>((set) => ({
  userProfile: null,
  setUserProfile: (userProfile) => set({ userProfile }),
  isLogin: false,
  setIsLogin: (isLogin) => set({ isLogin }),
}));

// const useStore = create((set) => ({
//   count: 1,
//   inc: () => set((state) => ({ count: state.count + 1 })),
// }))
