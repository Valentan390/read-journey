import { FC, useState } from "react";
import Icon from "../Icon/Icon";
import {
  Details_button,
  Details_div,
  Details_h3,
  DetailsWrapper,
} from "./Details.styled";
import Diary from "../Diary/Diary";
import Statistics from "../Statistics/Statistics";
import { useMediaQueryResponsive } from "../../hooks";

const Details: FC = () => {
  const [display, setDisplay] = useState<"details" | "statistics">("details");
  const isDisplay = display === "details";
  const { isMobile } = useMediaQueryResponsive();
  const dimensions = isMobile ? 16 : 20;

  return (
    <DetailsWrapper>
      <Details_div>
        <Details_h3>{isDisplay ? "Details" : "Statistics"}</Details_h3>
        <Details_div $icon>
          <Details_button type="button" onClick={() => setDisplay("details")}>
            <Icon
              iconName="icon-hourglass-01"
              width={dimensions}
              height={dimensions}
              stroke={isDisplay ? "white" : "gray"}
            />
          </Details_button>
          <Details_button
            type="button"
            onClick={() => setDisplay("statistics")}
          >
            <Icon
              iconName="icon-pie-chart-02"
              width={dimensions}
              height={dimensions}
              stroke={isDisplay ? "gray" : "white"}
            />
          </Details_button>
        </Details_div>
      </Details_div>
      {isDisplay ? <Diary /> : <Statistics />}
    </DetailsWrapper>
  );
};

export default Details;
