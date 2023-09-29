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
  ButtonRegister,
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

const Register = props => (
  <RegisterContext.Consumer>
    {value => {
      const {
        activeTopic,
        onChangeCourseOption,
        name,
        onChangeName,
        onChangeRegisterStatus,
      } = value

      const onChangeCourse = event => {
        onChangeCourseOption(event.target.value)
      }

      const onChangeInput = event => {
        onChangeName(event.target.value)
      }

      const onClickRegister = () => {
        onChangeRegisterStatus()
        const {history} = props
        history.replace('/')
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
                <Input
                  type="text"
                  placeholder="Your name"
                  id="name"
                  value={name}
                  onChange={onChangeInput}
                />
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
              <ButtonRegister type="button" onClick={onClickRegister}>
                Register Now
              </ButtonRegister>
            </RegisterPageDetailsContainer>
          </RegisterLogoAndUserDetails>
        </RegisterPageComponent>
      )
    }}
  </RegisterContext.Consumer>
)

export default Register
