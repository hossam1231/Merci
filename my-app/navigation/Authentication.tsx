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
import * as React from "react";
import { SafeAreaView, StyleSheet, ScrollView, View } from "react-native";
import Rive, { Alignment, Fit } from "rive-react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const resourceName = "flowers";

export default function Authentication({
  // @ts-ignore
  navigation,
}) {
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
        <Center h={windowHeight} w={windowWidth}>
          <Heading
            color="white"
            fontFamily="body"
            fontWeight={100}
            fontSize="4xl"
            style={styles.heading}
          >
            Merci
          </Heading>

          <Button
            position="absolute"
            bottom="5%"
            onPress={() => navigation.navigate("Ripple")}
            bg="#27142A"
            w="90%"
            p="2"
            mt={5}
            borderColor="white"
            borderWidth="1"
          >
            <Text fontWeight={100} fontFamily="body" color="white">
              Get Started
            </Text>
          </Button>
        </Center>
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
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    position: "absolute",
    top: "20%",
  },
});
