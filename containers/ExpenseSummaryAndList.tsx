import ExpenseItem from "@components/ExpenseItem";
import ExpenseSummary from "@components/ExpenseSummary";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "@styles";
import { IExpense } from "@types";
import { fakeExpenses } from "@utils/fakeExpenses";
import React from "react";
import { FlatList, Pressable, StyleSheet, View } from "react-native";

interface IExpenseSummaryAndListProps {
  expenses: IExpense[];
  periodName: string;
}

const ExpenseSummaryAndList = ({
  expenses,
  periodName,
}: IExpenseSummaryAndListProps) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.summary}>
        <ExpenseSummary expenses={expenses} periodName={periodName} />
      </View>

      <FlatList
        data={expenses}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate("ExpenseForm", { id: item.id })}
          >
            <ExpenseItem {...item} />
          </Pressable>
        )}
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
