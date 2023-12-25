import {View} from 'react-native';
import React from 'react';
import AppbarHeader from 'react-native-paper/src/components/Appbar/AppbarHeader';
import FTheme from '../styles/FTheme';
import FIconButton from './FIconButton';
import {FOutlined} from '../styles/FIconStyles';
import {ViewStyle} from 'react-native/types';
import FText from './FText';

interface FAppbarProps {
  icon?: string;
  onBack?: () => void;
  noContent?: boolean;
  style?: ViewStyle;
  title?: string;
  subtitle?: string;
  toolbarHeight?: number;
  backColor?: string;
  trailling?: React.ReactNode;
  customizeTitle?: React.ReactNode;
}

const FAppbar: React.FC<FAppbarProps> = ({
  icon = FOutlined.close,
  onBack,
  noContent = false,
  style,
  title,
  subtitle,
  toolbarHeight = 48,
  backColor = FTheme.colors.subtitle,
  trailling,
  customizeTitle,
}) => {
  return (
    <AppbarHeader
      style={[
        {
          backgroundColor: FTheme.colors.white,
          padding: 0,
          height: toolbarHeight,
          elevation: 0,
          justifyContent: trailling != null ? 'space-between' : undefined,
        },
        style,
      ]}>
      {!noContent && (
        <FIconButton
          icon={icon}
          size={24}
          onPress={onBack}
          iconColor={backColor}
        />
      )}

      {(title !== undefined || subtitle !== undefined) && (
        /// Pading left trong appbar đang mặc định là 4
        <View style={{paddingLeft: 12}}>
          <FText style={{color: FTheme.colors.title}} typo="title1">
            {title}
          </FText>
          <FText style={{color: FTheme.colors.title}} typo="subtitle2">
            {subtitle}
          </FText>
        </View>
      )}

      {customizeTitle && <>{customizeTitle}</>}

      <View style={{alignItems: 'flex-end'}}>{trailling}</View>
    </AppbarHeader>
  );
};

export default FAppbar;
