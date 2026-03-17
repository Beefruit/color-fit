export const formatTimeAgo = (dateString: string) => {
  const SECOND = 1000;
  const MINUTE = 60 * SECOND;
  const HOUR = 60 * MINUTE;
  const DAY = 24 * HOUR;
  const WEEK = 7 * DAY;
  const MONTH = 30 * DAY;
  const YEAR = 365 * DAY;

  const now = new Date();
  const createdDate = new Date(dateString);

  const diff = now.getTime() - createdDate.getTime();

  const minutes = Math.floor(diff / MINUTE);
  const hours = Math.floor(diff / HOUR);
  const days = Math.floor(diff / DAY);
  const weeks = Math.floor(diff / WEEK);
  const months = Math.floor(diff / MONTH);
  const years = Math.floor(diff / YEAR);

  if (minutes < 1) return "방금 전";
  if (minutes < 60) return `${minutes}분 전`;
  if (hours < 24) return `${hours}시간 전`;
  if (days < 7) return `${days}일 전`;
  if (weeks < 4) return `${weeks}주 전`;
  if (months < 12) return `${months}개월 전`;
  if (years >= 1) return `${years}년 전`;

  return createdDate.toLocaleDateString();
};
