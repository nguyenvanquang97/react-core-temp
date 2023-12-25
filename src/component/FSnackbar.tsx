import React from 'react';
import {Platform, View} from 'react-native';
import Snackbar from '../../node_modules/react-native-paper/src/components/Snackbar';
import {FFilled} from '../styles/FIconStyles';
import FTheme from '../styles/FTheme';
import FIcon from './FIcon';
import Modal from 'react-native-modal';
import FText from './FText';

interface FSnackbarProps {
  visible: boolean;
  message: string;
  onDismiss: () => void;
  type: 'fail' | 'success' | 'info';
  paddingBottom?: number;
}

const FSnackbar: React.FC<FSnackbarProps> = ({
  visible,
  message,
  onDismiss,
  type,
  paddingBottom = 16,
}) => {
  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onDismiss}
      backdropColor={FTheme.colors.title}
      backdropOpacity={0.8}
      coverScreen={false}
      hasBackdrop={false}
      style={{justifyContent: 'flex-end', margin: 0}}>
      <Snackbar
        visible={visible}
        onDismiss={onDismiss}
        style={{
          backgroundColor:
            type === 'fail'
              ? FTheme.colors.error
              : type === 'info'
              ? FTheme.colors.info
              : FTheme.colors.success,
          marginHorizontal: 16,
          marginBottom: paddingBottom,
          borderRadius: 8,
          ...Platform.select({
            ios: {
              paddingTop: 4,
            },
          }),
          opacity: 1,
        }}
        duration={2500}>
        {Platform.OS == 'ios' ? (
          <View style={{flexDirection: 'row', paddingRight: 16}}>
            <FIcon
              icon={
                type === 'fail'
                  ? FFilled.c_remove
                  : type === 'info'
                  ? FFilled.c_info
                  : FFilled.c_check
              }
              size={24}
              iconColor={FTheme.colors.white}
            />
            <FText
              typo="bodyText2"
              style={{color: FTheme.colors.white, paddingLeft: 12}}>
              {message}
            </FText>
          </View>
        ) : (
          <FText
            typo="bodyText2"
            style={{color: FTheme.colors.white, paddingLeft: 12}}>
            {message}
          </FText>
        )}
      </Snackbar>
    </Modal>
  );
};

export default FSnackbar;
