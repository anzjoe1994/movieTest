import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import Navigation from "./src/navigation";
import configureStore from "./src/redux/store";
const store = configureStore();
export default function App() {
   
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigation/>
        <StatusBar />
      </SafeAreaProvider>
    </Provider>
  );
}

