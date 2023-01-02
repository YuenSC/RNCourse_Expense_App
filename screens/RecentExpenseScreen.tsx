import ExpenseItem from "@components/ExpenseItem";
import ExpenseSummary from "@components/ExpenseSummary";
import { Colors } from "@styles";
import { fakeExpenses } from "@utils/fakeExpenses";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

interface IRecentExpenseScreenProps {}

const RecentExpenseScreen = (props: IRecentExpenseScreenProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.summary}>
        <ExpenseSummary expenses={fakeExpenses} />
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
