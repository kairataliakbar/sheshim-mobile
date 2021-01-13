import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Ionicons} from '@expo/vector-icons'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'

import Home from '../views/Home'
import Sheshim from '../views/Sheshim'
import Users from '../views/Users'
import Profile from '../views/Profile'
import NewQuestion from '../views/NewQuestion'
import DetailsQuestion from '../views/DetailsQuestion'

import colors from '../theme/colors'

import {CustomHeaderButton} from '../components'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const tabIcons: any = {
  Home: 'ios-home',
  Sheshim: 'ios-rocket',
  Users: 'ios-people',
  Profile: 'ios-person'
}

const addQuestionButton = () => (
  <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
    <Item
      title="Add"
      iconName="ios-add-circle"
      onPress={() => {}}
    />
  </HeaderButtons>
)

function HomeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Top Questions',
          headerRight: addQuestionButton
        }}
      />
      <Stack.Screen
        name="DetailsQuestion"
        component={DetailsQuestion}
        options={{
          title: 'Details Question',
          headerRight: () => addQuestionButton
        }}
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
        options={{
          title: 'All Questions',
          headerRight: () => addQuestionButton
        }}
      />
      <Stack.Screen
        name="DetailsQuestion"
        component={DetailsQuestion}
        options={{
          title: 'Details Question',
          headerRight: () => addQuestionButton
        }}
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
        <Tab.Screen name="Users" component={UsersNavigation} />
        <Tab.Screen name="Profile" component={ProfileNavigation} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
