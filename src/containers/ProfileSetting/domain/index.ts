export const validateProfileSetting = (nickname: string) => {
  if (!nickname) {
    return "닉네임을 입력해주세요.";
  }

  if (!nickname.match(/^[a-zA-Z0-9가-힣\s]+$/)) {
    return "닉네임에 특수문자를 사용할 수 없습니다.";
  }

  if (nickname.length < 2) {
    return "닉네임은 2자 이상이어야 합니다.";
  }
};
