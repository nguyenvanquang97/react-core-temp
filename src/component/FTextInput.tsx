import React from 'react';
import {
  ViewStyle,
  TextStyle,
  View,
  KeyboardTypeOptions,
  Platform,
  TouchableOpacity,
} from 'react-native';
import TextInput from 'react-native-paper/src/components/TextInput/TextInput';
import {FButtonSizeProps} from '../styles/FButtonSize';
import FInputSize from '../styles/FInputSize';
import FTheme from '../styles/FTheme';
import FIconButton from './FIconButton';
import FText from './FText';
import {FFilled} from '../styles/FIconStyles';

interface FTextInputProps {
  readonly?: boolean;
  label: string;
  value: string;
  rightIcon?: React.ReactNode;
  onFocus?: () => void;
  onClear: () => void;
  onPressIn?: () => void;
  onChangeText: (text: string) => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  size?: FButtonSizeProps;
  errorText?: string;
  secureTextEntry?: boolean;
  showHelperButton?: boolean;
  helperButton?: React.ReactNode;
  keyboardType?: KeyboardTypeOptions;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
}

const FTextInput: React.FC<FTextInputProps> = ({
  readonly = false,
  label,
  value,
  onFocus,
  onClear,
  onChangeText,
  onPressIn,
  style,
  rightIcon,
  size = FInputSize.size56,
  textStyle = FTheme.fonts.bodyText1,
  errorText,
  secureTextEntry = false,
  showHelperButton = false,
  helperButton,
  keyboardType = 'default',
  autoCapitalize,
}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  // const [selection, setSelection] = React.useState({start: 0});
  const buildClearIcon = (
    <View style={{width: rightIcon ? 36 : null}}>
      <FIconButton
        icon={FFilled.c_remove}
        size={16}
        onPress={() => {
          value = '';
          if (onClear) onClear();
        }}
      />
    </View>
  );
  return (
    <TouchableOpacity
      onPress={readonly ? onPressIn : undefined}
      disabled={!readonly}>
      <View pointerEvents={readonly ? 'none' : undefined}>
        <View
          style={[
            {
              width: '100%',
              borderRadius: size.borderRadius,
              flexDirection: 'row',
              borderWidth: 1,
              alignItems: 'center',
              backgroundColor: FTheme.colors.white,
              borderColor: errorText
                ? FTheme.colors.error
                : isFocused
                ? FTheme.colors.primary
                : FTheme.colors.border1,
            },
            style,
          ]}>
          <TextInput
            label={errorText && value?.trim()?.length > 0 ? '' : label}
            onFocus={() => {
              if (onFocus) onFocus();
              setIsFocused(true);
            }}
            // onTouchStart={() => {
            //   setSelection({start: value.length});
            // }}
            keyboardType={keyboardType}
            // selection={selection}
            onBlur={() => {
              setIsFocused(false);
              // setSelection({start: 0});
            }}
            style={{
              flex: 1,
              width: '100%',
              height: size.height,
              backgroundColor: FTheme.colors.white,
              borderTopLeftRadius: size.borderRadius,
              borderTopRightRadius: size.borderRadius,
              borderBottomLeftRadius: size.borderRadius,
              borderBottomRightRadius: size.borderRadius,
              fontSize: textStyle.fontSize,
              fontWeight: textStyle.fontWeight,
            }}
            value={value}
            autoCapitalize={autoCapitalize}
            /** màu con trỏ */
            cursorColor={FTheme.colors.label}
            underlineColor="transparent"
            onChangeText={text => {
              onChangeText(text);
              value = text;
            }}
            onPressIn={() => {
              if (onPressIn) onPressIn();
            }}
            secureTextEntry={secureTextEntry}
            /// màu chữ nhập
            textColor={FTheme.colors.label}
            /** màu khi bôi text */
            selectionColor={
              Platform.OS == 'ios'
                ? FTheme.colors.primary
                : FTheme.colors.primaryBorder
            }
            theme={{
              colors: {
                /** màu text */
                text: FTheme.colors.label,
                /** màu label active */
                primary: FTheme.colors.primary,
                /** màu label inactive */
                placeholder: FTheme.colors.placeHolder,
                /** màu label inactive */
                onSurfaceVariant: FTheme.colors.placeHolder,
              },
            }}
          />

          {readonly
            ? buildClearIcon
            : isFocused && value?.trim()?.length > 0
            ? buildClearIcon
            : null}
          {rightIcon ? rightIcon : null}
        </View>
        {errorText?.trim() !== '' || showHelperButton == true ? (
          <View
            style={{
              flexDirection: 'row',
            }}>
            <FText
              style={{
                flex: 1,
                color: FTheme.colors.error,
                paddingTop: helperButton ? 11 : 8,
              }}
              typo="subtitle3">
              {errorText}
            </FText>
            {helperButton}
          </View>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

export default FTextInput;
