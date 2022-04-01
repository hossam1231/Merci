import {
  Center,
  ScrollView,
  VStack,
  HStack,
  useTheme,
  Heading,
} from "native-base";
import React from "react";

const HomeScreen = () => {
  const { colors } = useTheme();
  return (
    <ScrollView
      mt="5"
      h="80"
      _contentContainerStyle={{
        px: "20px",
        mb: "4",
        minW: "72",
      }}
    >
      <HStack w="100%" flex="1">
        {Object.keys(colors.cyan).map((key, index) => {
          if (index >= 1 && index <= 5)
            return (
              <Center flex="1" py="4" bg={`cyan.${key}`}>
                {key}
              </Center>
            );
        })}
      </HStack>
    </ScrollView>
  );
};

export default HomeScreen;
