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
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageList, setImageList] = useState<File[]>([]);
  const [previewImageList, setPreviewImageList] = useState<string[]>([]);

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

  const onChangeTitle = (value: string) => {
    setTitle(value);
  };

  const onChangeContent = (value: string) => {
    setContent(value);
  };

  const onChangeImageList = (files: File[]) => {
    if (files.length === 0) return;

    if (files.length + imageList.length > 5) {
      alert("이미지는 최대 5개까지 업로드할 수 있습니다.");
      return;
    }

    const newImageList = Array.from(files);
    const newPreviewImageList = newImageList.map((file) =>
      URL.createObjectURL(file),
    );

    setPreviewImageList([...previewImageList, ...newPreviewImageList]);
    setImageList([...imageList, ...newImageList]);
  };

  const onRemoveImage = (index: number) => {
    setImageList(imageList.filter((_, i) => i !== index));
    setPreviewImageList(previewImageList.filter((_, i) => i !== index));
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
    title,
    onChangeTitle,
    content,
    onChangeContent,
    imageList,
    previewImageList,
    onChangeImageList,
    onRemoveImage,
  };
};
