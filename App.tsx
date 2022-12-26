import { NavigationContainer } from "@react-navigation/native";

import RootStack from "./navigation/RootStack";
import "react-native-gesture-handler";

const App = () => (
  <NavigationContainer>
    <RootStack />
  </NavigationContainer>
);

export default App;
