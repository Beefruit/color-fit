import { type FC } from "react";
import styles from "./Community.module.css";
import classNames from "classnames/bind";
import { ArrowLeft, Image, Plus } from "lucide-react";

const cx = classNames.bind(styles);

const CommunityPresenter: FC = () => {
  return (
    <div className={cx("community")}>
      <div className={cx("community-header")}>
        <div className={cx("left")}>
          <div className={cx("community-header-icon")}>
            <ArrowLeft size={20} className={cx("arrow-icon")} />
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
          <h2 className={cx("category-label")}>
            카테고리<span className={cx("essential")}>*</span>
          </h2>
          <div className={cx("category-options")}>
            <button type="button" className={cx("category-option")}>
              질문
            </button>
            <button type="button" className={cx("category-option")}>
              팁&노하우
            </button>
            <button type="button" className={cx("category-option")}>
              FOTD
            </button>
            <button type="button" className={cx("category-option")}>
              제품리뷰
            </button>
            <button type="button" className={cx("category-option")}>
              자유
            </button>
          </div>
        </div>
        <div className={cx("title-container")}>
          <h2 className={cx("title-label")}>
            제목
            <span className={cx("essential")}>*</span>
          </h2>
          <input
            type="text"
            className={cx("title-input")}
            placeholder="글 제목을 입력해주세요."
          />
        </div>
        <div className={cx("content-container")}>
          <h2 className={cx("content-label")}>
            내용
            <span className={cx("essential")}>*</span>
          </h2>
          <textarea
            className={cx("content-textarea")}
            placeholder={`내용을 입력하세요

• 퍼스널 컬러와 관련된 내용을 자유롭게 공유해주세요
• 서로 존중하는 커뮤니티 문화를 만들어요
• 제품 리뷰는 솔직하고 상세하게 작성해주세요`}
          />
        </div>
        <div className={cx("image-upload-container")}>
          <h2 className={cx("image-upload-label")}>이미지 첨부</h2>
          <div className={cx("image-upload-section")}>
            <input
              type="file"
              id="image-upload"
              className={cx("image-upload-input")}
              accept="image/*"
              multiple
            />
            <label
              htmlFor="image-upload"
              className={cx("image-upload-instructions")}
            >
              <Image size={24} className={cx("image-icon")} />
              이미지를 첨부하려면 클릭하거나 드래그하세요.
            </label>
          </div>
        </div>
        <div className={cx("tag-container")}>
          <h2 className={cx("tag-label")}>태그</h2>
          <div className={cx("tag-form")}>
            <input
              type="text"
              className={cx("tag-input")}
              placeholder="태그를 입력하세요. (예: #겨울쿨톤, #메이크업)"
            />
            <button type="button" className={cx("add-tag-button")}>
              <Plus size={20} className={cx("add-icon")} />
            </button>
          </div>
        </div>
        <div className={cx("personal-color-tag-container")}>
          <h2 className={cx("personal-color-tag-label")}>퍼스널 컬러 태그</h2>
          <div className={cx("personal-color-tag-options")}>
            <button type="button" className={cx("personal-color-tag-option")}>
              봄 라이트
            </button>
            <button type="button" className={cx("personal-color-tag-option")}>
              봄 브라이트
            </button>
            <button type="button" className={cx("personal-color-tag-option")}>
              여름 라이트
            </button>
            <button type="button" className={cx("personal-color-tag-option")}>
              여름 뮤트
            </button>
            <button type="button" className={cx("personal-color-tag-option")}>
              가을 뮤트
            </button>
            <button type="button" className={cx("personal-color-tag-option")}>
              가을 딥
            </button>
            <button type="button" className={cx("personal-color-tag-option")}>
              겨울 브라이트
            </button>
            <button type="button" className={cx("personal-color-tag-option")}>
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
