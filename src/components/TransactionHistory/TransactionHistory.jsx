import css from "./Transaction.module.css";
import clsx from "clsx";

export default function TransactionHistory({ items }) {
  return (
    <>
      <table className={css.container}>
        <thead className={css.thead}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody className={css.tbody}>
          {items.map(({ id, type, amount, currency }) => {
            const classTable = clsx(css.colorTable, {
              [css.invoice]: type === "invoice",
              [css.payment]: type === "payment",
              [css.withdrawal]: type === "withdrawal",
              [css.deposit]: type === "deposit",
            });
            return (
              <tr key={id}>
                <td className={classTable}>{type}</td>
                <td className={classTable}>{amount}</td>
                <td className={classTable}>{currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
