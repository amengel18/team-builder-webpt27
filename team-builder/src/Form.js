import React from 'react'

export default function Form (props) {
  const {form, submit, update} = props

  const handleSubmit = event => {
    event.preventDefault()
    submit()
  }

  const handleChange = event => {
    const {name, value} = event.target
    update(name, value)
  }

  return(
    <div className="container">
      <form className="form container" onSubmit={handleSubmit}>
        <div className="form-group inputs">
          <label>Username
            <input 
            type="text"
            name="username"
            placeholder="type your username"
            value={form.username}
            onChange={handleChange}
            />
          </label>
          <label>Email 
            <input 
            type="email"
            name="email"
            placeholder="type your email"
            value={form.email}
            onChange={handleChange}
            />
          </label>
          <label>Role 
            <select name="role" value={form.role} onChange={handleChange}>
              <option value="">--select a role--</option>
              <option value="New Student">New Student</option>
              <option value="Exisiting Student">Existing Student</option>
              <option value="Alumni">Alumni</option>
              <option value="Instructor">Instructor</option>
            </select>
          </label>
        </div>
        <div className="submit">
          <button>Submit</button>
        </div>
      </form>
    </div>
  )
}