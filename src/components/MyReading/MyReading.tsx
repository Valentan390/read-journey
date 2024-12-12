import { FC } from "react";
import {
  MyReading_coverBook,
  MyReading_div,
  MyReading_h3,
  MyReading_h4,
  MyReading_p,
  MyReading_time,
  MyReadingWrapper,
} from "./MyReading.styled";
import { useAppSelector, useMediaQueryResponsive } from "../../hooks";
import {
  selectBookUser,
  selectIsReadingBook,
} from "../../redux/books/booksSelectors";
import Icon from "../Icon/Icon";

const MyReading: FC = () => {
  const { imageUrl, title, author } = useAppSelector(selectBookUser);
  const isReadingBook = useAppSelector(selectIsReadingBook);
  const { isMobile } = useMediaQueryResponsive();
  const size = isMobile ? 40 : 50;
  return (
    <MyReadingWrapper>
      <MyReading_time>
        <MyReading_h3>My reading</MyReading_h3>
        <p>Time</p>
      </MyReading_time>

      <MyReading_div>
        <MyReading_coverBook $imageUrl={imageUrl} />
        <MyReading_h4>{title}</MyReading_h4>
        <MyReading_p>{author}</MyReading_p>
      </MyReading_div>

      <MyReading_div>
        <Icon
          iconName={isReadingBook ? "icon-block-stop" : "icon-block-start"}
          width={size}
          height={size}
          stroke="white"
          fill="red"
        />
      </MyReading_div>
    </MyReadingWrapper>
  );
};

export default MyReading;
