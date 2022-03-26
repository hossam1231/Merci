import { FontAwesome } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ManropeBold: require("../assets/fonts/Manrope/static/Manrope-Bold.ttf"),
        });
        await Font.loadAsync({
          ManropeExtraBold: require("../assets/fonts/Manrope/static/Manrope-ExtraBold.ttf"),
        });
        await Font.loadAsync({
          ManropeExtraLight: require("../assets/fonts/Manrope/static/Manrope-ExtraLight.ttf"),
        });
        await Font.loadAsync({
          ManropeLight: require("../assets/fonts/Manrope/static/Manrope-Light.ttf"),
        });
        await Font.loadAsync({
          ManropeMedium: require("../assets/fonts/Manrope/static/Manrope-Medium.ttf"),
        });
        await Font.loadAsync({
          ManropeRegular: require("../assets/fonts/Manrope/static/Manrope-Regular.ttf"),
        });
        await Font.loadAsync({
          ManropeSemibold: require("../assets/fonts/Manrope/static/Manrope-SemiBold.ttf"),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
