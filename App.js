import React from 'react'
import { LogBox } from 'react-native'
import HomeScreen from './screens/HomeScreen'
import ImageDetails from './screens/ImageDetails'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator()

export default function App() {
  LogBox.ignoreLogs(['Warning: ...'])
  LogBox.ignoreAllLogs()
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='MainHome'
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='ImageDetails'
            component={ImageDetails}
            options={{ headerShown: true, title: 'Image Details' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
