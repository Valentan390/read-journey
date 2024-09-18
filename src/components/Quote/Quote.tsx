import { FC } from "react";
import { Quote_Book, Quote_P, Quote_Span, Quote_Wrapper } from "./Quote.styled";

const Quote: FC = () => {
  return (
    <Quote_Wrapper>
      <Quote_Book />
      <Quote_P>
        "Books are <Quote_Span>windows</Quote_Span> to the world, and reading is
        a journey into the unknown."
      </Quote_P>
    </Quote_Wrapper>
  );
};

export default Quote;
