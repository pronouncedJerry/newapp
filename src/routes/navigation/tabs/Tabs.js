import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { colors } from 'theme'

// stack navigators
import { HomeNavigator, HistoryNavigator } from '../stacks'

const Tab = createBottomTabNavigator()

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({ focused }) => {
        switch (route.name) {
          case 'CurrentGame':
            return (
              <FontIcon
                name="trophy"
                color={focused ? colors.lightPurple : colors.gray}
                size={22}
                solid
              />
            )
          case 'History':
            return (
              <FontIcon
                name="history"
                color={focused ? colors.lightPurple : colors.gray}
                size={22}
                solid
              />
            )
          default:
            return <View />
        }
      },
    })}
    tabBarOptions={{
      activeTintColor: colors.lightPurple,
      inactiveTintColor: colors.gray,
      style: {
        paddingBottom: 5,
        paddingTop: 5,
      },
    }}
    initialRouteName="CurrentGame"
    swipeEnabled={false}
  >
    <Tab.Screen name="CurrentGame" component={HomeNavigator} />
    <Tab.Screen name="History" component={HistoryNavigator} />
  </Tab.Navigator>
)

export default TabNavigator
