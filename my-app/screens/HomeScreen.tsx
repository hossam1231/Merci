import {
  Input,
  Box,
  HStack,
  Text,
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

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function HomeScreen({
  // @ts-ignore
  navigation,
}) {
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
            onPress={() => navigation.navigate("Profile")}
            icon={<Icon as={AntDesign} name="user" />}
            borderRadius="full"
          />
        </HStack>
        <HStack></HStack>
      </HStack>
      <Box flex="1">
        <HStack w="100%" px="10" alignItems="center">
          <Text mr="5">Instore</Text>
          <Text mr="5">To your door</Text>
          <Text mr="5">Rewards</Text>
        </HStack>
        <HStack justifyContent="center" mt="5" alignItems="center">
          <Input
            placeholder="Search"
            variant="filled"
            width="90%"
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

        <InfoScrollView />

        <HStack p="10" w={windowWidth} h="75">
          <Box px="5" w="50" h="50" bg="black"></Box>

          <Text color="black">View on map</Text>
        </HStack>
      </Box>
    </VStack>
  );
}

export default HomeScreen;
