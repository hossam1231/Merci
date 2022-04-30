import {
  Box,
  Icon,
  Text,
  IconButton,
  Center,
  HStack,
} from "native-base";
import React from "react";
import {
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";
import { SearchBar } from "../home/HomeScreen";
import { useNavigation } from "@react-navigation/native";

const SearchScreen = () => {
  return (
    <Box safeArea flex="1">
      <SearchSegment />
      <ResultsBox />
      <ToCamera />
    </Box>
  );
};

export const ToCamera = () => {
  return (
    <>
      <HStack>
        <Box>
          <Text>To camera</Text>
        </Box>

        <Box>
          <Text>Upload</Text>
        </Box>
      </HStack>
    </>
  );
};

export const ResultsBox = () => {
  return (
    <Box flex="1">
      <Center flex="1">
        <Icon as={Ionicons} name="search" />
        <Text>You have no recent searches</Text>
      </Center>
    </Box>
  );
};

export const SearchSegment = () => {
  const navigation = useNavigation();
  return (
    <HStack
      justifyContent="space-between"
      alignItems="center"
    >
      <IconButton
        ml="2"
        icon={
          <Icon
            as={AntDesign}
            name="leftcircle"
          />
        }
        borderRadius="full"
        _icon={{
          color: "black",
          size: "md",
        }}
      />
      <SearchBar />
    </HStack>
  );
};

export default SearchScreen;
