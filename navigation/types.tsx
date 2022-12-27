import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";

/* RootStack Start */
export type RootStackParamList = {
  Home: NavigatorScreenParams<HomeTabParamList>;
  ExpenseForm: { id?: string };
};
export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;
/* RootStack End*/

/* HomeTab Start */
export type HomeTabParamList = {
  "Recent Expense": undefined;
  "All Expense": undefined;
};
export type HomeTabScreenProps<T extends keyof HomeTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<HomeTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;
/* HomeTab End */

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
