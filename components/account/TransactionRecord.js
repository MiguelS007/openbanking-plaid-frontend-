const TransactionRecord = ({date, amount, currency, name, categories, transactionId, type}) => {
  return (
      <tr>
          <td>{date ? date : 'N/A'}</td>
          <td>{amount ? amount : 'N/A'} {currency ? currency : 'N/A'}</td>
          <td>{name ? name : 'N/A'}</td>
          <td>{categories ? categories.join(', ') : 'N/A'}</td>
          <th>{transactionId ? transactionId : 'N/A'}</th>
          <td>{type ? type : 'N/A'}</td>
      </tr>
  )
}


export default TransactionRecord