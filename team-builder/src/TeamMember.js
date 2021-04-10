import React from 'react'

export default function TeamMember(props) {
  const {details} = props

  if (!details) {
    return <h2>Working to fetch Team Member&apos;s Details</h2>
  }

  return(
    <div className="team member container">
      <h2>{details.username}</h2>
      <p>{details.email}</p>
      <p>{details.role}</p>
    </div>
  )
}