import BalanceBox from '../../components/account/BalanceBox'
import DefaultLayout from '../../components/DefaultLayout'
import TransactionsTable from '../../components/account/TransactionsTable'


const accountsId = () => {
    return (
        <DefaultLayout>
            <div className="level">
                <div className="level-item">
                    <BalanceBox />
                </div>
            </div>
            <div className="level">
                <div className="level-item">
                    <TransactionsTable />
                </div>
            </div>
        </DefaultLayout>
    )
}


export default accountsId