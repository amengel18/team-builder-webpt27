import React, { useState } from 'react'
import './App.css';
import Form from './Form'
import TeamMember from './TeamMember'

const initialForm = {
  name: '',
  email: '',
  role: ''
}


function App() {
  const [teamMembers, setTeamMembers] = useState([])
  const [form, setForm] = useState(initialForm)

  const submit = () => {
    setTeamMembers([...teamMembers, form])
    setForm(initialForm)
  }

  const update = (name, value) => {
    setForm({...form, [name]: value})
  }

  return (
    <div className="form-container">
      <h1>Team Member Form</h1>
      <Form form={form} submit={submit} update={update}/>
      {
        teamMembers.map(teamMember => {
          return (
            <TeamMember key={teamMember.id} details={teamMember} />
          )
        })
      }
    </div>
  )
}

export default App;
