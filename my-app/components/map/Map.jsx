import * as React from "react";
import { StyleSheet, Text, View, Dimensions, Box, Button } from "react-native";
import MapView, {
  AnimatedRegion,
  Animated,
  Marker,
  MarkerAnimated,
} from "react-native-maps";

export function Map() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default Map;
