import {
  HomeContainer,
  LogoImage,
  RegisterHomeContainer,
  Heading,
  Para,
  Button,
  MeetupImage,
  Name,
  Topic,
} from './styledComponents'
import RegisterContext from '../../context/RegisterContext'

const Home = props => (
  <RegisterContext.Consumer>
    {value => {
      const {activeTopic, registerStatus, name} = value

      const onClickRegister = () => {
        const {history} = props
        history.replace('/register')
      }

      return (
        <HomeContainer>
          <LogoImage
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
            alt="website logo"
          />
          <RegisterHomeContainer>
            {registerStatus ? (
              <Name>{name}</Name>
            ) : (
              <Heading>Welcome to Meetup</Heading>
            )}
            {registerStatus ? (
              <Topic>{activeTopic}</Topic>
            ) : (
              <Para>Please register for the topic</Para>
            )}
            {!registerStatus && (
              <Button type="button" onClick={onClickRegister}>
                Register
              </Button>
            )}

            <MeetupImage
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
            />
          </RegisterHomeContainer>
        </HomeContainer>
      )
    }}
  </RegisterContext.Consumer>
)

export default Home
