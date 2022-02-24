import React, { useRef, useEffect } from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Code,
} from "native-base";
import { Animated, SafeAreaView, StyleSheet } from "react-native";

export const Auth = ({ navigation }: { navigation: any }) => {
  // change to https://stackoverflow.com/questions/63132548/react-navigation-5-error-binding-element-navigation-implicitly-has-an-any-ty
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1 as number,
      duration: 6000 as number,
      useNativeDriver: false,
    }).start();
    navigation.navigate("Dashboard");
  };

  useEffect(() => {
    fadeIn();
  }, []);
  return (
    <VStack flex="1" justifyContent="center" alignItems="center">
      <Animated.View
        style={[
          {
            // Bind opacity to animated value
            opacity: fadeAnim,
          },
        ]}
      >
        <Heading size="4xl">Merci</Heading>
        <Text>Shopping Companion</Text>
      </Animated.View>
    </VStack>
  );
};

export default Auth;
