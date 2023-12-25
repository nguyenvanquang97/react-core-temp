import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import FirstLoad from './src/screens/login/FirstLoad';
import Login from './src/screens/login/Login';
import Splash from './src/screens/Splash';
import store from './src/redux/store';
import {Provider} from 'react-redux';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {MenuProvider} from 'react-native-popup-menu';
import PaperProvider from './node_modules/react-native-paper/src/core/PaperProvider';
import {
  getFcmToken,
  registerListenerWithFCM,
} from './src/utils/firebase/FCMHelper';
import {Platform, StatusBar} from 'react-native';
import BottomNavigation from './src/navigation/BottomNavigation';
import Home from './src/screens/home/Home';
import Account from './src/screens/account/Account';
import './src/services/i18next';
import {QueryClient, QueryClientProvider} from 'react-query';
import {FSnackbarProvider} from './src/component/hooks/useSnackbar';

export type RootStackParamList = {
  Splash: undefined;
  BottomNavigation: undefined;
  FirstLoad: undefined;
  Login: undefined;
  Home: undefined;
  Account: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

// tạo 1 hook navigation dùng cho toàn app
export const useAppNavigation = () =>
  useNavigation<NativeStackNavigationProp<RootStackParamList>>();

const App = () => {
  const queryClient = new QueryClient();

  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent');
      StatusBar.setTranslucent(true);
    }
  }, []);

  /** setup firebase cloud message */
  useEffect(() => {
    getFcmToken();
  }, []);

  useEffect(() => {
    const unsubscribe = registerListenerWithFCM();
    return unsubscribe;
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <MenuProvider>
            <PaperProvider>
              <FSnackbarProvider>
                <NavigationContainer>
                  <RootStack.Navigator initialRouteName="Splash">
                    <RootStack.Screen
                      name="Splash"
                      component={Splash}
                      options={{
                        headerShown: false,
                      }}
                    />
                    <RootStack.Screen
                      name="BottomNavigation"
                      component={BottomNavigation}
                      options={{
                        headerShown: false,
                      }}
                    />
                    <RootStack.Screen
                      name="FirstLoad"
                      component={FirstLoad}
                      options={{
                        headerShown: false,
                        animation: 'fade',
                      }}
                    />
                    <RootStack.Screen
                      name="Login"
                      component={Login}
                      options={{
                        headerShown: false,
                        animation: 'slide_from_bottom',
                      }}
                    />
                    <RootStack.Screen
                      name="Home"
                      component={Home}
                      options={{
                        headerShown: false,
                        animation: 'fade',
                      }}
                    />
                    <RootStack.Screen
                      name="Account"
                      component={Account}
                      options={{
                        headerShown: false,
                        animation: 'fade',
                      }}
                    />
                  </RootStack.Navigator>
                </NavigationContainer>
              </FSnackbarProvider>
            </PaperProvider>
          </MenuProvider>
        </Provider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
};

export default App;
