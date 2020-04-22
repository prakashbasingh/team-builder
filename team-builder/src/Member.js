import React from 'react'


function Member({ details }) {
 
    //   if (!details) {
    //     return <h3>Working fetching your friend&apos;s details...</h3>
    //   }
  return (
    <div className='member-container'>
      <h2>{details.username}</h2>
      <p>Email: {details.email}</p>
      <p>Address: {details.address}</p>
      <p>Married: {details.married ? 'Yes' : 'No'}</p>

      {
        !!details.educations && !!details.educations.length &&
        <div>
           Educations:
          <ul>
            {
              details.educations.map((like, idx) => <li key={idx}>{like}</li>)
            }
          </ul>
        </div>
      }
    </div>
  )
}

export default Member