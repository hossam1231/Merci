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

const SignUpScreen = () => {
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
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
          fontWeight="semibold"
        >
          Welcome
        </Heading>
        <Heading
          mt="1"
          color="coolGray.600"
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
            <FormControl.Label>Username</FormControl.Label>
            <Input onChangeText={handleChangeUsername} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input onChangeText={handleChangeEmail} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input onChangeText={handleChangePassword} type="password" />
          </FormControl>
          <FormControl>
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input onChangeText={handleChangeConfirmPassword} type="password" />
          </FormControl>
          <FormControl>
            <FormControl.Label>Phone number</FormControl.Label>
            <Input onChangeText={handleChangePhone_number} />
          </FormControl>
          <Button mt="2" colorScheme="indigo">
            Sign up
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default SignUpScreen;
