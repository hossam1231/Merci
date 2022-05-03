import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home/HomeScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import { NavigationContainer } from "@react-navigation/native";
import Camera from "../screens/camera/CameraScreen";
import AccountModal from "../screens/account/AccountModal";

const Stack = createNativeStackNavigator();

export default function Navigation({
  navigation,
}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NotFound"
          component={NotFoundScreen}
          options={{ title: "Oops!" }}
        />
        <Stack.Screen
          name="Camera"
          component={Camera}
          options={{ headerShown: false }}
        />

        <Stack.Group
          screenOptions={{
            presentation: "modal",
          }}
        >
          <Stack.Screen
            name="MyAccount"
            component={AccountModal}
            options={{ title: "My account" }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
