import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View
} from "react-native";
import * as Updates from 'expo-updates';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import Navigation from "./src/navigation";
import configureStore from "./src/redux/store";
const store = configureStore();
export default function App() {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function fetchUpdate() {
      try {
        const updateAvailable = await Updates.checkForUpdateAsync()
        if (updateAvailable.isAvailable) {
          await Updates.fetchUpdateAsync()
          await Updates.reloadAsync()
        }
        setLoading(false)
      } catch (error) {
        setLoading(false)
      }
    }
    fetchUpdate()
  }, []);
  if (loading) {
    return <View />
  }
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigation />
        <StatusBar />
      </SafeAreaProvider>
    </Provider>
  );
}

