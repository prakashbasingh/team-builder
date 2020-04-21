import React, { useState, useEffect } from 'react';
import './App.css';
import { v4 as uuid } from 'uuid'


const initialTeamMembersList = [
  // 👉 the shape of the actual friend object from API
  {
    id: uuid(),
    username: 'Mathew',
    email: 'Mathew@Mathew.com',
    address: 'California',
    civil: 'single',
    education: [
      'WebDev',
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
  education: {
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
  
}

  return (
    <div className="App">
      
      {/* <Form
        values={formValues}
        onInputChange={onInputChange}
        onCheckboxChange={onCheckboxChange}
        onSubmit={onSubmit}
      /> */}
    </div>
  );
}

export default App;
