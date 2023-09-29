import './App.css'
import {Switch, Route} from 'react-router-dom'
import {Component} from 'react'
import Home from './components/Home'
import Register from './components/Register'
import RegisterContext from './context/RegisterContext'

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
  state = {activeTopic: topicsList[0].displayText}

  onChangeCourseOption = activeCourse => {
    this.setState({activeTopic: activeCourse})
  }

  render() {
    const {activeTopic} = this.state
    return (
      <RegisterContext.Provider
        value={{activeTopic, onChangeCourseOption: this.onChangeCourseOption}}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}

export default App
