import * as React from "react";
import { Box } from "native-base";
import { StyleSheet } from "react-native";

import { RootTabScreenProps } from "../types";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return <Box flex="1"></Box>;
}
