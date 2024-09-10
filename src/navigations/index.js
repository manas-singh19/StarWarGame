 
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
 

const Stack = createNativeStackNavigator();

import Dashboard from '../screens/Dashboard/index';
 
 import Datails from '../screens/Details';

const AppStack = ()=>{
    return <NavigationContainer >
          <Stack.Navigator screenOptions={{ headerShown: false,}} initialRouteName="Dashboard">
            <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown:false, title: 'Dashboard', }}/>
            <Stack.Screen name="Datails" component={Datails} options={{headerShown:false, title: 'Datails', }}/>
          </Stack.Navigator>
      </NavigationContainer>
}
 

export default AppStack;