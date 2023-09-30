import React from 'react'

const RegisterContext = React.createContext({
  activeTopic: 'ARTS_AND_CULTURE',
  onChangeCourseOption: () => {},
  onChangeName: () => {},
  name: '',
  registerStatus: false,
  onChangeRegisterStatus: () => {},
  onChangeNameStatus: () => {},
  nameFieldEmpty: false,
  activeTopicDisplay: 'Arts and Culture',
})

export default RegisterContext
