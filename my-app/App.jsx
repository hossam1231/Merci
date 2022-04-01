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
import Test from "./Test";
import * as ErrorRecovery from "expo-error-recovery";
Amplify.configure(awsconfig);
import * as Sentry from "sentry-expo";

Sentry.init({
  dsn: "https://a355c9fbd70548debb6088a2482f39be@o1181703.ingest.sentry.io/6295296",
  enableInExpoDevelopment: true,
  debug: true, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
});

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
              {/* <Test /> */}
              <StatusBar />
            </NativeBaseProvider>
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
