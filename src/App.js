import ExpenseItem from "./components/ExpenseItem";

export default function App() {

  const currentDate = new Date().toLocaleDateString("pt-br")

  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: currentDate,
    },
    { id: "e2", title: "New TV", amount: 799.49, date: currentDate },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: currentDate,
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: currentDate,
    },
  ];

  return (
    <div className="App">
      {/* <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      /> */}
      {expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
}
