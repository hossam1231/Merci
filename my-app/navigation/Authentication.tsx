import { Text, View } from "react-native";
import React, { Component } from "react";
import { useSelector } from "react-redux";
import { Box, Center, HStack, ZStack } from "native-base";
import Rive from "rive-react-native";

const resourceName = "flowers"; // file truck_v7.riv

const Authentication = () => {
  return (
    <Box flex="1">
      <Box flex="1">
        <Rive
          autoplay={true}
          resourceName={resourceName}
          style={{ width: 1080, height: 2340 }}
        />
      </Box>
    </Box>
  );
};

export default Authentication;
