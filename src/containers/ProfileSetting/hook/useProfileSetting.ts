"use client";

import { useState, useEffect } from "react";

export const useProfileSetting = () => {
  const [selectedTone, setSelectedTone] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [nickname, setNickname] = useState("");
  const [personalColorList, setPersonalColorList] = useState([
    {
      name: "봄 라이트",
      id: "spring-light",
      color: "#FBB7F3",
      isActive: false,
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
      name: "여름 소프트",
      id: "summer-soft",
      color: "#3A56E7",
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
      name: "가을 스트롱",
      id: "autumn-strong",
      color: "#B56F54",
      isActive: false,
    },
    {
      name: "가을 딥",
      id: "autumn-deep",
      color: "#85542F",
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

  const onSelectTone = (tone: string) => {
    setPersonalColorList((prevList) =>
      prevList.map((color) => ({
        ...color,
        isActive: color.id === tone,
      })),
    );
  };

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

  useEffect(() => {
    return () => URL.revokeObjectURL(previewUrl);
  }, [previewUrl]);

  const onChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 15) {
      e.target.value = e.target.value.slice(0, 15);
    }
    setNickname(e.target.value);
  };

  return {
    nickname,
    selectedTone,
    onSelectTone,
    previewUrl,
    onChangeFile,
    onChangeNickname,
    personalColorList,
  };
};
