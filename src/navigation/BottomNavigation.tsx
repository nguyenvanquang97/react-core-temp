import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootStackParamList} from '../../App';
import FTheme from '../styles/FTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import FText from '../component/FText';
import FIcon from '../component/FIcon';
import Home from '../screens/home/Home';
import Account from '../screens/account/Account';
import {Felevation} from '../styles/FElevation';
import {FFilled} from '../styles/FIconStyles';

const Tab = createBottomTabNavigator<RootStackParamList>();

export default function BottomNavigation() {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: FTheme.colors.primary,
        tabBarInactiveTintColor: FTheme.colors.subtitle,
        tabBarStyle: [
          {
            height: insets.bottom + 56,
            paddingBottom: insets.bottom + 6,
            alignItems: 'center',
            justifyContent: 'space-around',
          },
          Felevation.top1,
        ],
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={() => {
          return {
            tabBarLabel: ({color}: any) => (
              <FText
                typo={'label5'}
                style={{
                  color: color,
                }}>
                Trang chủ
              </FText>
            ),
            tabBarIcon: ({color}: any) => (
              <FIcon icon={FFilled.home} size={24} iconColor={color} />
            ),
          };
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={() => {
          return {
            tabBarLabel: ({color}: any) => (
              <FText
                typo={'label5'}
                style={{
                  color: color,
                }}>
                Cá nhân
              </FText>
            ),
            tabBarIcon: ({color}: any) => (
              <FIcon icon={FFilled.user_profile} size={24} iconColor={color} />
            ),
          };
        }}
      />
    </Tab.Navigator>
  );
}
