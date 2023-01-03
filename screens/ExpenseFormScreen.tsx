import { IRootStackScreenProps } from "@types";
import React, { useLayoutEffect } from "react";
import { Text, View } from "react-native";

const ExpenseFormScreen = ({
  navigation,
  route,
}: IRootStackScreenProps<"ExpenseForm">) => {
  const {
    params: { id },
  } = route;

  const isEdit = !!id;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: isEdit ? "Edit Expense" : "Create Expense",
    });
  }, [isEdit, navigation]);

  return (
    <View>
      <Text>ExpenseFormScreen</Text>
      <Text>id : {id}</Text>
    </View>
  );
};

export default ExpenseFormScreen;
