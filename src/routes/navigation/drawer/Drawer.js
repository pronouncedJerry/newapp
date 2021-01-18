import React from 'react'
import PropTypes from 'prop-types'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer'
import DrawerMenu from './DrawerMenu'
import TabNavigator from '../tabs'

const Drawer = createDrawerNavigator()

const DrawerMenuContainer = (props) => {
  const { state, ...rest } = props
  const newState = { ...state }
  newState.routes = newState.routes.filter(
    (item) => item.name !== 'CurrentGame',
  )
  return (
    <DrawerContentScrollView {...props}>
      <DrawerMenu {...props} />
      <DrawerItemList state={newState} {...rest} />
    </DrawerContentScrollView>
  )
}

const DrawerNavigator = () => (
  <Drawer.Navigator
    initialRouteName="CurrentGame"
    drawerContent={DrawerMenuContainer}
    drawerPosition="right"
  >
    <Drawer.Screen name="CurrentGame" component={TabNavigator} />
  </Drawer.Navigator>
)

Drawer.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func,
    navigate: PropTypes.func,
  }),
}

Drawer.defaultProps = {
  navigation: {
    dispatch: () => null,
    navigate: () => null,
  },
}

export default DrawerNavigator
