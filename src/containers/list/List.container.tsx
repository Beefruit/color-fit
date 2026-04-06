import { type FC } from "react";
import ListPresenter from "./presenter/List.presenter";
import { getList } from "./api/list.api";

const ListContainer: FC = async () => {
  const { posts: list } = await getList();
  return <ListPresenter list={list} />;
};

export default ListContainer;
