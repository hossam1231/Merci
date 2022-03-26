import React, { useState } from "react";
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Center,
} from "native-base";
import Rive, { Alignment, Fit } from "rive-react-native";
import { SafeAreaView, StyleSheet, ScrollView, View } from "react-native";

const resourceName = "authentication";

const SignInScreen = (
  // @ts-ignore
  navigation
) => {
  const [username, setUsername] = useState(String);
  const [password, setPassword] = useState(String);
  const [email, setEmail] = useState();
  const [phone_number, setPhone_number] = useState();
  const [fit, setFit] = React.useState(Fit.Cover);
  const [alignment, setAlignment] = React.useState(Alignment.Center);

  return (
    <Box flex="1" bg="#33203A">
      <Center w="100%">
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Box justifyContent="center" alignItems="center">
            <Rive
              alignment={alignment}
              autoplay={true}
              style={styles.animation}
              fit={fit}
              resourceName={resourceName}
            />
          </Box>

          <Heading
            size="lg"
            fontWeight="600"
            color="white"
            _dark={{
              color: "white",
            }}
          >
            Welcome
          </Heading>
          <Heading
            mt="1"
            _dark={{
              color: "white",
            }}
            color="white"
            fontWeight="medium"
            size="xs"
          >
            Sign in to continue!
          </Heading>

          <VStack space={3} mt="2">
            <FormControl>
              <FormControl.Label>
                <Text color="white">Email ID</Text>
              </FormControl.Label>
              <Input />
            </FormControl>
            <FormControl>
              <FormControl.Label>
                <Text color="white">Password</Text>
              </FormControl.Label>
              <Input type="password" />
              <Link
                _text={{
                  fontSize: "xs",
                  fontWeight: "500",
                  color: "white",
                }}
                alignSelf="flex-end"
                mt="1"
              >
                Forgot Password?
              </Link>
            </FormControl>
            <Button mt="2" colorScheme="indigo">
              Sign in
            </Button>
            <HStack alignItems="center" mt="6" justifyContent="center">
              <Text
                fontSize="sm"
                color="white"
                _dark={{
                  color: "white",
                }}
              >
                I'm a new user.{" "}
              </Text>

              <Button
                onPress={() => navigation.navigate("SignUp")}
                variant="ghost"
              >
                <Text color="white" underline>
                  Sign Up
                </Text>
              </Button>
            </HStack>
          </VStack>
        </Box>
      </Center>
    </Box>
  );
};

const styles = StyleSheet.create({
  animation: {
    height: 270,
    width: 270,
  },
});

export default SignInScreen;
