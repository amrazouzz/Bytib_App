import { View, Text } from 'react-native';
import React from 'react';
import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import { StyleSheet } from 'react-native';

const CustomText = (props) => {
  const { style, bold, ...rest } = props;
  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold,
  });

  const defaultStyle = StyleSheet.create({
    defaultText: {
      fontFamily: bold ? 'OpenSans_700Bold' : 'OpenSans_400Regular',
    },
  });

  const mergedStyle = [defaultStyle.defaultText, style];

  if (!fontsLoaded) {
    // Return a placeholder or loading state if the font hasn't loaded yet
    return null;
  }

  return <Text style={mergedStyle} {...rest} />;
};

export default CustomText;
