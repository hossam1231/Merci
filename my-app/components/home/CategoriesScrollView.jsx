import {
  Center,
  ScrollView,
  VStack,
  HStack,
  useTheme,
  Heading,
} from "native-base";
import React from "react";

const CategoriesScrollView = () => {
  const { colors } = useTheme();
  return (
    <ScrollView
      mt="5"
      horizontal
      showsHorizontalScrollIndicator={false}
      _contentContainerStyle={{
        px: "20px",
        mb: "4",
        minW: "72",
      }}
    >
      <HStack w="100%" h="110">
        {Object.keys(colors.cyan).map((key, index) => {
          if (index >= 1 && index <= 5)
            return (
              <Center
                key={key}
                mx="2"
                w="250"
                h="100"
                py="4"
                bg={`cyan.${key}`}
              >
                {key}
              </Center>
            );
        })}
      </HStack>
    </ScrollView>
  );
};

export default CategoriesScrollView;
