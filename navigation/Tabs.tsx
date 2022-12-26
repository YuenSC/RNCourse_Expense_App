import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import AllExpenseScreen from "../screens/AllExpenseScreen";
import RecentExpenseScreen from "../screens/RecentExpenseScreen";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const navigation = useNavigation();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Recent Expense"
        component={RecentExpenseScreen}
        options={{
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 15 }}
              onPress={() => {
                navigation.navigate("Expense Form");
              }}
            >
              <AntDesign name="plus" size={24} color="black" />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ color, focused, size }) => (
            <Ionicons
              name={focused ? "ios-calendar-sharp" : "ios-calendar-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="All Expense"
        component={AllExpenseScreen}
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <MaterialCommunityIcons
              name={focused ? "timer-sand-full" : "timer-sand-empty"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({});
