import { FC, ReactNode } from "react";
import { Main, Section, Wrapper } from "./MainComponent.styled";

const MainComponent: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Main>
      <Section>
        <Wrapper className="container">{children}</Wrapper>
      </Section>
    </Main>
  );
};

export default MainComponent;
