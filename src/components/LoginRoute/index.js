import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  BgCard,
  WidthCard,
  Img,
  FormCard,
  Heading,
  InputCard,
  Label,
  Input,
  LoginButton,
  ErrorMsg,
  UserData,
} from './styled'

class LoginRoute extends Component {
  state = {userId: '', pin: '', errorMsg: ''}

  onChangeUserId = e => {
    this.setState({userId: e.target.value})
  }

  onChangePin = e => {
    this.setState({pin: e.target.value})
  }

  onSubmitSucces = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitForm = async e => {
    e.preventDefault()
    const {userId, pin} = this.state
    const userDetails = {user_id: userId, pin}
    const url = 'https://apis.ccbp.in/ebank/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(response, data)
    if (response.ok === true) {
      this.onSubmitSucces(data.jwt_token)
    } else {
      this.setState({errorMsg: data.error_msg})
    }
  }

  render() {
    const {userId, pin, errorMsg} = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <BgCard>
        <WidthCard>
          <Img
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
            alt="website login"
          />
          <FormCard onSubmit={this.onSubmitForm}>
            <Heading>Welcome Back!</Heading>
            <InputCard>
              <Label htmlFor="userId">User ID</Label>
              <Input
                type="text"
                placeholder="Enter User ID"
                id="userId"
                value={userId}
                onChange={this.onChangeUserId}
              />
            </InputCard>
            <InputCard>
              <Label htmlFor="pin">PIN</Label>
              <Input
                type="password"
                placeholder="Enter User ID"
                id="pin"
                value={pin}
                onChange={this.onChangePin}
              />
            </InputCard>
            <LoginButton type="submit">Login</LoginButton>
            {errorMsg.length !== 0 && <ErrorMsg>{errorMsg}</ErrorMsg>}
          </FormCard>
        </WidthCard>
        <UserData>
          use these user details <br />
          user ID:-142420 <br />
          pin:- 231225
        </UserData>
      </BgCard>
    )
  }
}
export default LoginRoute
