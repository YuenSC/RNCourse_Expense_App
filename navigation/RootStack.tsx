import { createStackNavigator } from "@react-navigation/stack";
import ExpenseFormScreen from "@screens/ExpenseFormScreen";
import { RootStackParamList } from "@types";
import React from "react";

import HomeTabs from "./HomeTabs";

const Stack = createStackNavigator<RootStackParamList>();

const RootStack = () => {
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

export default RootStack;