import { StatusBar } from "expo-status-bar";
import { Box } from "native-base";
import {
  Platform,
  StyleSheet,
} from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function ModalScreen() {
  return (
    <Box flex="1" bg="white">
      {/* <StatusBar
        style={
          Platform.OS === "ios" ? "light" : "auto"
        }
      /> */}
    </Box>
  );
}
