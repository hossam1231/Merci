import {
  Input,
  Box,
  HStack,
  Text,
  IconButton,
  Icon,
  ScrollView,
} from "native-base";
import React from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

function HomeScreen({
  // @ts-ignore
  navigation,
}) {
  return (
    <Box p="5" flex="1">
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
        <HStack w="100%" px="5" alignItems="center">
          <Text mr="5">Instore</Text>
          <Text mr="5">Delivery</Text>
        </HStack>
        <HStack mt="5" alignItems="center">
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

        <ScrollView
          horizontal
          h="80"
          mt="5"
          _contentContainerStyle={{
            mb: "4",
          }}
        >
          <Box flex="1" bg="black"></Box>
        </ScrollView>
      </Box>
    </Box>
  );
}

export default HomeScreen;
