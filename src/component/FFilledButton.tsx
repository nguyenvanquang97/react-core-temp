import React from 'react';
import {TouchableOpacity, Text, ViewStyle, TextStyle} from 'react-native';
import FButtonSize, {FButtonSizeProps} from '../styles/FButtonSize';
import FTheme from '../styles/FTheme';

interface FFilledButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  size?: FButtonSizeProps;
  backgroundColor?: string;
  textColor?: string;
}

const FFilledButton: React.FC<FFilledButtonProps> = ({
  title,
  onPress,
  style,
  size = FButtonSize.size48,
  textStyle = FTheme.fonts.buttonText1,
  backgroundColor = FTheme.colors.primary,
  textColor = FTheme.colors.white,
}) => {
  return (
    <TouchableOpacity
      style={[
        {
          height: size.height,
          backgroundColor: backgroundColor,
          borderRadius: size.borderRadius,
          padding: size.padding,
        },
        style,
      ]}
      onPress={onPress}>
      <Text
        style={[
          {
            fontSize: textStyle.fontSize,
            fontFamily: textStyle.fontFamily,
            fontWeight: textStyle.fontWeight,
            letterSpacing: textStyle.letterSpacing,
            lineHeight: textStyle.lineHeight,
            textAlign: 'center',
            color: textColor,
          },
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default FFilledButton;
