import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Auth from '../views/Auth';

const AuthStack = createStackNavigator();

export default function AuthNavigation() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen name="Auth" component={Auth} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
