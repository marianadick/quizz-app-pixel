import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OnboardingScreen from './src/screens/onboarding/index'
import Login from './src/screens/authentication/login/index'
import signUp from './src/screens/authentication/signup';
import passwordRecovery from './src/screens/authentication/password-recovery';
import homeScreen from './src/screens/home';

const AppStack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{headerShown: false}}>
        <AppStack.Screen name="Onboarding" component={OnboardingScreen} />
        <AppStack.Screen name="Login" component={Login}/>
        <AppStack.Screen name="SignUp" component={signUp}/>
        <AppStack.Screen name="passwordRecovery" component={passwordRecovery}/>
        <AppStack.Screen name="HomeScreen" component={homeScreen}/>
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
