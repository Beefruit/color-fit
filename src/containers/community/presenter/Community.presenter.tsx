"use client";

import { type FC } from "react";
import styles from "./Community.module.css";
import classNames from "classnames/bind";
import { ArrowLeft, Image as ImageIcon, Plus, X } from "lucide-react";
import Image from "next/image";

const cx = classNames.bind(styles);

interface CommunityPresenterProps {
  CATEGORY_OPTIONS: {
    value: string;
    label: string;
  }[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  onSelectTag: (tag: string) => void;
  onRemoveTag: (tag: string) => void;
  selectedTagList: string[];
  onClickBack: () => void;
  tagValue: string;
  onChangeTagValue: (value: string) => void;
  onClickAddTag: () => void;
  title: string;
  onChangeTitle: (value: string) => void;
  content: string;
  onChangeContent: (value: string) => void;
  imageList: File[];
  onChangeImageList: (files: File[]) => void;
  previewImageList: string[];
  onRemoveImage: (index: number) => void;
}

const CommunityPresenter: FC<CommunityPresenterProps> = ({
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
  onChangeImageList,
  previewImageList,
  onRemoveImage,
}) => {
  return (
    <div className={cx("community")}>
      <div className={cx("community-header")}>
        <div className={cx("left")}>
          <div className={cx("community-header-icon")}>
            <button
              type="button"
              className={cx("back-button")}
              onClick={onClickBack}
            >
              <ArrowLeft size={20} className={cx("arrow-icon")} />
            </button>
            <h2 className={cx("community-subtitle")}>돌아가기</h2>
          </div>
          <h2 className={cx("community-title")}>새 글 작성</h2>
        </div>
        <div className={cx("right")}>
          <button type="button" className={cx("cancel-button")}>
            취소
          </button>
          <button type="button" className={cx("submit-button")}>
            게시하기
          </button>
        </div>
      </div>
      <div className={cx("community-content")}>
        <div className={cx("category-container")}>
          <h2 className={cx("label")}>
            카테고리<span className={cx("essential")}>*</span>
          </h2>
          <div className={cx("category-options")}>
            {CATEGORY_OPTIONS.map((category) => (
              <button
                key={category.value}
                type="button"
                className={cx(
                  "category-option",
                  selectedCategory === category.value &&
                    `category-option--${category.value}`,
                )}
                onClick={() => onSelectCategory(category.value)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        <div className={cx("title-container")}>
          <h2 className={cx("label")}>
            제목
            <span className={cx("essential")}>*</span>
          </h2>
          <input
            type="text"
            className={cx("title-input")}
            placeholder="글 제목을 입력해주세요."
            value={title}
            onChange={(e) => onChangeTitle(e.target.value)}
          />
        </div>
        <div className={cx("content-container")}>
          <h2 className={cx("label")}>
            내용
            <span className={cx("essential")}>*</span>
          </h2>
          <textarea
            className={cx("content-textarea")}
            placeholder={`내용을 입력하세요

• 퍼스널 컬러와 관련된 내용을 자유롭게 공유해주세요
• 서로 존중하는 커뮤니티 문화를 만들어요
• 제품 리뷰는 솔직하고 상세하게 작성해주세요`}
            value={content}
            onChange={(e) => onChangeContent(e.target.value)}
          />
        </div>
        <div className={cx("image-upload-container")}>
          <h2 className={cx("label")}>이미지 첨부</h2>
          <div className={cx("image-upload-section")}>
            <label className={cx("image-upload-instructions")}>
              <ImageIcon size={24} className={cx("image-icon")} />
              이미지를 첨부하려면 클릭하거나 드래그하세요.
              <input
                type="file"
                className={cx("image-upload-input")}
                accept="image/*"
                multiple
                onChange={(e) => {
                  if (e.target.files) {
                    onChangeImageList(Array.from(e.target.files));
                  }
                }}
              />
            </label>
          </div>
          <div className={cx("image-preview-container")}>
            {previewImageList.map((previewUrl, index) => (
              <div key={index} className={cx("image-preview")}>
                <button
                  type="button"
                  className={cx("remove-image-button")}
                  onClick={() => onRemoveImage(index)}
                >
                  <X size={24} className={cx("remove-icon")} />
                </button>
                <Image
                  src={previewUrl}
                  alt="Preview"
                  width={100}
                  height={100}
                  className={cx("image-preview-img")}
                />
              </div>
            ))}
          </div>
        </div>
        <div className={cx("tag-container")}>
          <h2 className={cx("label")}>태그</h2>
          <div className={cx("tag-form")}>
            <input
              type="text"
              className={cx("tag-input")}
              value={tagValue}
              onChange={(e) => onChangeTagValue(e.target.value)}
              placeholder="태그를 입력하세요. (예: #겨울쿨톤, #메이크업)"
            />
            <button
              type="button"
              className={cx("add-tag-button")}
              onClick={onClickAddTag}
            >
              <Plus size={20} className={cx("add-icon")} />
            </button>
          </div>
          <div className={cx("tag-list")}>
            {selectedTagList.map((tag) => (
              <div key={tag} className={cx("tag-item")}>
                <span>#{tag}</span>
                <button
                  type="button"
                  className={cx("remove-tag-button")}
                  onClick={() => onRemoveTag(tag)}
                >
                  <X size={12} className={cx("remove-icon")} />
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className={cx("personal-color-tag-container")}>
          <h2 className={cx("label")}>퍼스널 컬러 태그</h2>
          <div className={cx("personal-color-tag-options")}>
            <button
              type="button"
              className={cx("personal-color-tag-option")}
              onClick={() => onSelectTag("봄 라이트")}
            >
              봄 라이트
            </button>
            <button
              type="button"
              className={cx("personal-color-tag-option")}
              onClick={() => onSelectTag("봄 브라이트")}
            >
              봄 브라이트
            </button>
            <button
              type="button"
              className={cx("personal-color-tag-option")}
              onClick={() => onSelectTag("여름 라이트")}
            >
              여름 라이트
            </button>
            <button
              type="button"
              className={cx("personal-color-tag-option")}
              onClick={() => onSelectTag("여름 뮤트")}
            >
              여름 뮤트
            </button>
            <button
              type="button"
              className={cx("personal-color-tag-option")}
              onClick={() => onSelectTag("가을 뮤트")}
            >
              가을 뮤트
            </button>
            <button
              type="button"
              className={cx("personal-color-tag-option")}
              onClick={() => onSelectTag("가을 딥")}
            >
              가을 딥
            </button>
            <button
              type="button"
              className={cx("personal-color-tag-option")}
              onClick={() => onSelectTag("겨울 브라이트")}
            >
              겨울 브라이트
            </button>
            <button
              type="button"
              className={cx("personal-color-tag-option")}
              onClick={() => onSelectTag("겨울 딥")}
            >
              겨울 딥
            </button>
          </div>
        </div>
        <div className={cx("writing-guide")}>
          <h2 className={cx("writing-guide-title")}>작성 가이드</h2>
          <ul className={cx("writing-guide-list")}>
            <li className={cx("writing-guide-item")}>
              제목과 내용, 카테고리는 필수 입력 항목입니다.
            </li>
            <li className={cx("writing-guide-item")}>
              이미지는 최대 10장까지 첨부할 수 있습니다.
            </li>
            <li className={cx("writing-guide-item")}>
              태그를 추가하면 다른 사용자가 게시글을 더 쉽게 찾을 수 있습니다.
            </li>
            <li className={cx("writing-guide-item")}>
              퍼스널 컬러 태그를 추가하면 같은 컬러 타입 사용자에게 더 많이
              노출됩니다.
            </li>
            <li className={cx("writing-guide-item")}>
              제품 리뷰는 사용 경험을 솔직하고 상세하게 작성해주세요.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CommunityPresenter;
