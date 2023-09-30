import './App.css'
import {Switch, Route} from 'react-router-dom'
import {Component} from 'react'
import Home from './components/Home'
import Register from './components/Register'
import RegisterContext from './context/RegisterContext'
import NotFound from './components/NotFound'

// These are the lists used in the application. You can move them to any component needed.
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

// Replace your code here
class App extends Component {
  state = {
    activeTopic: topicsList[0].id,
    activeTopicDisplay: topicsList[0].displayText,
    name: '',
    registerStatus: false,
    nameFieldEmpty: false,
  }

  onChangeCourseOption = activeCourse => {
    this.setState({activeTopic: activeCourse})
  }

  onChangeName = nameInput => {
    this.setState({name: nameInput})
  }

  onChangeRegisterStatus = () => {
    const {activeTopic} = this.state

    const updatesTopic = topicsList.find(
      eachItem => eachItem.id === activeTopic,
    )

    this.setState({
      activeTopicDisplay: updatesTopic.displayText,
      registerStatus: true,
    })
  }

  onChangeNameStatus = () => {
    this.setState({nameFieldEmpty: true})
  }

  render() {
    const {
      activeTopic,
      name,
      registerStatus,
      nameFieldEmpty,
      activeTopicDisplay,
    } = this.state

    return (
      <RegisterContext.Provider
        value={{
          activeTopic,
          onChangeCourseOption: this.onChangeCourseOption,
          onChangeName: this.onChangeName,
          name,
          registerStatus,
          onChangeRegisterStatus: this.onChangeRegisterStatus,
          onChangeNameStatus: this.onChangeNameStatus,
          nameFieldEmpty,
          activeTopicDisplay,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}

export default App
