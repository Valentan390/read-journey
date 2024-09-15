import styled from "styled-components";
import iphone15Mob1x from "../../images/mobile/iPhone-15-Black-1-Mob-@1x.webp";
import iphone15Mob2x from "../../images/mobile/iPhone-15-Black-1-Mob-@2x.webp";
import iphone15Desc1x from "../../images/desktop/iPhone-15-Black-Desc-@1x.webp";
import iphone15Desc2x from "../../images/desktop/iPhone-15-Black-Desc-@2x.webp";

export const Iphone15Wrapper = styled.div`
  width: 100%;
  height: 351px;
  flex-shrink: 0;
  border-radius: 30px;
  background: ${({ theme }) => theme.colors.charcoal};

  background-image: image-set(
    url(${iphone15Mob1x}) 1x,
    url(${iphone15Mob2x}) 2x
  );
  background-repeat: no-repeat;
  background-size: initial;
  background-position: center bottom;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    width: calc((100% - 20px) / 2);
    height: auto;

    background-image: image-set(
      url(${iphone15Desc1x}) 1x,
      url(${iphone15Desc2x}) 2x
    );
  }
`;
