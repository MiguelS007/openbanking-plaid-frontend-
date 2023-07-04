import Link from 'next/link'


const Account = ({ name, id, official_name, type, subtype, available_balance, current_balance, currency, limit }) => {
    const accountLink = "/accounts/" + id

    return (
        <div className="column is-one-third">
            <Link href={accountLink} legacyBehavior>
                <a className="box">
                    <div className="heading" style={{ height: '3.5em' }}>
                        {official_name ? official_name : name}
                    </div>
                    <div className="title is-4">
                        {name}
                    </div>
                    <div className="title is-1">
                    {current_balance} {currency}
                    </div>
                    <div className="subtitle is-6" style={{ height: '3em' }}>
                        {available_balance ? `Available: ${available_balance} ${currency}` : `${'\u00A0'}`}
                    </div>
                    <div>{limit ? `Limit: ${limit}` : `${'\u00A0'}`}</div>
                    <div className="has-text-grey-lighter">#{type} #{subtype}</div>
                </a>
            </Link>
        </div>
    )
}


export default Account