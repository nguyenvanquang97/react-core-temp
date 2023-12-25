import React from 'react';
import {Text, TextStyle} from 'react-native';
import FTheme from '../styles/FTheme';

interface FTextProps {
  typo: keyof typeof FTheme.fonts;
  children: React.ReactNode;
  style?: TextStyle;
  numberOfLines?: number | undefined;
  color?: string;
}

const FText: React.FC<FTextProps> = ({
  typo,
  children,
  style,
  numberOfLines,
  color = FTheme.colors.title,
}) => {
  const typoStyle = FTheme.fonts[typo];

  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        typoStyle,
        {
          color: color,
        },
        style,
      ]}>
      {children}
    </Text>
  );
};

export default FText;
