import React, {
  Component,
  useState,
  useMemo,
  useCallback,
  useRef,
} from "react";
import {
  Box,
  Link,
  HStack,
  Heading,
  Switch,
  Input,
  FormControl,
  VStack,
  Center,
  Text,
  Button,
  Icon,
  IconButton,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { updateUser } from "../src/actions/user";
import { Auth } from "aws-amplify";
import { useSelector, useDispatch } from "react-redux";

import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";

function AuthenticationModal({
  // @ts-ignore
  navigation,
  // @ts-ignore
  user,
}) {
  let userState = false;
  const [page, setPage] = useState("splash");

  // redux user state

  // ref
  const bottomSheetRef = useRef(BottomSheet);

  // variables
  const snapPoints = useMemo(() => ["90%", "90%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  if (userState == false) {
    return (
      // sign in
      <Box bg="#27142A" flex="1">
        <BottomSheet
          // @ts-ignore
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
        >
          <Center p="5" flex="1">
            {page == "splash" && (
              <Splash
                // @ts-ignore
                page={page}
                // @ts-ignore
                setPage={setPage}
              />
            )}
            {page == "SignIn" && (
              <SignIn
                // @ts-ignore
                page={page}
                // @ts-ignore
                setPage={setPage}
              />
            )}
            {page == "Create" && (
              <Create
                navigation={navigation}
                // @ts-ignore
                page={page}
                // @ts-ignore
                setPage={setPage}
              />
            )}
          </Center>
        </BottomSheet>
      </Box>
    );
  } else {
    return null;
  }
}

export const Splash = (props: any) => {
  const { setPage, page } = props;

  return (
    <>
      <Heading fontFamily="body" fontWeight={100} fontSize="4xl">
        Merci
      </Heading>
      <Text mt="5" fontWeight={600}>
        Almost there
      </Text>
      <Text mt="5" fontWeight={600}>
        Sign up or log in to continue.
      </Text>
      <Text fontWeight={600}>It only takes a minute.</Text>
      <Box
        borderColor="white"
        borderWidth="1"
        mt="20"
        w="90%"
        h="45px"
        borderRadius="sm"
        bg="#27142A"
      >
        <HStack flex="1" alignItems="center">
          <IconButton
            icon={<Icon as={AntDesign} name="google" color="white" />}
          />

          <Text color="white">Sign in with google</Text>
        </HStack>
      </Box>
      <Box
        borderColor="white"
        borderWidth="1"
        mt="5"
        borderRadius="sm"
        w="90%"
        h="45px"
        bg="#27142A"
      >
        <HStack alignItems="center" flex="1">
          <IconButton
            icon={<Icon as={AntDesign} color="white" name="facebook-square" />}
          />

          <Text color="white">Sign in with facebook</Text>
        </HStack>
      </Box>
      <Box
        borderWidth="1"
        borderRadius="sm"
        mt="5"
        w="90%"
        h="45px"
        bg="#27142A"
      >
        <HStack alignItems="center" flex="1">
          <IconButton
            icon={<Icon as={AntDesign} color="white" name="apple1" />}
          />

          <Text color="white">Sign in with apple</Text>
        </HStack>
      </Box>
      <Text mt="5">or</Text>
      <Button onPress={() => setPage("SignIn")} mt="5" variant="ghost">
        <Text color="#27142A" fontWeight={600}>
          Continue with email
        </Text>
      </Button>
      <Box>
        <Text mt="5">
          By continuing you agree to our T&Cs. Please also check out our Privacy
          Policy.
        </Text>
        <Text mt="2">
          We use your data to offer you a presonalised experience and to better
          understand and improve our services.For more information see here.
        </Text>
      </Box>
    </>
  );
};

export const Create = ({
  // @ts-ignore
  navigation,
}) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState(String);
  const [confirmPassword, setConfirmPassword] = useState(String);
  const [profile, setProfile] = useState();
  const [email, setEmail] = useState();
  const [phone_number, setPhone_number] = useState();
  const [code, setCode] = useState();
  const handleChangeCode = (text: any) => setCode(text);

  const handleChangeUsername = (text: any) => setUsername(text);
  const handleChangePassword = (text: any) => setPassword(text);
  const handleChangeConfirmPassword = (text: string) =>
    setConfirmPassword(text);

  const handleChangeEmail = (text: any) => setEmail(text);
  const handleChangePhone_number = (text: any) => setPhone_number(text);

  const dispatch = useDispatch();

  async function signUp() {
    if (confirmPassword === password) {
      try {
        const { user } = await Auth.signUp({
          // @ts-ignore
          username,
          password,
          attributes: {
            email, // optional
            phone_number, // optional - E.164 number convention
            // other custom attributes
          },
        });

        console.log(user);
        setProfile(
          // @ts-ignore
          user
        );
      } catch (error) {
        console.log("error signing up:", error);
      }
    }
  }

  const saveUser = () => {
    // in case the username hasnt been updated
    dispatch(updateUser(profile));
  };

  async function resendConfirmationCode() {
    try {
      // @ts-ignore
      await Auth.resendSignUp(username);
      console.log("code resent successfully");
    } catch (err) {
      console.log("error resending code: ", err);
    }
  }

  async function confirmSignUp() {
    try {
      // @ts-ignore
      await Auth.confirmSignUp(username, code);
      console.log("confirmed");
      saveUser();
    } catch (error) {
      console.log("error confirming sign up", error);
    }
    navigation.navigate("RippleRev");
  }

  return (
    <>
      {!profile ? (
        <Center w="100%">
          <Box safeArea p="2" w="90%" maxW="290">
            <Heading
              fontFamily="body"
              size="xl"
              color="coolGray.800"
              _dark={{
                color: "warmGray.50",
              }}
              mb="5"
              fontWeight="200"
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
                <FormControl.Label>Email</FormControl.Label>
                <Input onChangeText={handleChangeEmail} />
              </FormControl>
              <FormControl>
                <FormControl.Label>Username</FormControl.Label>
                <Input onChangeText={handleChangeUsername} />
              </FormControl>
              <FormControl>
                <FormControl.Label>Phone number</FormControl.Label>
                <Input onChangeText={handleChangePhone_number} />
              </FormControl>
              <FormControl>
                <FormControl.Label>Password</FormControl.Label>
                <Input onChangeText={handleChangePassword} type="password" />
              </FormControl>
              <FormControl>
                <FormControl.Label>Confirm Password</FormControl.Label>
                <Input
                  onChangeText={handleChangeConfirmPassword}
                  type="password"
                />
              </FormControl>
              <Button
                onPress={() => signUp()}
                bg="#27142A"
                mt="2"
                colorScheme="indigo"
              >
                <Text color="white">Sign up</Text>
              </Button>
            </VStack>
          </Box>
          <HStack mt="2">
            <Text>Bussiness Application</Text>
            <Switch
              onTrackColor="#27142A"
              onThumbColor="white"
              colorScheme="#27142A"
              ml="2"
            />
          </HStack>
        </Center>
      ) : (
        <Center w="100%">
          <Box safeArea p="2" w="90%" maxW="290">
            <Heading
              fontFamily="body"
              size="xl"
              color="coolGray.800"
              _dark={{
                color: "warmGray.50",
              }}
              mb="5"
              fontWeight="200"
            >
              Confirm your email
            </Heading>
            <VStack space={3} mt="5">
              <FormControl>
                <FormControl.Label>
                  <Text>We sent an email containing your code to {email}.</Text>
                </FormControl.Label>
                <Input
                  placeholder="Code"
                  mt="5"
                  onChangeText={handleChangeCode}
                />
              </FormControl>

              <Link onPress={() => resendConfirmationCode()}>
                <Text fontSize="xs">Send a new code?</Text>
              </Link>
            </VStack>
            <Button onPress={() => confirmSignUp()} bg="#27142A" mt="5">
              <Text color="white">Confirm</Text>
            </Button>
          </Box>
        </Center>
      )}
    </>
  );
};

export const SignIn = (props: any) => {
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

  const { page, setPage } = props;

  async function signIn() {
    try {
      // @ts-ignore
      const user = await Auth.signIn(username, password);
    } catch (error) {
      console.log("error signing in", error);
    }
  }

  return (
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading
          size="xl"
          fontFamily="body"
          mb="5"
          fontWeight="200"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
        >
          Welcome
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: "warmGray.200",
          }}
          color="coolGray.600"
          fontWeight="medium"
          fontFamily="body"
          size="xs"
        >
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Username</FormControl.Label>
            <Input onChangeText={handleChangeUsername} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input onChangeText={handleChangePassword} type="password" />
            <Link
              _text={{
                fontSize: "xs",
                fontWeight: "500",
                color: "#27142A",
              }}
              alignSelf="flex-end"
              mt="1"
            >
              Forget Password?
            </Link>
          </FormControl>
          <Button onPress={() => signIn()} bg="#27142A" mt="2">
            <Text color="white">Sign in</Text>
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              I'm a new user.
            </Text>
            <Link
              onPress={() => setPage("Create")}
              _text={{
                color: "#27142A",
                fontWeight: "medium",
                fontSize: "sm",
              }}
              href="#"
            >
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default AuthenticationModal;
