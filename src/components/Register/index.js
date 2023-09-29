import {Component} from 'react'
import {
  RegisterPageComponent,
  LogoImage,
  RegisterLogoAndUserDetails,
  WebsiteRegisterImage,
  RegisterPageDetailsContainer,
  RegisterHead,
  UserNameContainer,
  Label,
  Input,
  Select,
  Option,
} from './styledComponents'
import RegisterContext from '../../context/RegisterContext'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Register = () => (
  <RegisterContext.Consumer>
    {value => {
      const {activeTopic, onChangeCourseOption} = value

      const onChangeCourse = event => {
        onChangeCourseOption(event.target.value)
      }
      return (
        <RegisterPageComponent>
          <LogoImage
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
            alt="website logo"
          />
          <RegisterLogoAndUserDetails>
            <WebsiteRegisterImage
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
            />
            <RegisterPageDetailsContainer>
              <RegisterHead>Let us join</RegisterHead>
              <UserNameContainer>
                <Label htmlFor="name">Name</Label>
                <Input type="text" placeholder="Your name" id="name" />
              </UserNameContainer>
              <UserNameContainer>
                <Label htmlFor="topics">Topics</Label>
                <Select
                  value={activeTopic}
                  id="topics"
                  onChange={onChangeCourse}
                >
                  {topicsList.map(eachOption => (
                    <Option key={eachOption.id} value={eachOption.displayText}>
                      {eachOption.displayText}
                    </Option>
                  ))}
                </Select>
              </UserNameContainer>
            </RegisterPageDetailsContainer>
          </RegisterLogoAndUserDetails>
        </RegisterPageComponent>
      )
    }}
  </RegisterContext.Consumer>
)

export default Register
