import { Colors } from "@styles";
import { formatDollar } from "@utils/formatDollar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface IExpenseSummaryProps {
  amount: number;
}

const ExpenseSummary = ({ amount }: IExpenseSummaryProps) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text]}>Total</Text>
      <Text style={[styles.text]}>{formatDollar(amount)}</Text>
    </View>
  );
};

export default ExpenseSummary;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.primary50,
    borderRadius: 8,
    padding: 10,
  },

  text: {
    color: Colors.primary500,
  },
});
