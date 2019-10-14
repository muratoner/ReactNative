import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createDrawerNavigator } from 'react-navigation-drawer'
import ScreenFour from './screens/ScreenFour'
import ScreenThree from './screens/ScreenThree'
import ScreenTwo from './screens/ScreenTwo'
import ScreenOne from './screens/ScreenOne'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Settings from './screens/Settings'

export default createAppContainer(createDrawerNavigator({
	Home: ScreenOne,
	ScreenTwo: ScreenTwo,
	ScreenThree: ScreenThree,
	ScreenFour: ScreenFour,
	Settings: Settings
}))
