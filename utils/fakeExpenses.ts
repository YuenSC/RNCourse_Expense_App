import { IExpense } from "@types";

const createFakeExpense = (index: number): IExpense => {
  return {
    id: index.toString(),
    amount: Math.random() * 100,
    name: "Item" + index,
    createAt: new Date().toISOString(),
  };
};

export const fakeExpenses = Array.from(Array(10).keys()).map((index) =>
  createFakeExpense(index)
);
