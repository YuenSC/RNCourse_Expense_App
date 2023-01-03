import ExpenseItem from "@components/ExpenseItem";
import ExpenseSummary from "@components/ExpenseSummary";
import { Colors } from "@styles";
import { IExpense } from "@types";
import { fakeExpenses } from "@utils/fakeExpenses";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

interface IExpenseSummaryAndListProps {
  expenses: IExpense[];
  periodName: string;
}

const ExpenseSummaryAndList = ({
  expenses,
  periodName,
}: IExpenseSummaryAndListProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.summary}>
        <ExpenseSummary expenses={expenses} periodName={periodName} />
      </View>

      <FlatList
        data={expenses}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        renderItem={({ item }) => <ExpenseItem {...item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary500,
    paddingHorizontal: 20,
  },

  summary: {
    marginBottom: 20,
  },
});

export default ExpenseSummaryAndList;
