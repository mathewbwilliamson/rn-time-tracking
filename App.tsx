import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { useStore } from "./stores/timesStore";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const { getItem, setItem } = useAsyncStorage("@times");
  const { setTimes, times } = useStore();

  React.useEffect(() => {
    // const data = seedData;
    getItem((err, result) => setTimes(JSON.parse(result || "")));
    // setTimes(data);
  }, []);

  React.useEffect(() => {
    if (!!times) {
      setItem(JSON.stringify(times));
    }
  }, [times]);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
