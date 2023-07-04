import nestedObjectCheck from '../../libs/nestedObjectCheck'
import swrRequest from '../../libs/requests/swrRequest'

import Account from './Account'
import ErrorItem from '../ErrorItem'
import LoaderSite from '../loader/LoaderSite'


const Accounts = () => {
    const data = swrRequest('/api/accounts')
    const { error: errorAccounts, loading: loadingAccounts } = data
    const dataAccounts = data.data
    if (errorAccounts) return <ErrorItem error={errorAccounts} />
    if (loadingAccounts) return <LoaderSite />

    if (!dataAccounts.data.accounts) {
        return <LoaderSite />
    }

    return (
        <div className="columns is-multiline is-variable">
                {dataAccounts?.data?.accounts?.map(account => 
                    <Account 
                        key={account.account_id}
                        id={account.account_id} 
                        name={account.name} 
                        official_name={account.official_name} 
                        type={account.type}
                        subtype={account.subtype}
                        available_balance={nestedObjectCheck(account, 'balances.available') ? account.balances.available : null}
                        current_balance={nestedObjectCheck(account, 'balances.current') ? account.balances.current : null}
                        currency={nestedObjectCheck(account, 'balances.iso_currency_code') ? account.balances.iso_currency_code : null}
                        limit={nestedObjectCheck(account, 'balances.limit') ? account.balances.limit : null}
                    />
                )}
        </div>
    )
}


export default Accounts