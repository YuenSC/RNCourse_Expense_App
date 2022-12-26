import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "./Tabs";
import ExpenseFormScreen from "../screens/ExpenseFormScreen";

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Expense Form"
        component={ExpenseFormScreen}
        options={{ presentation: "modal", headerLeft: () => null }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
