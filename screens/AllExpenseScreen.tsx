import ExpenseSummaryAndList from "@containers/ExpenseSummaryAndList";
import { fakeExpenses } from "@utils/fakeExpenses";
import React from "react";

const AllExpenseScreen = () => {
  return <ExpenseSummaryAndList expenses={fakeExpenses} periodName="Total" />;
};

export default AllExpenseScreen;
