import React, { useRef, useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { store, persistor } from "./src/state/store";
import { NativeBaseProvider, extendTheme } from "native-base";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { Button, Text } from "react-native";
import { withAuthenticator } from "aws-amplify-react-native";
import Amplify from "aws-amplify";
import awsconfig from "./src/aws-exports";
import Authentication from "./navigation/Authentication";
Amplify.configure(awsconfig);

const theme = extendTheme({
  fontConfig: {
    Manrope: {
      100: {
        normal: "ManropeExtraLight",
      },
      200: {
        normal: "ManropeLight",
      },
      300: {
        normal: "ManropeMedium",
      },
      400: {
        normal: "ManropeRegular",
      },
      500: {
        normal: "ManropeSemibold",
      },
      600: {
        normal: "ManropeBold",
      },
      700: {
        normal: "ManropeExtraBold",
      },
    },
  },

  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    heading: "Manrope",
    body: "Manrope",
    mono: "Manrope",
  },
});

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <SafeAreaProvider>
            <NativeBaseProvider theme={theme}>
              <Navigation colorScheme={colorScheme} />
              <StatusBar />
            </NativeBaseProvider>
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
