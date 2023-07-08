import Cookies from 'js-cookie'
import {
  HomeCard,
  WidthCard,
  NavCard,
  Logo,
  LogoutButton,
  Content,
  Heading,
  DigitalCard,
} from './styled'

const HomeRoute = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }
  return (
    <HomeCard>
      <WidthCard>
        <NavCard>
          <Logo
            src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
            alt="website logo"
          />
          <LogoutButton type="button" onClick={onClickLogout}>
            Logout
          </LogoutButton>
        </NavCard>
        <Content>
          <Heading>Your Flexibility, Our Excellence</Heading>
          <DigitalCard
            src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
            alt="digital card"
          />
        </Content>
      </WidthCard>
    </HomeCard>
  )
}

export default HomeRoute
