import {
  Button,
  Box,
  VStack,
  HStack,
  Icon,
  Text,
  Input,
  ScrollView,
  Badge,
  Heading,
  IconButton,
} from "native-base";
import React, { useState } from "react";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";

export default function HomeScreen() {
  const navigation = useNavigation();

  const [tab, setTab] = useState("Instore");

  return (
    <Box mt="5" p="5">
      <TopBar />
      <TabSwitcher tab={tab} setTab={setTab} />

      <SearchBar />
      <TabView tab={tab} />
    </Box>
  );
}

export const RewardsTab = () => {
  // rewards could be on the map showing who has rewards and how many
  // in addition to products
  return <></>;
};

export const ToYourDoorTab = () => {
  return <></>;
};

export const InstoreTab = () => {
  return (
    <>
      <ForYouSection />
      <GotoCameraButton />
      <QuickLinks />
    </>
  );
};

export const TabView = ({ tab }) => {
  return (
    <>
      {tab == "Instore" && <InstoreTab />}
      {tab == "To your door" && <ToYourDoorTab />}
      {tab == "To your door" && <RewardsTab />}
    </>
  );
};

export const TabSwitcher = ({ tab, setTab }) => {
  function tabSetter(props) {
    setTab(props);
  }

  return (
    <HStack
      justifyContent="space-evenly"
      alignItems="center"
      mt="5"
    >
      <Pressable
        onPress={() => tabSetter("Instore")}
      >
        <Text>Instore</Text>
      </Pressable>

      <Pressable
        onPress={() => tabSetter("To your door")}
      >
        <Text>To your door</Text>
      </Pressable>

      <Pressable
        onPress={() => tabSetter("Rewards")}
      >
        <Text>Rewards</Text>
      </Pressable>
    </HStack>
  );
};

export const QuickLinks = () => {
  const navigation = useNavigation();
  return (
    <Box>
      <Heading color="white">For you</Heading>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{
          py: "5",
        }}
      >
        <Box
          mr="2"
          w="20"
          h="20"
          bg="white"
        ></Box>
        <Box
          mr="2"
          w="20"
          h="20"
          bg="white"
        ></Box>
        <Box
          mr="2"
          w="20"
          h="20"
          bg="white"
        ></Box>
        <Box
          mr="2"
          w="20"
          h="20"
          bg="white"
        ></Box>
        <Box
          mr="2"
          w="20"
          h="20"
          bg="white"
        ></Box>
      </ScrollView>
    </Box>
  );
};

export const GotoCameraButton = () => {
  const navigation = useNavigation();
  return (
    <HStack
      mt="2"
      borderRadius="10"
      p="2"
      alignItems="center"
      justifyContent="space-between"
      mb="5"
      bg="white"
    >
      <VStack>
        <Heading>Go to the Camera</Heading>
        <Text>
          Take a pic of the item or scan the
          barcode
        </Text>
        <Text>for more information !</Text>
      </VStack>

      <IconButton
        ml="2"
        icon={
          <Icon
            as={AntDesign}
            name="rightcircle"
          />
        }
        borderRadius="full"
        _icon={{
          color: "black",
          size: "md",
        }}
      />
    </HStack>
  );
};

export const ForYouSection = () => {
  const navigation = useNavigation();
  return (
    <Box>
      <Heading color="white">For you</Heading>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{
          py: "5",
        }}
      >
        <Box
          mr="2"
          w="40"
          h="20"
          bg="white"
        ></Box>
        <Box
          mr="2"
          w="40"
          h="20"
          bg="white"
        ></Box>
        <Box
          mr="2"
          w="40"
          h="20"
          bg="white"
        ></Box>
        <Box
          mr="2"
          w="30"
          h="20"
          bg="white"
        ></Box>
        <Box
          mr="2"
          w="40"
          h="20"
          bg="white"
        ></Box>
      </ScrollView>
    </Box>
  );
};

export const SearchBar = () => {
  const navigation = useNavigation();
  return (
    <HStack
      mt="5"
      mb="5"
      alignItems="center"
      justifyContent="space-between"
    >
      <Input
        width="80%"
        placeholder="Search"
        variant="filled"
        borderRadius="10"
        py="2"
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
      <IconButton
        icon={
          <Icon as={AntDesign} name="ellipsis1" />
        }
        borderRadius="full"
        _icon={{
          color: "white",
          size: "md",
        }}
      />
    </HStack>
  );
};

export const TopBar = () => {
  const navigation = useNavigation();

  return (
    <HStack
      alignItems="center"
      justifyContent="space-between"
    >
      <Box>
        <IconButton
          onPress={() =>
            navigation.navigate("Camera")
          }
          icon={
            <Icon as={AntDesign} name="camera" />
          }
          borderRadius="full"
          _icon={{
            color: "white",
            size: "md",
          }}
          // _hover={{
          //   bg: "orange.600:alpha.20",
          // }}
          // _pressed={{
          //   bg: "orange.600:alpha.20",
          //   _icon: {
          //     name: "emoji-flirt",
          //   },
          //   _ios: {
          //     _icon: {
          //       size: "2xl",
          //     },
          //   },
          // }}
          // _ios={{
          //   _icon: {
          //     size: "2xl",
          //   },
          // }}
        />
      </Box>

      <Box>
        <Text>NN1 4LA | 5KM</Text>
      </Box>

      <HStack>
        <IconButton
          mr="1"
          icon={
            <Icon as={AntDesign} name="heart" />
          }
          borderRadius="full"
          _icon={{
            color: "white",
            size: "md",
          }}
        />
        <IconButton
          onPress={() =>
            navigation.navigate("Modal")
          }
          icon={
            <Icon as={AntDesign} name="smileo" />
          }
          borderRadius="full"
          _icon={{
            color: "white",
            size: "md",
          }}
        />
      </HStack>
    </HStack>
  );
};
