import { type FC } from "react";
import PopularWritingDetailPresenter from "./presenter/PopularWritingDetail.presenter";
import { getPopularWritingDetail } from "./api/popularWritingDetail.api";

interface PopularWritingDetailContainerProps {
  id: string;
}

const PopularWritingDetailContainer: FC<
  PopularWritingDetailContainerProps
> = async ({ id }) => {
  const { post } = await getPopularWritingDetail(id); // 동적으로 ID를 받아옴

  console.log("인기글 상세 데이터:", post); // 데이터 확인용 로그

  return <PopularWritingDetailPresenter {...post} />;
};

export default PopularWritingDetailContainer;
