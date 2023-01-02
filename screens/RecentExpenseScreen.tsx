import ExpenseItem from "@components/ExpenseItem";
import ExpenseSummary from "@components/ExpenseSummary";
import { Colors } from "@styles";
import { fakeExpenses } from "@utils/fakeExpenses";
import React, { useMemo } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

interface IRecentExpenseScreenProps {}

const RecentExpenseScreen = (props: IRecentExpenseScreenProps) => {
  const totalExpenseAmount = useMemo(
    () =>
      Math.round(fakeExpenses.reduce((prev, curr) => curr.amount + prev, 0)),
    []
  );

  return (
    <View style={styles.container}>
      <View style={styles.summary}>
        <ExpenseSummary amount={totalExpenseAmount} />
      </View>

      <FlatList
        data={fakeExpenses}
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

export default RecentExpenseScreen;
