import React from 'react'

const RegisterContext = React.createContext({
  activeTopic: 'Arts and Culture',
  onChangeCourseOption: () => {},
  onChangeName: () => {},
  name: '',
  registerStatus: false,
  onChangeRegisterStatus: () => {},
})

export default RegisterContext
