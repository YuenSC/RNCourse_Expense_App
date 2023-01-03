import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "@styles";
import { IRootStackScreenProps } from "@types";
import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

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
    <View style={styles.container}>
      <Text style={styles.text}>ExpenseFormScreen</Text>
      <View style={styles.separator} />
      <TouchableOpacity>
        <FontAwesome name="trash-o" size={36} color="red" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary700,
    alignItems: "center",
  },
  text: {
    color: "white",
  },
  separator: {
    height: 1,
    width: 300,
    backgroundColor: Colors.primary100,
    marginVertical: 10,
  },
});

export default ExpenseFormScreen;
