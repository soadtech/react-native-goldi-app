import React from 'react';
import routesStack from './src/routes/stack'
import routesTab from './src/routes/tab'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Image } from 'react-native';
import { colors } from './src/utils/theme';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const tabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="inicio">
      {routesTab.map(route => (
        <Tab.Screen key={route.path} name={route.path} component={route.component} options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => {
            return <Text style={{ color: focused ? colors.primary : colors.gray, fontSize: 12 }}></Text>
          },
          tabBarIcon: ({ focused }) => {
            return <Image style={{ width: 30, height: 30, marginTop: 25 }} resizeMode='contain' source={focused ? route.activeIcon : route.icon} />
          }
        }} />
      ))}
    </Tab.Navigator>
  )
}
export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='home'>
        {routesStack.map(route => (
          <Stack.Screen key={route.path} name={route.path} component={route.component} />
        ))}
        <Stack.Screen name='home' component={tabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
