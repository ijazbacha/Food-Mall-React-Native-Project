import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RestaurantDetails from '../Screens/RestaurantDetails';
import Home from '../Screens/Home';
import OrderCompleted from '../Screens/OrderCompleted';

const Stack = createNativeStackNavigator();

const screenOption = {
    headerShown: false
}

function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={screenOption}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="RestaurantDetails" component={RestaurantDetails} />
        <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;