import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/Tabs";
import "react-native-gesture-handler";
import RootNavigation from "./navigation/RootNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}
