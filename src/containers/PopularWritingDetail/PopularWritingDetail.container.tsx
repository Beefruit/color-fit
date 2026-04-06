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

  return <PopularWritingDetailPresenter {...post} />;
};

export default PopularWritingDetailContainer;
