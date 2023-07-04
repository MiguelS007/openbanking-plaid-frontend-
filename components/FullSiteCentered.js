const FullSiteCentered = ({ children }) => {
  return (
      <div className="hero is-fullheight">
          <div className="tile is-align-items-center is-justify-content-center is-flex">
              {children}
          </div>
      </div>
  )
}


export default FullSiteCentered