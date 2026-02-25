import { type FC } from "react";
import styles from "./ProfileSetting.module.css";
import classNames from "classnames/bind";
import { Camera } from "lucide-react";

const cx = classNames.bind(styles);

interface IProfileSettingLeftPresenterProps {
  previewUrl: string;
  onChangeFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProfileSettingLeftPresenter: FC<IProfileSettingLeftPresenterProps> = ({
  previewUrl,
  onChangeFile,
}) => {
  return (
    <>
      <div className={cx("profile-left-container")}>
        <div className={cx("input-field")}>
          <input
            type="file"
            accept="image/*"
            id="profile-image"
            className={cx("file-input")}
            onChange={onChangeFile}
          />
          <div className={cx("avatar")}>
            {previewUrl ? (
              <img
                src={previewUrl}
                alt="profile preview"
                className={cx("avatar-img")}
              />
            ) : null}
          </div>
          <label htmlFor="profile-image" className={cx("upload-button")}>
            <Camera size={20} className={cx("camera-icon")} />
          </label>
        </div>
        {/* <h1 className={cx("nickname")}>예비 쿨톤 장인</h1>
        <p className={cx("personal-color")}>봄 웜톤</p> */}
        <p className={cx("profile-description")}>
          프로필 사진은 400x400px 사이즈를 권장합니다. JPG, PNG 파일만 업로드
          가능합니다.
        </p>
      </div>
    </>
  );
};

export default ProfileSettingLeftPresenter;
