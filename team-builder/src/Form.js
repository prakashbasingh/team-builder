import React from 'react'


function Form (props){
    const {
        values,
        onInputChange,
        onCheckBoxChange,
        onSubmit,
    } = props

    return (
        <form className = 'memberContainer'>
            <h2>Team Member Form</h2>
            {/* these three for text input for username, address, and email */}
            <label> Username: &nbsp;
                <input
                    value = {value.name}
                    onChange = {onInputChange}
                    name = 'username'
                    type = 'text'
                />
            </label>
            <label> Email: &nbsp;
                <input
                    value = {value.email}
                    onChange = {onInputChange}
                    name = 'email'
                    type = 'text'
                />
            </label>
            <label> Address: &nbsp;
                <input
                    value = {value.address}
                    onChange = {onInputChange}
                    name = 'address'
                    type = 'text'
                />
            </label>
            {/* this is for dropdown */}
            <label>Civil Status: &nbsp;
                <select
                    value = {value.civil}
                    onChange = {onInputChange}
                    name = 'civil'
                        >
                    <option value='married'>married</option>
                    <option value='single'>not married</option>
                </select>
            </label>
            {/* following is for checkbox  */}
            <label>
                <input
                    checked = {values.education.WebDev}
                    onChange={onCheckboxChange}
                    name='WebDev'
                    type='checkbox' /> WebDev </label>
            <label>
                <input
                    checked = {values.education.iosDev}
                    onChange={onCheckboxChange}
                    name='iosDev'
                    type='checkbox' /> iosDev </label>
            <label>
                <input
                    checked = {values.education.dataScience}
                    onChange={onCheckboxChange}
                    name='dataScience'
                    type='checkbox' /> Data Science </label>
            <label>
                <input
                    checked = {values.education.associateDegree}
                    onChange={onCheckboxChange}
                    name='associateDegree'
                    type='checkbox' /> Associate Degree </label>
            <label>
                <input
                    checked = {values.education.bachelorDegree}
                    onChange={onCheckboxChange}
                    name='bachelorDegree'
                    type='checkbox' /> Bachelor Degree </label>

            {/* the following is for button which needs a handeler */}
            <button onClick = {onSubmit}> Submit </button>    
        </form>
    )
}