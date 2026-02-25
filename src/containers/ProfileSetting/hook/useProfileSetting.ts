"use client";

import { useState, useEffect } from "react";
import { postSetProfileSetting } from "../api/profileSetting.api";
import { useRouter } from "next/navigation";
import { validateProfileSetting } from "../domain";

export const useProfileSetting = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [nickname, setNickname] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [personalColorList, setPersonalColorList] = useState([
    {
      name: "봄 라이트",
      id: "spring-light",
      color: "#FBB7F3",
      isActive: true,
    },
    {
      name: "봄 브라이트",
      id: "spring-bright",
      color: "#FF5FFF",
      isActive: false,
    },
    {
      name: "여름 라이트",
      id: "summer-light",
      color: "#B4C7E7",
      isActive: false,
    },
    {
      name: "여름 뮤트",
      id: "summer-mute",
      color: "#93ACF2",
      isActive: false,
    },
    {
      name: "가을 뮤트",
      id: "autumn-mute",
      color: "#C68C52",
      isActive: false,
    },
    {
      name: "가을 딥",
      id: "autumn-deep",
      color: "#85542F",
      isActive: false,
    },
    {
      name: "겨울 페일",
      id: "winter-pale",
      color: "#efd9f0",
      isActive: false,
    },
    {
      name: "겨울 브라이트",
      id: "winter-bright",
      color: "#CB1FCF",
      isActive: false,
    },
    {
      name: "겨울 딥",
      id: "winter-deep",
      color: "#71438D",
      isActive: false,
    },
  ]);

  /**
   * onSelectTone
   * @description 퍼스널 컬러 선택 시 해당 컬러의 isActive를 true로 변경하고 나머지는 false로 변경하는 함수
   * @param tone 선택한 퍼스널 컬러의 id
   * @return void
   */

  const onSelectTone = (tone: string) => {
    setPersonalColorList((prevList) =>
      prevList.map((color) => ({
        ...color,
        isActive: color.id === tone,
      })),
    );
  };

  /**
   * onChangeFile
   * @description 파일 선택 시 미리보기 URL을 생성하고 file 상태에 선택한 파일을 저장하는 함수
   * @param e React.ChangeEvent<HTMLInputElement>
   * @return void
   */

  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];

    if (!selected) {
      setPreviewUrl("");
      return;
    }

    if (!selected.type.startsWith("image/")) return;

    const url = URL.createObjectURL(selected);

    setPreviewUrl(url);
    setFile(selected);
  };

  /**
   * onChangeNickname
   * @description 닉네임 입력 시 15자 이상 입력되지 않도록 제한하는 함수
   * @param e React.ChangeEvent<HTMLInputElement>
   * @return void
   */

  const onChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 15) {
      e.target.value = e.target.value.slice(0, 15);
    }

    setNickname(e.target.value);

    if (e.target.value.length > 0) {
      setErrorMessage("");
    }
  };

  /**
   * onSubmitProfileSetting
   * @description 프로필 설정 제출 시 선택된 퍼스널 컬러와 닉네임, 파일을 FormData로 묶어서 API 요청을 보내는 함수
   * @return void
   */

  const onSubmitProfileSetting = async () => {
    try {
      const validationError = validateProfileSetting(nickname);

      if (validationError) {
        setErrorMessage(validationError);
        return;
      }

      setIsSubmitting(true);

      await postSetProfileSetting({
        nickname,
        image: file,
        personalColor: personalColorList.find((color) => color.isActive) || {
          name: "",
          id: "",
          color: "",
        },
      });

      alert("프로필 설정이 저장되었습니다.");
      router.replace("/");
    } catch (error) {
      console.error(error);
      alert("프로필 설정 저장 중 오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    return () => URL.revokeObjectURL(previewUrl);
  }, [previewUrl]);

  return {
    nickname,
    onSelectTone,
    previewUrl,
    onChangeFile,
    onChangeNickname,
    personalColorList,
    onSubmitProfileSetting,
    errorMessage,
    isSubmitting,
  };
};
