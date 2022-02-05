import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Ionicons} from '@expo/vector-icons'

import Home from '../views/Home'
import Sheshim from '../views/Sheshim'
import Users from '../views/Users'
import Profile from '../views/Profile'
import NewQuestion from '../views/NewQuestion'
import DetailsQuestion from '../views/DetailsQuestion'

import colors from '../theme/colors'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const tabIcons: { [key: string]: string } = {
  Home: 'ios-home',
  Sheshim: 'ios-rocket',
  Add: 'ios-add-circle',
  Users: 'ios-people',
  Profile: 'ios-person'
}

function HomeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: 'Top Questions'}}
      />
      <Stack.Screen
        name="DetailsQuestion"
        component={DetailsQuestion}
        options={{title: 'Details Question'}}
      />
      <Stack.Screen
        name="NewQuestion"
        component={NewQuestion}
        options={{title: 'New Question'}}
      />
    </Stack.Navigator>
  )
}

function SheshimNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Sheshim"
        component={Sheshim}
        options={{title: 'All Questions'}}
      />
      <Stack.Screen
        name="DetailsQuestion"
        component={DetailsQuestion}
        options={{title: 'Details Question'}}
      />
      <Stack.Screen
        name="NewQuestion"
        component={NewQuestion}
        options={{title: 'New Question'}}
      />
    </Stack.Navigator>
  )
}

function UsersNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Users" component={Users} />
    </Stack.Navigator>
  )
}

function ProfileNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  )
}

function AddNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Add" component={NewQuestion} />
    </Stack.Navigator>
  )
}

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => (
            <Ionicons
              name={tabIcons[route.name]}
              size={focused ? 28 : 26}
              color={focused ? colors.primary : colors.black}
            />
          )
        })}
      >
        <Tab.Screen name="Home" component={HomeNavigation} />
        <Tab.Screen name="Sheshim" component={SheshimNavigation} />
        <Tab.Screen name="Add" component={AddNavigation} />
        <Tab.Screen name="Users" component={UsersNavigation} />
        <Tab.Screen name="Profile" component={ProfileNavigation} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
