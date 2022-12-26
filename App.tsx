import { NavigationContainer } from "@react-navigation/native";

import RootNavigation from "./navigation/RootNavigation";

import "react-native-gesture-handler";

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}
