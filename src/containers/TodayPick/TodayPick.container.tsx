import { type FC } from "react";
import TodaypickPresenter from "./presenter/Todaypick.presenter";
import { getTodayPicks } from "./api/todaypick.api";

const TodayPickContainer: FC = async () => {
  const { products: todayPicks } = await getTodayPicks();

  const vProps = { todayPicks };

  return <TodaypickPresenter {...vProps} />;
};

export default TodayPickContainer;
