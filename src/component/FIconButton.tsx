import React from "react";
import IconButton from "react-native-paper/src/components/IconButton/IconButton";
import { SvgXml } from "react-native-svg";
import FTheme from "../styles/FTheme";

interface FIconButtonProps {
  icon: string;
  onPress?: () => void;
  iconColor?: string;
  size?: number;
  disabled?: boolean;
}

const FIconButton: React.FC<FIconButtonProps> = ({
  icon,
  onPress,
  iconColor = FTheme.colors.subtitle,
  size,
  disabled = false,
}) => {
  const modifiedColor = icon.replaceAll(
    'fill="black"',
    'fill="' + iconColor + '"'
  );

  return (
    <IconButton
      icon={() => <SvgXml xml={modifiedColor} width={size} height={size} />}
      iconColor={iconColor}
      size={size}
      disabled={disabled}
      onPress={onPress}
      rippleColor={FTheme.colors.border1}
    />
  );
};

export default FIconButton;
