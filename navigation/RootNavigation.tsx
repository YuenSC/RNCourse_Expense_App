import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import ExpenseFormScreen from "../screens/ExpenseFormScreen";
import HomeTabs from "./HomeTabs";
import { RootStackParamList } from "./types";

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ExpenseForm"
        component={ExpenseFormScreen}
        options={{ presentation: "modal", headerLeft: () => null }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
