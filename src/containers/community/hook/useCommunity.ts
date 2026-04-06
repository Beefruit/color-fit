"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export const useCommunity = () => {
  const CATEGORY_OPTIONS = [
    { label: "질문", value: "question" },
    { label: "팁&노하우", value: "tip" },
    { label: "FOTD", value: "fotd" },
    { label: "제품리뷰", value: "review" },
    { label: "자유", value: "free" },
  ];
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTagList, setSelectedTagList] = useState<string[]>([]);
  const [tagValue, setTagValue] = useState("");

  const onClickBack = () => {
    router.back();
  };

  const onSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const onSelectTag = (tag: string) => {
    if (!selectedTagList.includes(tag)) {
      setSelectedTagList([...selectedTagList, tag]);
    }
  };

  const onRemoveTag = (tag: string) => {
    setSelectedTagList(selectedTagList.filter((t) => t !== tag));
  };

  const onChangeTagValue = (value: string) => {
    setTagValue(value);
  };

  const onClickAddTag = () => {
    if (tagValue.trim() && !selectedTagList.includes(tagValue)) {
      setSelectedTagList([...selectedTagList, tagValue]);
    }

    setTagValue("");
  };

  return {
    CATEGORY_OPTIONS,
    selectedCategory,
    onSelectCategory,
    onSelectTag,
    onRemoveTag,
    selectedTagList,
    onClickBack,
    tagValue,
    onChangeTagValue,
    onClickAddTag,
  };
};
