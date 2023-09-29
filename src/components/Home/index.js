import {
  HomeContainer,
  LogoImage,
  RegisterHomeContainer,
  Heading,
  Para,
  Button,
  MeetupImage,
} from './styledComponents'

const Home = props => {
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
        <Heading>Welcome to Meetup</Heading>
        <Para>Please register for the topic</Para>
        <Button type="button" onClick={onClickRegister}>
          Register
        </Button>
        <MeetupImage
          src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
          alt="meetup"
        />
      </RegisterHomeContainer>
    </HomeContainer>
  )
}

export default Home
