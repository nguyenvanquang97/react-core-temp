import React from 'react';
import Dialog from '../../node_modules/react-native-paper/src/components/Dialog/Dialog';
import Portal from '../../node_modules/react-native-paper/src/components/Portal/Portal';
import FText from './FText';

interface DialogComponentProps {
  visible: boolean;
  onDismiss: () => void;
}

const FDialog: React.FC<DialogComponentProps> = ({visible, onDismiss}) => {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onDismiss}>
        <Dialog.Title>Alert</Dialog.Title>
        <Dialog.Content>
          <FText typo="bodyText1">This is simple dialog</FText>
        </Dialog.Content>
        <Dialog.Actions>
          <FText typo="bodyText1">This is simple dialog</FText>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default FDialog;
