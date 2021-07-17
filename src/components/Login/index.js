// Write your code her
import './index.css'

const Login = props => {
  const {onClickedLogin} = props
  return (
    <button className="button" type="button" onClick={onClickedLogin}>
      Login
    </button>
  )
}
export default Login
