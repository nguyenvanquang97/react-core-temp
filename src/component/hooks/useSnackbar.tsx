import React, {createContext, useContext, ReactNode, useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import FSnackbar from '../FSnackbar';

interface useSnackbarProps {
  type: 'fail' | 'success' | 'info';
  paddingBottom?: number;
}

interface useSnackbarContextProps {
  showSnackbar: (message: string, options?: useSnackbarProps) => void;
  hideSnackbar: () => void;
}

const useSnackbarContext = createContext<useSnackbarContextProps | undefined>(
  undefined,
);

export const FSnackbarProvider: React.FC<{children: ReactNode}> = ({
  children,
}) => {
  const insets = useSafeAreaInsets();
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [options, setOptions] = useState<useSnackbarProps | undefined>(
    undefined,
  );

  const showSnackbar = (msg: string, opts?: useSnackbarProps) => {
    setMessage(msg);
    setOptions(opts);
    setVisible(true);
  };

  const hideSnackbar = () => {
    setVisible(false);
  };

  return (
    <useSnackbarContext.Provider
      value={{showSnackbar: showSnackbar, hideSnackbar: hideSnackbar}}>
      {children}
      <FSnackbar
        visible={visible}
        message={message}
        onDismiss={hideSnackbar}
        type={options?.type ?? 'fail'}
        paddingBottom={options?.paddingBottom ?? insets.bottom}
      />
    </useSnackbarContext.Provider>
  );
};

export const useFSnackbar = () => {
  const context = useContext(useSnackbarContext);
  if (!context) {
    throw new Error('useSnackbar must be used within a SnackbarProvider');
  }
  return context;
};
