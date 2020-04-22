import React, { useState, useEffect } from 'react';
import './App.css';
import { v4 as uuid } from 'uuid'
import Form from './Form'
import Member from './Member'

const initialTeamMembersList = [
  // 👉 the shape of the actual friend object from API
  {
    id: uuid(),
    username: 'Mathew',
    email: 'Mathew@Mathew.com',
    address: 'California',
    married: true,
    educations: [
      'webDev',
      'iOSDev',
      'dataScience',
      'associateDegree',
      'bachelorDegree'
    ]
  },
]
// 👉 the shape of the state that drives the form
const initialFormValues = {
  ///// TEXT INPUTS /////
  username: '',
  email: '',
  address: '',
  ///// DROPDOWN /////
  civil: 'single',
  ///// CHECKBOXES /////
  educations: {
    WebDev: false,
    iOSDev: false,
    dataScience: false,
    associateDegree: false,
    bachelorDegree: false
  },
}


function App() {
  const [teamMembers, setTeamMembers] = useState(initialTeamMembersList)

  const[formValues, setFormValues] = useState(initialFormValues)

  const onInputChange = evt => {
    //implementing change handler, it will allow change of state, when input type is text
    const name = evt.target.name //it pulls the name of the input from the event object(username, email, address)
    const value = evt.target.value //it pulls the value of the input from the event object(new value)

    setFormValues({ //setting new state for formValue
      ...formValues,
      [name]: value
    })

  }

  const onCheckboxChange = evt => {
    const {name} = evt.target //it pulls the name of the checkBox from the event
    
    const isChecked = evt.target.checked// it pulls whether checked value true or false, from the event
  
    setFormValues({
      ...formValues,
      educations: {
        ...formValues.educations,
        [name]: isChecked,
      }
    })
  }

  const onSubmit = evt => {
    evt.preventDefault()

    const newMember = {
      id: uuid(),
      username: formValues.username,
      email: formValues.email,
      address: formValues.address,
      civil: formValues.civil === 'single'? false : true,
      educations: Object.keys(formValues.educations)
      .filter(education => formValues.educations[education] === true)
    }
    setTeamMembers([...teamMembers, newMember])
    setFormValues(initialFormValues)
    
  }

  return (
    <div className="container">
      <header><h1>Team Member Information</h1></header>
      {
        teamMembers.map(member => {
          return (
            <Member key = {member.id} details = {member} />
          )
        })
      }  
      <Form values = {formValues}
            onInputChange={onInputChange}
            onCheckboxChange={onCheckboxChange}
            onSubmit={onSubmit}
            />
    </div>
  );
}

export default App;
