import { Colors } from "@styles";
import { IExpense } from "@types";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ExpenseItem = ({ amount, createAt, name }: IExpense) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={[styles.whiteText, styles.bold]}>{name}</Text>
        <Text style={[styles.whiteText]}>
          {new Date(createAt).toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </Text>
      </View>

      <View style={styles.amountContainer}>
        <Text style={[styles.amountText, styles.bold]}>
          {Math.round(amount * 100) / 100}
        </Text>
      </View>
    </View>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary400,
    borderRadius: 8,
    padding: 10,

    flexDirection: "row",
    justifyContent: "space-between",
  },

  amountContainer: {
    minWidth: 70,
    backgroundColor: Colors.white,
    borderRadius: 8,
    justifyContent: "center",
    padding: 10,
  },
  amountText: {
    textAlign: "center",
    color: Colors.primary500,
  },

  bold: {
    fontWeight: "bold",
  },
  whiteText: {
    color: Colors.white,
  },
});
