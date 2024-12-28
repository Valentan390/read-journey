import { FC } from "react";
import { useAppSelector, useMediaQueryResponsive } from "../../hooks";
import { selectBookUser } from "../../redux/books/booksSelectors";
import {
  Diary_Content,
  Diary_div,
  Diary_h4,
  Diary_Icon,
  Diary_li,
  Diary_p,
  Diary_ul,
} from "./Diary.styled";
import Icon from "../Icon/Icon";

const Diary: FC = () => {
  const { progress } = useAppSelector(selectBookUser);
  const { isMobile } = useMediaQueryResponsive();
  return (
    <Diary_ul>
      {progress?.map(
        (
          { startPage, startReading, finishPage, finishReading, status, speed },
          key
        ) => (
          <Diary_li key={key}>
            <Diary_div>
              <Diary_Icon>
                <Icon iconName="icon-Frame-56" width={16} height={16} />
              </Diary_Icon>
              <Diary_Content>
                <Diary_h4>12.12.2024</Diary_h4>
                <Diary_p>7.6%</Diary_p>
                <Diary_p $minutes>30 minut</Diary_p>
              </Diary_Content>
            </Diary_div>

            <Diary_div $delete>
              <Diary_Content>
                <Diary_h4 $pages>42 pages</Diary_h4>
                <Icon
                  iconName="icon-block"
                  width={isMobile ? 43 : 59}
                  height={isMobile ? 18 : 25}
                  fill="green"
                />
                <Diary_p $minutes $pages>
                  45 pages per hour
                </Diary_p>
              </Diary_Content>
              <Icon
                iconName="icon-trash-2"
                width={isMobile ? 14 : 16}
                height={isMobile ? 14 : 16}
                stroke="gray"
              />
            </Diary_div>
          </Diary_li>
        )
      )}
    </Diary_ul>
  );
};

export default Diary;
