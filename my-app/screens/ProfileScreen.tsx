import React, {
  Component,
  useState,
  useMemo,
  useCallback,
  useRef,
} from "react";
import {
  Box,
  HStack,
  Heading,
  Center,
  Text,
  Button,
  Icon,
  IconButton,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";

import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";

function ProfileScreen({
  // @ts-ignore
  navigation,
}) {
  let userState = false;

  // statereact-native-reanimated react-native-gesture-handler

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
            <Heading fontFamily="body" fontWeight={100} fontSize="4xl">
              Merci
            </Heading>
            <Text mt="" fontWeight={600}>
              Almost there
            </Text>
            <Text mt="5" fontWeight={600}>
              Sign up or log in to continue.
            </Text>
            <Text fontWeight={600}>It only takes a minute.</Text>
            <Box mt="20" w="90%" h="40px" bg="#27142A">
              <HStack flex="1" alignItems="center">
                <IconButton icon={<Icon as={AntDesign} name="google" />} />

                <Text>Sign in with google</Text>
              </HStack>
            </Box>
            <Box mt="5" w="90%" h="40px" bg="#27142A">
              <HStack alignItems="center" flex="1">
                <IconButton
                  icon={<Icon as={AntDesign} name="facebook-square" />}
                />

                <Text>Sign in with facebook</Text>
              </HStack>
            </Box>
            <Box mt="5" w="90%" h="40px" bg="#27142A">
              <HStack alignItems="center" flex="1">
                <IconButton icon={<Icon as={AntDesign} name="apple1" />} />

                <Text>Sign in with apple</Text>
              </HStack>
            </Box>
            <Text mt="5">or</Text>
            <Button mt="5" variant="ghost">
              <Text fontWeight={600}>Continue with email</Text>
            </Button>
            <Text mt="5">
              By continuing you agree to our T&Cs. Please also check out our
              Privacy Policy.
            </Text>
            <Text mt="2">
              We use your data to offer you a presonalised experience and to
              better understand and improve our services.For more information
              see here.
            </Text>
          </Center>
        </BottomSheet>
      </Box>
    );
  } else {
    return <Box flex="1" bg="black"></Box>;
  }
}

export default ProfileScreen;
