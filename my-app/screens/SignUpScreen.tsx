import React, { useState } from "react";
import { View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Auth } from "aws-amplify";
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
import { updateUsername } from "../src/actions/user";

const SignUpScreen = (
  // @ts-ignore
  navigation
) => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState(String);
  const [password, setPassword] = useState(String);
  const [confirmPassword, setConfirmPassword] = useState(String);

  const [email, setEmail] = useState();
  const [phone_number, setPhone_number] = useState();

  const handleChangeUsername = (text: string) => setUsername(text);
  const handleChangePassword = (text: string) => setPassword(text);
  const handleChangeConfirmPassword = (text: string) =>
    setConfirmPassword(text);

  const handleChangeEmail = (text: any) => setEmail(text);
  const handleChangePhone_number = (text: any) => setPhone_number(text);

  const saveUsername = () => {
    // in case the username hasnt been updated
    if (username === "") return;

    dispatch(updateUsername(username));
  };

  async function signUp() {
    if (confirmPassword === password) {
      saveUsername();
      try {
        const { user } = await Auth.signUp({
          username,
          password,
          attributes: {
            email, // optional
            phone_number, // optional - E.164 number convention
            // other custom attributes
          },
        });
        console.log(user);
      } catch (error) {
        console.log("error signing up:", error);
      }
    }
  }

  return (
    <Center bg="#361A34" flex="1">
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading
          size="lg"
          color="white"
          _dark={{
            color: "warmGray.50",
          }}
          fontWeight="semibold"
        >
          Welcome
        </Heading>
        <Heading
          mt="1"
          color="white"
          _dark={{
            color: "warmGray.200",
          }}
          fontWeight="medium"
          size="xs"
        >
          Sign up to continue!
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>
              <Text color="white">Username</Text>
            </FormControl.Label>
            <Input color="white" onChangeText={handleChangeUsername} />
          </FormControl>
          <FormControl>
            <FormControl.Label>
              <Text color="white">Email</Text>
            </FormControl.Label>
            <Input color="white" onChangeText={handleChangeEmail} />
          </FormControl>
          <FormControl>
            <FormControl.Label>
              <Text color="white">Password</Text>
            </FormControl.Label>
            <Input
              color="white"
              onChangeText={handleChangePassword}
              type="password"
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>
              <Text color="white"> Confirm Password</Text>
            </FormControl.Label>
            <Input
              color="white"
              onChangeText={handleChangeConfirmPassword}
              type="password"
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>
              <Text color="white"> Phone number</Text>
            </FormControl.Label>
            <Input color="white" onChangeText={handleChangePhone_number} />
          </FormControl>
          <Button
            onPress={() => {
              signUp();
            }}
            bg="#410824"
            variant="outline"
            mt="2"
            colorScheme="indigo"
          >
            <Text color="white">Sign up</Text>
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default SignUpScreen;
