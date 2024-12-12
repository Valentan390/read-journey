import { FC } from "react";
import Dashboard from "../../components/Dashboard/Dashboard";
import MainComponent from "../../components/MainComponent/MainComponent";
import MyReading from "../../components/MyReading/MyReading";

const ReadingPage: FC = () => {
  return (
    <MainComponent>
      <Dashboard />
      <MyReading />
    </MainComponent>
  );
};

export default ReadingPage;
