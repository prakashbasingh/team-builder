import React from 'react'


function Form (props){
    const {
        values,
        onInputChange,
        onCheckBoxChange,
        onSubmit,
    } = props

    return (
        <form className = 'member-form'>
            <h2>Member Form</h2>
            {/* these three for text input for username, address, and email */}
            <label> Username: &nbsp;
                <input
                    value = {values.username}
                    onChange = {onInputChange}
                    name = 'username'
                    type = 'text'
                />
            </label>
            <label> Email: &nbsp;
                <input
                    value = {values.email}
                    onChange = {onInputChange}
                    name = 'email'
                    type = 'text'
                />
            </label>
            <label> Address: &nbsp;
                <input
                    value = {values.address}
                    onChange = {onInputChange}
                    name = 'address'
                    type = 'text'
                />
            </label>
            {/* this is for dropdown */}
            <label>Civil Status: &nbsp;
                <select
                    value = {values.civil}
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
                    checked = {values.educations.webDev}
                    onChange={onCheckBoxChange}
                    name='webDev'
                    type='checkbox' /> WebDev </label>
            <label>
                <input
                    checked = {values.educations.iosDev}
                    onChange={onCheckBoxChange}
                    name='iosDev'
                    type='checkbox' /> iosDev </label>
            <label>
                <input
                    checked = {values.educations.dataScience}
                    onChange={onCheckBoxChange}
                    name='dataScience'
                    type='checkbox' /> Data Science </label>
            <label>
                <input
                    checked = {values.educations.associateDegree}
                    onChange={onCheckBoxChange}
                    name='associateDegree'
                    type='checkbox' /> Associate Degree </label>
            <label>
                <input
                    checked = {values.educations.bachelorDegree}
                    onChange={onCheckBoxChange}
                    name='bachelorDegree'
                    type='checkbox' /> Bachelor Degree </label>

            {/* the following is for button which needs a handler */}
            <button onClick = {onSubmit}> Submit </button>    
        </form>
    )
}

export default Form