import React, { useEffect, useState, useRef } from "react";
import {
  ZStack,
  Box,
  Text,
  Center,
  Button,
  HStack,
  Link,
  Heading,
  VStack,
  FormControl,
  Input,
} from "native-base";
import { Dimensions } from "react-native";
import { SafeAreaView, StyleSheet, ScrollView, View } from "react-native";
import Rive, { Alignment, Fit, RiveRef } from "rive-react-native";

const resourceName = "authentication";

function RippleScreen({
  // @ts-ignore
  navigation,
}) {
  // const [fit, setFit] = React.useState(Fit.Cover);
  // const [alignment, setAlignment] = React.useState(Alignment.Center);
  const riveRef = useRef<RiveRef>(null);

  const setPressed = () => {
    // riveRef.current?.setInputState("State Machine 1", "Pressed", 0);
    riveRef.current?.fireState("State Machine 1", "Pressed");
  };

  const Exit = () => {
    setTimeout(function () {
      //do what you need here
      navigation.navigate("Home");
    }, 2500);
  };

  useEffect(() => {
    setTimeout(function () {
      //do what you need here
      setPressed();
      Exit();
    }, 1000);
  }, []);

  return (
    <Center bg="#27142A" flex="1">
      <Box style={styles.animation}>
        <Rive
          ref={riveRef}
          autoplay={true}
          style={styles.animation}
          fit={Fit.Cover}
          resourceName={resourceName}
          stateMachineName="State Machine 1"
        />
      </Box>
    </Center>
  );
}

const styles = StyleSheet.create({
  animation: {
    width: 250,
    height: 250,
  },
});

export default RippleScreen;
