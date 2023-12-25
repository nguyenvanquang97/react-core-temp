import React, {ReactNode} from 'react';
import {ViewStyle} from 'react-native';
import Tooltip from 'rn-tooltip';
import FText from './FText';

interface FToolTipProps {
  message: string;
  children: ReactNode;
  backgroundMess?: string;
  containerStyles?: ViewStyle;
  TextColor?: string;
}

const FToolTip: React.FC<FToolTipProps> = ({
  message,
  children,
  backgroundMess,
  containerStyles,
  TextColor,
}) => {
  return (
    <Tooltip
      actionType="press"
      containerStyle={containerStyles}
      pointerColor={backgroundMess}
      backgroundColor={backgroundMess}
      popover={
        <FText typo="bodyText2" style={{color: TextColor}}>
          {message}
        </FText>
      }>
      {children}
    </Tooltip>
  );
};
export default FToolTip;
