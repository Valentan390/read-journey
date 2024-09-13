import { CSSProperties, FC } from "react";
import sprite from "../../images/svg/sprite.svg";
import { Icon_svg } from "./Icon.styled";

interface IconProps {
  iconName: string;
  width: number;
  height: number;
  fill?: string;
  stroke?: string;
  style?: CSSProperties;
}

const Icon: FC<IconProps> = ({
  iconName,
  width,
  height,
  fill,
  stroke,
  style,
}) => {
  return (
    <Icon_svg
      width={width}
      height={height}
      $fill={fill}
      $stroke={stroke}
      style={style}
    >
      <use href={`${sprite}#${iconName}`} />
    </Icon_svg>
  );
};

export default Icon;
