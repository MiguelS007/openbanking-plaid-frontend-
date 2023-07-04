import { useRouter } from 'next/router'

import nestedObjectCheck from '../../libs/nestedObjectCheck'
import swrRequest from '../../libs/requests/swrRequest'

import Loader from '../loader/Loader'
import ErrorItem from '../ErrorItem'
import TransactionRecord from './TransactionRecord'


const TransactionsTable = () => {
    const router = useRouter()
    const { accountId } = router.query
    const data = swrRequest(`/api/transactions/${accountId}`)
    const { error: errorTransactions, loading: loadingTransactions } = swrRequest(`/api/transactions/${accountId}`)
    const dataTransactions = data.data

    if (loadingTransactions) return <Loader />
    if (errorTransactions) return <ErrorItem error={errorTransactions} />
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Name</th>
                    <th>Categories</th>
                    <th>Transaction ID</th>
                    <th>Type</th>
                </tr>
            </thead>
            <tbody>
                {dataTransactions?.data.map(transaction => <TransactionRecord 
                    key={transaction.transaction_id}
                    date={transaction.date}
                    amount={transaction.amount}
                    currency={transaction.iso_currency_code}
                    name={transaction.name}
                    categories={transaction.category}
                    transactionId={transaction.transaction_id}
                    type={transaction.transaction_type}
                />)}
            </tbody>
        </table>
    )
}


export default TransactionsTable