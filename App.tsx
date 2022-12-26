import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import AllExpenseScreen from "./screens/AllExpenseScreen";
import RecentExpenseScreen from "./screens/RecentExpenseScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
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
        <Tab.Screen
          name="Recent Expense"
          component={RecentExpenseScreen}
          options={{
            tabBarIcon: ({ color, focused, size }) => (
              <Ionicons
                name={focused ? "ios-calendar-sharp" : "ios-calendar-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
