import { FC } from "react";
import {
  Progress_div,
  Progress_h3,
  Progress_p,
  ProgressWrapper,
} from "./Progress.styled";

const Progress: FC = () => {
  return (
    <ProgressWrapper>
      <Progress_h3>Progress</Progress_h3>
      <Progress_p>
        Here you will see when and how much you read. To record, click on the
        red button above.
      </Progress_p>
      <Progress_div />
    </ProgressWrapper>
  );
};

export default Progress;
