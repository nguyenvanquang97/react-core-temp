import {Keyboard, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import FTheme from '../../styles/FTheme';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../App';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FFilled, FOutlined} from '../../styles/FIconStyles';
import {Formik} from 'formik';
import {FValidatePhone} from '../../utils/FValidation';
import {ConfigApi} from '../../api/ConfigApi';
import {LoginResItems} from '../../api/items/LoginResItems';
import {Storage} from '../../utils/Storage';
import {useDispatch} from 'react-redux';
import {setUser} from '../../redux/actions/UserActions';
import TouchID from 'react-native-touch-id';
import FAppbar from '../../component/FAppbar';
import FText from '../../component/FText';
import FLoading from '../../component/FLoading';
import FTextInput from '../../component/FTextInput';
import FIconButton from '../../component/FIconButton';
import FFilledButton from '../../component/FFilledButton';
import FIcon from '../../component/FIcon';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useTranslation} from 'react-i18next';
import {useBaseDA} from '../../services/BaseDA';
import {useFSnackbar} from '../../component/hooks/useSnackbar';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const Login = ({navigation}: Props) => {
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();
  const {t} = useTranslation();

  const {mutateAsync, isLoading} = useBaseDA<LoginResItems>();
  const {showSnackbar, hideSnackbar} = useFSnackbar();

  const [biometryType, setBiometryType] = React.useState<string | null>(null);
  const [isLoginWithBiometric, setIsLoginWithBiometric] =
    React.useState<boolean>(false);

  const [isSecure, setIsSecure] = React.useState(true);
  const [isPhoneError, setIsPhoneError] = React.useState(false);
  const [isPassError, setIsPassError] = React.useState(false);
  const [isFirstload, setIsFirstload] = React.useState(true);
  const initialValues = {phoneNumber: '', password: ''};
  const [prefUserName, setPrefUserName] = React.useState('');
  const [prefPassword, setPrefPassword] = React.useState('');

  const getDataPrefs = async () => {
    try {
      const retrievedData = await Storage.getItem<boolean>(
        Storage.LOGIN_WITH_BIOMETRIC,
      );
      console.log('isbiometric', retrievedData);
      setIsLoginWithBiometric(retrievedData ?? false);

      if (retrievedData) {
        const retriveUser = await Storage.getItem<string>(Storage.USERNAME);
        const retrivePass = await Storage.getItem<string>(Storage.PASSWORD);

        console.log('username:', retriveUser);
        console.log('pass:', retrivePass);
        setPrefUserName(retriveUser ?? '');
        setPrefPassword(retrivePass ?? '');
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (__DEV__) {
      initialValues.phoneNumber = '0910000000';
      initialValues.password = '1234567A@a';
    }

    getDataPrefs();
    const fetchData = async () => {
      try {
        const storedData = await Storage.getItem<boolean>(
          Storage.KEY_FIRST_LOAD,
        );
        if (storedData !== null) {
          setIsFirstload(storedData);
        }
      } catch (error) {
        console.error('Error fetching data from AsyncStorage:', error);
      }
    };
    fetchData();

    async function checkBiometrics() {
      TouchID.isSupported()
        .then(biometryType => {
          if (biometryType === 'FaceID') {
            console.log('FaceID is supported.');
            setBiometryType('Face ID');
          } else {
            console.log('TouchID is supported.');
            setBiometryType('Touch ID');
          }
        })
        .catch(error => {
          console.log(error);
        });
    }

    checkBiometrics();
  }, []);

  const handleLogin = async (values: any) => {
    Keyboard.dismiss();
    hideSnackbar();

    mutateAsync({
      url: ConfigApi.login,
      method: 'POST',
      obj: {phoneNumber: values.phoneNumber, password: values.password},
    }).then(res => {
      if (res?.code == 200) {
        saveDataPrefs();
        /** save User info to redux */
        dispatch(setUser(res.data.user, res.data.token, true));

        navigation.reset({
          index: 0,
          routes: [{name: 'BottomNavigation'}],
        });
      } else {
        if (res?.code == -1) {
          setIsPhoneError(true);
        } else if (res?.code == -2) {
          setIsPassError(true);
        } else {
          showSnackbar(res?.message ?? `${t('common.error')}`);
        }
      }
    });
  };

  const saveDataPrefs = async () => {
    try {
      await Storage.setItem(Storage.KEY_FIRST_LOAD, false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
        {isLoading && <FLoading visible={isLoading} />}
        <FAppbar onBack={() => navigation.pop()} noContent={!isFirstload} />
        <FText typo={'largeTitle'} style={styles.largeTitle}>
          {t('login.title')}
          <FText typo={'largeTitle'}>{'\n' + `${t('login.title2')}`}</FText>
        </FText>
        <Formik
          initialValues={initialValues}
          validate={values => {
            const errors: any = {};

            const phoneText = values.phoneNumber.trim();
            const passText = values.password.trim();

            if (!phoneText) {
              errors.phoneNumber = `${t('common.invalidEmpty')}`;
            } else if (!FValidatePhone(phoneText)) {
              errors.phoneNumber = `${t('login.invalidPhone')}`;
            }

            if (!passText) {
              errors.password = `${t('common.invalidEmpty')}`;
            }

            return errors;
          }}
          onSubmit={values => {
            handleLogin(values);
          }}>
          {({values, submitForm, errors, touched, setFieldValue}) => (
            <View>
              <FText typo={'label3'} style={styles.titlePhone}>
                {t('login.phone')}
              </FText>
              <View style={{paddingHorizontal: 16}}>
                <FTextInput
                  label={`${t('login.enterPhone')}`}
                  value={values.phoneNumber}
                  keyboardType={'numeric'}
                  onClear={() => {
                    setIsPhoneError(false);
                    setFieldValue('phoneNumber', '');
                  }}
                  onChangeText={text => {
                    setIsPhoneError(false);
                    const numericInput = text.replace(/[^0-9]/g, '');
                    setFieldValue('phoneNumber', numericInput);
                  }}
                  errorText={
                    touched.phoneNumber && errors.phoneNumber
                      ? errors.phoneNumber
                      : isPhoneError
                      ? `${t('login.phoneNotRegistered')}`
                      : ''
                  }
                  helperButton={
                    isPhoneError && (
                      <TouchableOpacity
                        onPress={() => {
                          // navigation.navigate('Register', {
                          //   phone: values.phoneNumber,
                          // });
                        }}
                        style={{
                          paddingTop: 8,
                          paddingLeft: 16,
                        }}>
                        <FText
                          style={{color: FTheme.colors.primary}}
                          typo="buttonText2">
                          {t('login.registerAccount')}
                        </FText>
                      </TouchableOpacity>
                    )
                  }
                />
              </View>
              <FText typo={'label3'} style={styles.titlePass}>
                {`${t('login.password')}`}
              </FText>
              <View style={{paddingHorizontal: 16, paddingBottom: 32}}>
                <FTextInput
                  label={`${t('login.enterPassword')}`}
                  secureTextEntry={isSecure}
                  value={values.password}
                  onClear={() => {
                    setIsPassError(false);
                    setFieldValue('password', '');
                  }}
                  onChangeText={text => {
                    setIsPassError(false);
                    setFieldValue('password', text);
                  }}
                  errorText={
                    touched.password && errors.password
                      ? errors.password
                      : isPassError
                      ? `${t('login.invalidPassword')}`
                      : ''
                  }
                  rightIcon={
                    <FIconButton
                      icon={isSecure ? FFilled.eye_off : FFilled.eye_on}
                      size={16}
                      onPress={() => {
                        setIsSecure(!isSecure);
                      }}
                    />
                  }
                  showHelperButton={true}
                  helperButton={
                    <TouchableOpacity
                      onPress={() => {
                        // navigation.navigate('ForgotPass');
                      }}
                      style={{
                        paddingTop: 8,
                        paddingLeft: 16,
                      }}>
                      <FText
                        style={{color: FTheme.colors.subtitle}}
                        typo="buttonText2">
                        {t('login.forgotPassword')}
                      </FText>
                    </TouchableOpacity>
                  }
                />
              </View>
              <FFilledButton
                title={`${t('login.title')}`}
                onPress={submitForm}
                style={{
                  marginHorizontal: 16,
                }}
              />

              {biometryType != null ? (
                isLoginWithBiometric === true ? (
                  <TouchableOpacity
                    onPress={() => {
                      const config = {
                        title: `${t('login.authenRequire')}`, // Android
                        imageColor: '#00204D', // Android
                        imageErrorColor: '#E14337', // Android
                        sensorDescription: `${t('login.fingerprintSensor')}`, // Android
                        sensorErrorDescription: `${t('login.notIdentify')}`, // Android
                        cancelText: `${t('common.cancel')}`, // Android
                        fallbackLabel: `${t('login.enterPassword')}`, // iOS (if empty, then label is hidden)
                        unifiedErrors: false, // use unified error messages (default false)
                        passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
                      };

                      TouchID.authenticate(
                        `${t('login.loginWith')} ` + biometryType,
                        config,
                      )
                        .then((success: any) => {
                          handleLogin({
                            phoneNumber: prefUserName,
                            password: prefPassword,
                          });
                        })
                        .catch((error: any) => {
                          console.log('error biometric: ', error);
                        });
                    }}
                    style={{
                      alignSelf: 'center',
                      width: 'auto', // Set width to 'auto' to hug the content
                      marginTop: 40,
                      alignItems: 'center',
                      paddingHorizontal: 20,
                    }}>
                    <FIcon
                      icon={
                        biometryType === 'Face ID'
                          ? FOutlined.face_id
                          : FOutlined.touch_id
                      }
                      size={40}
                      iconColor={FTheme.colors.subtitle}
                    />
                    <FText
                      typo="bodyText2"
                      style={{color: FTheme.colors.body, paddingTop: 12}}>
                      {`${t('login.loginWith')} ${biometryType}`}
                    </FText>
                  </TouchableOpacity>
                ) : null
              ) : null}
            </View>
          )}
        </Formik>
      </KeyboardAwareScrollView>
      <View
        style={{
          ...styles.bottomButtonView,
          paddingBottom: insets.bottom + (insets.bottom > 0 ? 8 : 16),
        }}>
        <TouchableOpacity
          onPress={() => {
            // navigation.replace('Register', {});
          }}
          style={styles.textButton}>
          <FText style={{color: FTheme.colors.subtitle}} typo="buttonText2">
            {t('login.dontHaveAccount')}
            <FText style={{color: FTheme.colors.primary}} typo="buttonText2">
              {` ${t('login.register')}`}
            </FText>
          </FText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: FTheme.colors.white,
    flex: 1,
  },
  largeTitle: {
    color: FTheme.colors.primary,
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 44,
  },
  titlePhone: {
    color: FTheme.colors.title,
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  titlePass: {
    color: FTheme.colors.title,
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 8,
  },
  bottomButtonView: {
    width: '100%',
    bottom: 0,
    position: 'absolute',
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  textButton: {
    paddingTop: 16,
    alignItems: 'center',
    paddingHorizontal: 16,
    alignSelf: 'center',
  },
});
