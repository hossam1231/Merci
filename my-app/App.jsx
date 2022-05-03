import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Box, NativeBaseProvider } from "native-base";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import SearchScreen from "./screens/search/SearchScreen";
import Test from "./test/src/test/Test";
import Navigation from "./navigation/Navigation";

export default function App() {
	const isLoadingComplete = useCachedResources();
	const colorScheme = useColorScheme();

	if (!isLoadingComplete) {
		return null;
	} else {
		return (
			<NativeBaseProvider>
				<SafeAreaProvider>
					<Navigation />
					{/* <SearchScreen /> */}

					{/* ORRRRR */}

					{/* <Test/> */}

					<StatusBar />
				</SafeAreaProvider>
			</NativeBaseProvider>
		);
	}
}