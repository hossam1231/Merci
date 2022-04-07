import React, { useState, useEffect } from "react";
import { StyleSheet, View, Dimensions, Box, Button } from "react-native";
import { Fab, Icon, Text } from "native-base";
import MapView, {
  AnimatedRegion,
  Animated,
  Marker,
  MarkerAnimated,
} from "react-native-maps";
import { MaterialIcons } from "@expo/vector-icons";
import { Platform } from "react-native";
import * as Location from "expo-location";

export function Map() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
      <Fab
        w="30%"
        bg="#27142A"
        placement="bottom-right"
        onPress={() => console.log(location)}
        icon={<MaterialIcons name="my-location" size={24} color="white" />}
      ></Fab>
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
