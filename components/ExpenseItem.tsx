import { Colors } from "@styles";
import { IExpense } from "@types";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ExpenseItem = (props: IExpense) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={[styles.whiteText, styles.bold]}>Test</Text>
        <Text style={[styles.whiteText]}>2022-5-19</Text>
      </View>

      <View style={styles.amountContainer}>
        <Text style={[styles.amountText, styles.bold]}>19.99</Text>
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
    backgroundColor: Colors.white,
    borderRadius: 8,
    justifyContent: "center",
    padding: 10,
  },
  amountText: {
    color: Colors.primary500,
  },

  bold: {
    fontWeight: "bold",
  },
  whiteText: {
    color: Colors.white,
  },
});
