// App.js
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GetStarted from './pages/GetStarted';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { View } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="GetStarted" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="GetStarted" component={GetStarted} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: '',
              headerShown: true,
              headerLeft: () => (
                <View style={{ paddingLeft: 16 }}>
                  <MaterialIcons name="menu" size={24} color="black" />
                </View>
              ),
              headerRight: () => (
                <View style={{ paddingRight: 16 }}>
                  <MaterialIcons name="shopping-cart" size={24} color="black" />
                </View>
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
