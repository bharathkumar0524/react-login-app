// Write your code here
import './index.css'

const Logout = props => {
  const {onClickedLogout} = props
  return (
    <button className="button" type="button" onClick={onClickedLogout}>
      Logout
    </button>
  )
}
export default Logout
