import {Link} from 'react-router-dom'
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
      const {registerStatus, name, activeTopicDisplay} = value

      return (
        <HomeContainer>
          <LogoImage
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
            alt="website logo"
          />
          <RegisterHomeContainer>
            {registerStatus ? (
              <Name>Hello {name}</Name>
            ) : (
              <Heading>Welcome to Meetup</Heading>
            )}
            {registerStatus ? (
              <Topic>Welcome to {activeTopicDisplay}</Topic>
            ) : (
              <Para>Please register for the topic</Para>
            )}
            {!registerStatus && (
              <Link to="/register">
                <Button type="button">Register</Button>
              </Link>
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
