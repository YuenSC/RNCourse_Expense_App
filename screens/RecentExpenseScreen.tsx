import ExpenseSummaryAndList from "@containers/ExpenseSummaryAndList";
import { fakeExpenses } from "@utils/fakeExpenses";
import React from "react";

const RecentExpenseScreen = () => {
  return (
    <ExpenseSummaryAndList expenses={fakeExpenses} periodName="Last 7 days" />
  );
};

export default RecentExpenseScreen;
