// Write your code here
import {Component} from 'react'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'

import './index.css'

class Home extends Component {
  state = {isTrue: true}

  onClicked = () => {
    this.setState(prev => ({isTrue: !prev.isTrue}))
  }

  render() {
    const {isTrue} = this.state

    return (
      <div className="app-container">
        <div className="home-container">
          <Message isLoggedIn={isTrue} />
          {isTrue ? (
            <Login onClickedLogin={this.onClicked} />
          ) : (
            <Logout onClickedLogout={this.onClicked} />
          )}
        </div>
      </div>
    )
  }
}
export default Home
