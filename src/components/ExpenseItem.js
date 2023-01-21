import './ExpenseItem.css'

export default function ExpenseItem(props) {

    return (
      <div className="expense-item" key={props.id}>
        <div>{props.date}</div>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </div>
    );
}
