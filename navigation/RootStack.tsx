import { createStackNavigator } from "@react-navigation/stack";
import ExpenseFormScreen from "@screens/ExpenseFormScreen";
import { Colors } from "@styles";
import { IRootStackParamList } from "@types";
import React from "react";

import HomeTabs from "./HomeTabs";

const Stack = createStackNavigator<IRootStackParamList>();

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
        options={{
          presentation: "modal",
          headerLeft: () => null,
          headerStyle: {
            backgroundColor: Colors.primary500,
          },
          headerTitleStyle: {
            color: Colors.white,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
