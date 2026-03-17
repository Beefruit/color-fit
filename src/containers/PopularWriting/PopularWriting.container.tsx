import { type FC } from "react";
import PopularWritingPresenter from "./presenter/PopularWriting.presenter";
import { getPopularWritings } from "./api/popularWriting.api";

const PopularWritingContainer: FC = async () => {
  const { posts: popularWritings } = await getPopularWritings();

  return <PopularWritingPresenter popularWritings={popularWritings} />;
};

export default PopularWritingContainer;
