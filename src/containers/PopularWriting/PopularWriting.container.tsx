import { type FC } from "react";
import PopularWritingPresenter from "./presenter/PopularWriting.presenter";
import { getPopularWritings } from "./api/popularWriting.api";

const PopularWritingContainer: FC = async () => {
  const { posts: popularWritings } = await getPopularWritings();

  console.log("데이터 시작");
  console.log(popularWritings); //
  console.log("데이터 끝");

  return <PopularWritingPresenter popularWritings={popularWritings} />;
};

export default PopularWritingContainer;
