"use client";

import { type FC } from "react";
import CommunityPresenter from "./presenter/Community.presenter";
import { useCommunity } from "./hook/useCommunity";

const CommunityContainer: FC = () => {
  const {
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
  } = useCommunity();

  return (
    <CommunityPresenter
      CATEGORY_OPTIONS={CATEGORY_OPTIONS}
      selectedCategory={selectedCategory}
      onSelectCategory={onSelectCategory}
      onSelectTag={onSelectTag}
      onRemoveTag={onRemoveTag}
      selectedTagList={selectedTagList}
      onClickBack={onClickBack}
      tagValue={tagValue}
      onChangeTagValue={onChangeTagValue}
      onClickAddTag={onClickAddTag}
    />
  );
};

export default CommunityContainer;
