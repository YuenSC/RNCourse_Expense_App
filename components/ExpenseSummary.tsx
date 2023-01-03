import { Colors } from "@styles";
import { IExpense } from "@types";
import { formatDollar } from "@utils/formatDollar";
import React, { useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";

interface IExpenseSummaryProps {
  expenses: IExpense[];
  periodName: string;
}

const ExpenseSummary = ({ expenses, periodName }: IExpenseSummaryProps) => {
  const totalExpenseAmount = useMemo(
    () => Math.round(expenses.reduce((prev, curr) => curr.amount + prev, 0)),
    [expenses]
  );

  return (
    <View style={styles.container}>
      <Text style={[styles.text]}>{periodName}</Text>
      <Text style={[styles.text]}>{formatDollar(totalExpenseAmount)}</Text>
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
