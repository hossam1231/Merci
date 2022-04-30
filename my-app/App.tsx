import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  Box,
  NativeBaseProvider,
} from "native-base";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import SearchScreen from "./screens/search/SearchScreen";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NativeBaseProvider>
        <SafeAreaProvider>
          <Box flex="1" safeArea>
            <Navigation />
            {/* <SearchScreen /> */}
          </Box>

          {/* ORRRRR */}

          <StatusBar />
        </SafeAreaProvider>
      </NativeBaseProvider>
    );
  }
}
