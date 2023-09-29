import React from 'react'

const RegisterContext = React.createContext({
  activeTopic: 'Arts and Culture',
  onChangeCourseOption: () => {},
})

export default RegisterContext
