import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';

export default function ExpenseItem(props) {

    return (
      <div className="expense-item" key={props.id}>
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </div>
    );
}

