import ExpenseSummaryAndList from "@containers/ExpenseSummaryAndList";
import { fakeExpenses } from "@utils/fakeExpenses";
import React from "react";

interface IRecentExpenseScreenProps {}

const RecentExpenseScreen = (props: IRecentExpenseScreenProps) => {
  return (
    <ExpenseSummaryAndList expenses={fakeExpenses} periodName="Last 7 days" />
  );
};

export default RecentExpenseScreen;
