import { View, Text } from 'react-native'
import React from 'react'
import BottomTab from './src/navigation/BottomTab/BottomTab';
import { NavigationContainer } from '@react-navigation/native';
import Stack from './src/navigation/Stack/Stack';
import { Provider } from 'react-redux';
import store from './src/app/store';


const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <Stack />
    </NavigationContainer>
    </Provider>
    
         
  )
}

export default App