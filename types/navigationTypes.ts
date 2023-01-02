import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";

/* RootStack Start */
export type IRootStackParamList = {
  Home: NavigatorScreenParams<IHomeTabParamList>;
  ExpenseForm: { id?: string };
};
export type IRootStackScreenProps<T extends keyof IRootStackParamList> =
  StackScreenProps<IRootStackParamList, T>;
/* RootStack End*/

/* HomeTab Start */
export type IHomeTabParamList = {
  "Recent Expense": undefined;
  "All Expense": undefined;
};
export type IHomeTabScreenProps<T extends keyof IHomeTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<IHomeTabParamList, T>,
    IRootStackScreenProps<keyof IRootStackParamList>
  >;
/* HomeTab End */

declare global {
  namespace ReactNavigation {
    interface RootParamList extends IRootStackParamList {}
  }
}
