"use client";

import { type FC, useEffect } from "react";
import { useUserStore } from "@/store/user.store";
import { getUserProfile } from "@/apis/user.client";

interface IUserProviderProps {
  children: React.ReactNode;
}

const UserProvider: FC<IUserProviderProps> = ({ children }) => {
  const { setUserProfile, setIsLogin } = useUserStore();

  useEffect(() => {
    (async () => {
      try {
        const userProfile = await getUserProfile();

        if (userProfile) {
          setUserProfile(userProfile);
          setIsLogin(true);
        } else {
          setUserProfile(null);
          setIsLogin(false);
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setUserProfile(null);
        setIsLogin(false);
      }
    })();
  }, []);

  return <>{children}</>;
};

export default UserProvider;
