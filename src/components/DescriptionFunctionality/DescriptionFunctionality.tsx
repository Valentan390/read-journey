import { FC } from "react";
import {
  Description_Container,
  Description_H1,
  Description_Link,
  Description_Number,
  Description_P,
  Description_Span,
  Description_Wrapper,
} from "./DescriptionFunctionality.styled";
import { descriptions } from "../../helpers";
import Icon from "../Icon/Icon";

const DescriptionFunctionality: FC = () => {
  return (
    <Description_Wrapper>
      <Description_H1>Start your workout</Description_H1>
      {descriptions.map(({ number, text, span }, index) => (
        <Description_Container key={index}>
          <Description_Number>{number}</Description_Number>
          <Description_P>
            {text}
            <Description_Span dangerouslySetInnerHTML={{ __html: span }} />
          </Description_P>
        </Description_Container>
      ))}
      <Description_Container $Link>
        <Description_Link to={"/library"}>My library</Description_Link>
        <Icon iconName="icon-log-in" width={24} height={24} stroke="white" />
      </Description_Container>
    </Description_Wrapper>
  );
};

export default DescriptionFunctionality;
