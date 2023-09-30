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
  ErrorMessage,
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
        onChangeNameStatus,
        nameFieldEmpty,
      } = value

      const onChangeCourse = event => {
        onChangeCourseOption(event.target.value)
      }

      const onChangeInput = event => {
        onChangeName(event.target.value)
      }

      const onClickRegister = event => {
        event.preventDefault()
        if (name.length === 0) {
          onChangeNameStatus()
        } else {
          onChangeRegisterStatus()
          const {history} = props
          history.replace('/')
        }
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
            <RegisterPageDetailsContainer onSubmit={onClickRegister}>
              <RegisterHead>Let us join</RegisterHead>
              <UserNameContainer>
                <Label htmlFor="name">NAME</Label>
                <Input
                  type="text"
                  placeholder="Your name"
                  id="name"
                  value={name}
                  onChange={onChangeInput}
                />
              </UserNameContainer>
              <UserNameContainer>
                <Label htmlFor="topics">TOPICS</Label>
                <Select
                  value={activeTopic}
                  id="topics"
                  onChange={onChangeCourse}
                >
                  {topicsList.map(eachOption => (
                    <Option key={eachOption.id} value={eachOption.id}>
                      {eachOption.displayText}
                    </Option>
                  ))}
                </Select>
              </UserNameContainer>
              <ButtonRegister type="submit">Register Now</ButtonRegister>
              {nameFieldEmpty && (
                <ErrorMessage>Please enter your name</ErrorMessage>
              )}
            </RegisterPageDetailsContainer>
          </RegisterLogoAndUserDetails>
        </RegisterPageComponent>
      )
    }}
  </RegisterContext.Consumer>
)

export default Register
