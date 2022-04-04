import {
  Input,
  Box,
  HStack,
  Text,
  Center,
  IconButton,
  VStack,
  Icon,
  ScrollView,
} from "native-base";
import React from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import InfoScrollView from "../components/home/InfoScrollView";
import { Dimensions } from "react-native";
import CategoriesScrollView from "../components/home/CategoriesScrollView";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function HomeScreen({
  // @ts-ignore
  navigation,
}) {
  const ToProfile = () => {
    navigation.navigate("Profile");
  };

  return (
    <VStack alignItems="center" p="5" flex="1">
      <HStack h="100">
        <HStack flex="1" justifyContent="space-between" alignItems="center">
          <IconButton
            icon={<Icon as={AntDesign} name="camera" />}
            borderRadius="full"
          />
          {/* shake to use camera */}
          <IconButton
            onPress={() => ToProfile()}
            icon={<Icon as={AntDesign} name="user" />}
            borderRadius="full"
          />
        </HStack>
        <HStack></HStack>
      </HStack>
      <Box flex="1">
        <HStack w="100%" px="5" alignItems="center">
          <Text mr="5">Instore</Text>
          <Text mr="5">To your door</Text>
          <Text mr="5">Rewards</Text>
        </HStack>
        <HStack justifyContent="center" mt="5" alignItems="center">
          <Input
            placeholder="Search"
            variant="filled"
            width="100%"
            borderRadius="10"
            py="1"
            px="2"
            borderWidth="0"
            InputLeftElement={
              <Icon
                ml="2"
                size="4"
                color="gray.400"
                as={<Ionicons name="ios-search" />}
              />
            }
          />
        </HStack>
        <Box h="150">
          <InfoScrollView />
        </Box>
        <HStack w="100%" h="75" bg="black">
          <HStack
            alignItems="center"
            px="5"
            justifyContent="space-between"
            flex="1"
          >
            <Box h="30" w="30" bg="white">
              <IconButton />
            </Box>

            <Box>
              <Text>Go to map view</Text>
              <Text>See pickup options near you</Text>
            </Box>

            <Box
              justifyContent="center"
              alignItems="center"
              h="30"
              w="30"
              bg="white"
            >
              <IconButton
                onPress={() => navigation.navigate("Map")}
                icon={<Icon as={AntDesign} name="arrowright" />}
                borderRadius="full"
              />
            </Box>
          </HStack>
        </HStack>
        <Box h="150">
          <CategoriesScrollView />
        </Box>
        <Center flex="1" bg="black">
          <Text>oh no!</Text>
          <Text>You have no favorites</Text>
          <IconButton
            icon={<Icon as={AntDesign} name="hearto" />}
            borderRadius="full"
          />
        </Center>
      </Box>
    </VStack>
  );
}

export default HomeScreen;
