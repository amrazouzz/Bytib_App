import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, {createContext, useEffect, useState} from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { API_URL } from "../api/api";
import HomeScreen from "../screens/HomeScreen";
import Articles from "../screens/Articles";
import ArticleDetails from "../screens/ArticleDetails";
import NotificationsScreen from "../screens/Notifications";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryDoctorsScreen from "../screens/CategoryDoctors";
import Onboarding from "../screens/onBoarding/OnBoardingOne";
import OnboardingTow from "../screens/onBoarding/OnBoardingTow";
import OnboardingThree from "../screens/onBoarding/OnBoardingThree";
import Auth from "../screens/auth/Auth";
import LoginScreen from "../screens/auth/LoginScreen";
import ForgotScreen from "../screens/auth/ForgotPassword";
import VerificationScreen from "../screens/auth/Verification";
import SignupScreen from "../screens/auth/SignupScreen";
import CompeleteAccountScreen from "../screens/auth/CompleteAccountScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export const AuthContext = createContext();

const Stack = createNativeStackNavigator();

export const AuthProvider = ({children}) => {
    const [isLoading,setIsloading] = useState(false) 
    const [userToken, setUserToken] = useState(null);
    const [userInfo, setUserInfo ] = useState(null);
    const navigation = useNavigation();

    const login = (email, password) => {
        setIsloading(true);
        axios.post(`${API_URL}/authorize/`, {
            email,
            password
        }).then(res => {
            let userInfo = res.data;
            setUserInfo(userInfo);
            setUserToken(userInfo.access);
            AsyncStorage.setItem('userToken', userInfo.access);
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            console.log(userToken)
            setIsloading(false);
        }).catch(error => {
            console.log(error);
            setIsloading(false);
        });

       
    }

    const logout = () => {
        setIsloading(true);
        setUserToken(null);
        AsyncStorage.removeItem('userToken');
        AsyncStorage.removeItem('userInfo');
        navigation.navigate('loginScreen');
        setIsloading(false);
      };
      

    useEffect(() => {
        console.log('userToken changed:', userToken);
      }, [userToken]);

    const isLoggedIn = async () => {
        try {
            setIsloading(true)
            let userToken = await AsyncStorage.getItem('userToken')
            let userInfo = JSON.parse(await AsyncStorage.getItem('userInfo'))
            setUserToken(userToken)

            if (userInfo) {
                setUserInfo(userInfo)
            }
            setIsloading(false)
        } catch (error) {
            console.log(`isLoggedIn error ${error}`)
        }
    }


    useEffect(() => {
        isLoggedIn();
    }, [])
    
    return(
        <NavigationContainer>
            <AuthContext.Provider value={{login, logout, isLoading, userToken}}>
                <Stack.Navigator>
                    <Stack.Screen name="home" component={HomeScreen} />
                    <Stack.Screen name="articles" component={Articles} />
                    <Stack.Screen name="articleDetails" component={ArticleDetails} />
                    <Stack.Screen name="notifications" component={NotificationsScreen} />
                    <Stack.Screen name="categories" component={CategoriesScreen} />
                    <Stack.Screen name="categoryDoctors" component={CategoryDoctorsScreen} />
                    <Stack.Screen name="onBoarding" component={Onboarding} />
                    <Stack.Screen name="onBoardingTow" component={OnboardingTow} />
                    <Stack.Screen name="onBoardingThree" component={OnboardingThree} />
                    <Stack.Screen name="auth" component={Auth} />
                    <Stack.Screen name="loginScreen" component={LoginScreen} />
                    <Stack.Screen name="forgotScreen" component={ForgotScreen} />
                    <Stack.Screen name="verificationScreen" component={VerificationScreen} />
                    <Stack.Screen name="signupScreen" component={SignupScreen} />
                    <Stack.Screen name="completeAccount" component={CompeleteAccountScreen} />
</Stack.Navigator>
</AuthContext.Provider>
</NavigationContainer>
)
}