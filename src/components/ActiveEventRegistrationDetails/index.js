// Write your code here
import {Component} from 'react'

import './index.css'

const registrationDetailsConstants = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

// const ActiveEventRegistrationDetails = props => {
//   const {regDetails} = props
//   console.log(regDetails)

//   return <div></div>
// }

class ActiveEventRegistrationDetails extends Component {
  renderYetToRegister = () => (
    <div className="activeRegPage">
      <img
        className="yet-to-register-img"
        alt="yet to register"
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
      />
      <p className="description">
        A live performance brings so much to your relationship with dance.
        Seeing dance life can often make you fall totally in love with this
        beautiful art form
      </p>
      <button className="button" type="button">
        Register Here
      </button>
    </div>
  )

  renderRegistered = () => (
    <div className="registeredPage">
      <img
        className="registered-img"
        alt="registered"
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png "
      />
      <h1 className="registered-description">
        You have already registered for the event
      </h1>
    </div>
  )

  renderRegistrationsClosed = () => (
    <div className="closed-page">
      <img
        className="closed-image"
        alt="registrations closed"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
      />
      <h1 className="heading">Registrations Are Closed Now!</h1>
      <p className="closed-description">Stay tuned. We will reopen</p>
    </div>
  )

  render() {
    const {regDetails} = this.props
    console.log(regDetails)

    switch (regDetails) {
      case registrationDetailsConstants.yetToRegister:
        return this.renderYetToRegister()
      case registrationDetailsConstants.registered:
        return this.renderRegistered()
      case registrationDetailsConstants.registrationsClosed:
        return this.renderRegistrationsClosed()
      default:
        return (
          <p className="initial-heading">
            Click on an event, to view its registration details
          </p>
        )
    }
  }
}
export default ActiveEventRegistrationDetails
