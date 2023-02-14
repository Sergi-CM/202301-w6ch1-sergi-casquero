import TaskCard from "../TaskCard/TaskCard";

const CardList = (): JSX.Element => {
  return (
    <>
      <TaskCard name={"Learn Javascript"} />
      <TaskCard name={"Learn Redux"} />
    </>
  );
};

export default CardList;
