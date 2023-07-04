import { useRouter } from 'next/router'

import nestedObjectCheck from '../../libs/nestedObjectCheck'
import swrRequest from '../../libs/requests/swrRequest'

import BalanceBoxContent from './BalanceBoxContent'
import ErrorItem from '../ErrorItem'
import Loader from '../loader/Loader'


const BalanceBox = () => {
    const router = useRouter()
    const { accountId } = router.query
    const data = swrRequest(`/api/balance/${accountId}`)
    const { error: errorBalance, loading: loadingBalance } = data
    const dataBalance = data.data

    if (errorBalance) return <ErrorItem error={errorBalance} />
    if (loadingBalance) return <Loader />

    return (
        <div className="box">
            {<BalanceBoxContent balanceAccounts={dataBalance.data[0]} />}
        </div>
    )
}


export default BalanceBox