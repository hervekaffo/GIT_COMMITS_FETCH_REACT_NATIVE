import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { LogBox } from "react-native";

// Navigatiors
import Main from "./Navigation/Main";

//Ignore all the warning popups
LogBox.ignoreAllLogs(true);

export default function App() {
  return (
        <NavigationContainer>
          <Main />
        </NavigationContainer>
  );
}
