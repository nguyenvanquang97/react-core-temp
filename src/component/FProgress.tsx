import React from 'react';
import {View, ViewStyle, Text, TouchableOpacity} from 'react-native';
import {IconSource} from 'react-native-paper/src/components/Icon';
import FTheme from '../styles/FTheme';
import FText from './FText';

interface FProgressProps {
  iconLeft?: IconSource | any;
  iconRight?: IconSource | any;
  action: any;
  colorAction?: string;
  contentTitle?: string;
  TextActionView?: string;
  value?: string;
  value1?: string;
  style?: ViewStyle;
}

const FProgress: React.FC<FProgressProps> = ({
  iconLeft,
  iconRight,
  action,
  colorAction,
  contentTitle,
  TextActionView,
  value,
  value1,
  style,
}) => {
  return (
    <View style={{padding: 5, paddingHorizontal: 15, backgroundColor: 'white'}}>
      <View style={{flexDirection: 'row', paddingVertical: 2}}>
        <View style={{flex: 1}}>
          {contentTitle !== undefined && (
            <FText typo="title4">{contentTitle}</FText>
          )}
        </View>
        <TouchableOpacity style={{flex: 1, alignItems: 'flex-end'}}>
          {TextActionView !== undefined && (
            <FText typo="buttonText2">{TextActionView}</FText>
          )}
        </TouchableOpacity>
      </View>
      {iconLeft && iconRight ? (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 4,
          }}>
          <View>{iconLeft !== undefined && iconLeft}</View>
          <View
            style={[
              {
                flex: 1,
                backgroundColor: '#F3F3F3',
                borderRadius: 8,
                height: 10,
                marginHorizontal: 10,
              },
              style,
            ]}>
            <Text
              style={{
                width: action,
                backgroundColor: colorAction
                  ? colorAction
                  : FTheme.colors.primary,
                borderRadius: 8,
              }}></Text>
          </View>
          <View>{iconRight !== undefined && iconRight}</View>
        </View>
      ) : (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 4,
          }}>
          <View>
            <FText typo="title6">{value}</FText>
          </View>
          <View
            style={[
              {
                flex: 1,
                backgroundColor: '#F3F3F3',
                borderRadius: 8,
                height: 10,
                marginHorizontal: 10,
              },
              style,
            ]}>
            <Text
              style={{
                width: action,
                backgroundColor: colorAction
                  ? colorAction
                  : FTheme.colors.primary,
                borderRadius: 8,
              }}></Text>
          </View>
          <View>
            <FText typo="title6">{value1}</FText>
          </View>
        </View>
      )}

      {value && value1 && iconLeft && iconRight && (
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <FText typo="title6">{value}</FText>
          </View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <FText typo="title6">{value1}</FText>
          </View>
        </View>
      )}
    </View>
  );
};

export default FProgress;
