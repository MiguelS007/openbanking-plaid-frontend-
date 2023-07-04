const BalanceBoxContent = ({ balanceAccounts }) => {
  const { balances, name, official_name, subtype, type } = balanceAccounts
  const currentValue = ({ current, iso_currency_code }) => current.toString() + " " + iso_currency_code.toString()

  return (
      <div className="tile is-ancestor">
          <div className="tile is-parent">
              <div className="tile is-child is-align-items-center is-justify-content-center is-flex">
                  <p className="title is-1 has-text-centered">{currentValue(balances)}</p>
              </div>
          </div>
          <div className="tile is-vertical is-parent">
              <div className="tile is-child">
                  <p className="title">{name}</p>
              </div>
              <div className="tile is-child">
                  <p className="subtitle">{official_name}</p>
              </div>
              <div className="tile is-child">
                  <div className="has-text-grey-lighter">#{type} #{subtype}</div>
              </div>
          </div>
      </div>
  )
}


export default BalanceBoxContent