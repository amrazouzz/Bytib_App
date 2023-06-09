import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from './screens/onBoarding/OnBoardingOne';
import OnboardingTow from './screens/onBoarding/OnBoardingTow';
import OnboardingThree from './screens/onBoarding/OnBoardingThree';
import Auth from './screens/auth/Auth';
import LoginScreen from './screens/auth/LoginScreen';
import ForgotScreen from './screens/auth/ForgotPassword';
import VerificationScreen from './screens/auth/Verification';
import SignupScreen from './screens/auth/SignupScreen';
import CompeleteAccountScreen from './screens/auth/CompleteAccountScreen';
import HomeScreen from './screens/HomeScreen';
import Articles from './screens/Articles';
import ArticleDetails from './screens/ArticleDetails';
import NotificationsScreen from './screens/Notifications';
import CategoriesScreen from './screens/CategoriesScreen';
import CategoryDoctorsScreen from './screens/CategoryDoctors';
import PasswordReset from './screens/auth/PasswordResset';
import SuccessfulPassword from './screens/auth/SuccessfulPassword';
import ChatScreen from './screens/ChatScreen';
import FavScreen from './screens/FavoritesScreen';
import SidebarScreen from './screens/SidebarScreen';
import MapScreen from './screens/MapScreen';
import DrProfile from './screens/DrProfile';
import BookAppointmentScreen from './screens/booking/BookAppointmentScreen';
import BookingFaild from './screens/booking/BookingFaild';
import BookingSuccess from './screens/booking/BookingSuccess';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <TailwindProvider>
         
        <Stack.Navigator >
        <Stack.Screen name="onBoarding" component={Onboarding} />
                <Stack.Screen name="onBoardingTow" component={OnboardingTow} />
                <Stack.Screen name="onBoardingThree" component={OnboardingThree} />
                <Stack.Screen name="auth" component={Auth} />
                <Stack.Screen name="loginScreen" component={LoginScreen} />
                <Stack.Screen name="forgotScreen" component={ForgotScreen} />
                <Stack.Screen name="passwordReset" component={PasswordReset} />
                <Stack.Screen name="successfulPassword" component={SuccessfulPassword} />
                <Stack.Screen name="verificationScreen" component={VerificationScreen} />
                <Stack.Screen name="signupScreen" component={SignupScreen} />
                <Stack.Screen name="completeAccount" component={CompeleteAccountScreen} />
                <Stack.Screen name='sidebar' component={SidebarScreen} />
                <Stack.Screen name="home" component={HomeScreen} />
                <Stack.Screen name="chat" component={ChatScreen} />
                <Stack.Screen name="map" component={MapScreen} />
                <Stack.Screen name="doctorProfile" component={DrProfile} />
                <Stack.Screen name="bookAppointment" component={BookAppointmentScreen} />
                <Stack.Screen name="bookSuccess" component={BookingSuccess} />
                <Stack.Screen name="bookFail" component={BookingFaild} />
                <Stack.Screen name="favScreen" component={FavScreen} />
                <Stack.Screen name="articles" component={Articles} />
                <Stack.Screen name="articleDetails" component={ArticleDetails} />
                <Stack.Screen name="notifications" component={NotificationsScreen} />
                <Stack.Screen name="categories" component={CategoriesScreen} />
                <Stack.Screen name="categoryDoctors" component={CategoryDoctorsScreen} />

        </Stack.Navigator>
      
      </TailwindProvider>
    </NavigationContainer>
  );
}



