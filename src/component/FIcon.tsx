import React from 'react';
import {SvgXml} from 'react-native-svg';
import FTheme from '../styles/FTheme';

interface FIconProps {
  icon: string;
  iconColor?: string;
  size?: number;
}

const FIcon: React.FC<FIconProps> = ({
  icon,
  iconColor = FTheme.colors.subtitle,
  size,
}) => {
  const modifiedColor = icon.replaceAll('"black"', '"' + iconColor + '"');

  return <SvgXml xml={modifiedColor} width={size} height={size} />;
};

export default FIcon;
