import logo from './logo.svg';
import './App.css';
import ExpenseItem from './ExpenseItem';

function App() {

  const expenses = [
    {id:'el', title: 'News paper', amount: 94.12, date: new Date(2020,7,14)},
    {id:'e2', title: 'New TV', amount: 799.12, date: new Date(2021,7,14)},
    {id:'e3', title: 'Car Insurance', amount: 294.12, date: new Date(2023,7,28)},
    {id:'e4', title: 'New desk(Wooden)', amount: 450.12, date: new Date(2022,5,12)}
    
  ]
  return (
   <div>
    <h1>Let's get started</h1>
    <p> This is also visible</p>
    <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}> </ExpenseItem>
    <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}> </ExpenseItem>
    <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}> </ExpenseItem>
    <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}> </ExpenseItem>
   </div>
  );
}

export default App;
