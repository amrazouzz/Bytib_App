import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { AuthContext, AuthProvider } from '../context/AuthContext';
import Onboarding from '../screens/onBoarding/OnBoardingOne';
import OnboardingTow from '../screens/onBoarding/OnBoardingTow';
import OnboardingThree from '../screens/onBoarding/OnBoardingThree';
import Auth from '../screens/auth/Auth';
import LoginScreen from '../screens/auth/LoginScreen';
import ForgotScreen from '../screens/auth/ForgotPassword';
import VerificationScreen from '../screens/auth/Verification';
import SignupScreen from '../screens/auth/SignupScreen';
import CompeleteAccountScreen from '../screens/auth/CompleteAccountScreen';
import HomeScreen from '../screens/HomeScreen';
import Articles from '../screens/Articles';
import ArticleDetails from '../screens/ArticleDetails';
import NotificationsScreen from '../screens/Notifications';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryDoctorsScreen from '../screens/CategoryDoctors';
import { ActivityIndicator } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createNativeStackNavigator();

const AppNav = () => {
  const { isLoading, userToken } = useContext(AuthContext);


  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <TailwindProvider>
        <AuthProvider>
          <Stack.Navigator>
          <Stack.Screen name="onBoarding" component={Onboarding} />
                <Stack.Screen name="onBoardingTow" component={OnboardingTow} />
                <Stack.Screen name="onBoardingThree" component={OnboardingThree} />
                <Stack.Screen name="auth" component={Auth} />
                <Stack.Screen name="loginScreen" component={LoginScreen} />
                <Stack.Screen name="forgotScreen" component={ForgotScreen} />
                <Stack.Screen name="verificationScreen" component={VerificationScreen} />
                <Stack.Screen name="signupScreen" component={SignupScreen} />
                <Stack.Screen name="completeAccount" component={CompeleteAccountScreen} />

                <Stack.Screen name="home" component={HomeScreen} />
                <Stack.Screen name="articles" component={Articles} />
                <Stack.Screen name="articleDetails" component={ArticleDetails} />
                <Stack.Screen name="notifications" component={NotificationsScreen} />
                <Stack.Screen name="categories" component={CategoriesScreen} />
                <Stack.Screen name="categoryDoctors" component={CategoryDoctorsScreen} />

                
          </Stack.Navigator>
        </AuthProvider>
      </TailwindProvider>
    </NavigationContainer>
  );
};

export default AppNav;