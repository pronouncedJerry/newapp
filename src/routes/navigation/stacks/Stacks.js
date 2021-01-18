import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { colors } from 'theme'
import CurrentGame from 'scenes/CurrentGame'
import History from 'scenes/history'
import Details from 'scenes/details'
import Login from 'scenes/login'
import HeaderTitle from './HeaderTitle'
import HeaderRight from './HeaderRight'

// ------------------------------------
// Constants
// ------------------------------------

const Stack = createStackNavigator()
const SignOutStack = createStackNavigator()

const navigationProps = {
  headerTintColor: 'white',
  headerStyle: { backgroundColor: colors.darkPurple },
  headerTitleStyle: { fontSize: 18 },
  headerTitleAlign: 'center',
}

// ------------------------------------
// Navigators
// ------------------------------------

export const HomeNavigator = () => (
  <Stack.Navigator
    initialRouteName="CurrentGame"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="CurrentGame"
      component={CurrentGame}
      options={({ navigation }) => ({
        title: 'Current Game',
        headerTitle: () => <HeaderTitle />,
        headerRight: () => <HeaderRight navigation={navigation} />,
      })}
    />
    <Stack.Screen
      name="Profile"
      component={Details}
      options={({ navigation }) => ({
        title: 'Profile',
        headerTitle: () => <HeaderTitle />,
        headerRight: () => <HeaderRight navigation={navigation} />,
      })}
    />
  </Stack.Navigator>
)

export const HistoryNavigator = () => (
  <Stack.Navigator
    initialRouteName="History"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="History"
      component={History}
      options={({ navigation }) => ({
        title: 'History',
        headerTitle: () => <HeaderTitle />,
        headerRight: () => <HeaderRight navigation={navigation} />,
      })}
    />
    <Stack.Screen
      name="Details"
      component={Details}
      options={{
        title: 'Details',
      }}
    />
  </Stack.Navigator>
)

export const SignOutNavigator = () => (
  <SignOutStack.Navigator initialRouteName="Login" headerShown="false">
    <SignOutStack.Screen
      name="Login"
      component={Login}
      options={{
        title: 'Login',
      }}
    />
  </SignOutStack.Navigator>
)
