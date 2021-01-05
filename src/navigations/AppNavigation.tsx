import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';

import Home from '../views/Home';
import Sheshim from '../views/Sheshim';
import Users from '../views/Users';
import Profile from '../views/Profile';

import colors from '../theme/colors';

const Tab = createBottomTabNavigator();

const tabIcons: any = {
  Home: 'ios-home',
  Sheshim: 'ios-rocket',
  Users: 'ios-people',
  Profile: 'ios-person',
};

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
        }}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => (
            <Ionicons
              name={tabIcons[route.name]}
              size={26}
              color={focused ? colors.primary : colors.black}
            />
          ),
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Sheshim" component={Sheshim} />
        <Tab.Screen name="Users" component={Users} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
