import './index.css'

const BrowserHistory = props => {
  const {initialHistory, deleteUser} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = initialHistory

  const onDelete = () => {
    deleteUser(id)
  }

  return (
    <li className="list-container">
      <div className="container">
        <p className="time-accessed">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="logo" />
        <p className="tittle">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <button
        type="button"
        data-testid="delete"
        className="button"
        onClick={onDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}
export default BrowserHistory
