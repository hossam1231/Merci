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
import * as React from "react";
import { SafeAreaView, StyleSheet, ScrollView, View } from "react-native";
import Rive, { Alignment, Fit } from "rive-react-native";

const resourceName = "flowers";

export default function Authentication() {
  const [fit, setFit] = React.useState(Fit.Cover);
  const [alignment, setAlignment] = React.useState(Alignment.Center);

  return (
    <Box flex="1">
      <Rive
        alignment={alignment}
        autoplay={true}
        style={styles.animation}
        fit={fit}
        resourceName={resourceName}
      />
      <View style={styles.screen}>
        <Heading>Hello</Heading>
      </View>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  animation: {
    width: "100%",
    zIndex: 1,
  },
  screen: {
    width: "100%",
    zIndex: 2,
    position: "absolute",
    top: "50%",
  },
});
