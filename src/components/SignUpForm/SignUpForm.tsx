import React, { useState } from 'react'

import './SignUpForm.scss'

const SignUpForm = () => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  return (
    <div className="SignUpForm">
      <form>
        <h1>Sign Up</h1>
        <div>
          <label htmlFor="username">Username</label>
          <input
            autoComplete="off"
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            required
          />
        </div>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            autoComplete="off"
            type="text"
            id="firstName"
            name="firstName"
            placeholder="FirstName"
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            autoComplete="off"
            type="text"
            id="lastName"
            name="lastName"
            placeholder="FirstName"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            autoComplete="off"
            type="text"
            id="email"
            name="email"
            placeholder="email"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            autoComplete="off"
            type="text"
            id="password"
            name="password"
            placeholder="password"
            required
          />
        </div>
        <div>
          <label htmlFor="passwordCheck">Re-enter Password</label>
          <input
            autoComplete="off"
            type="text"
            id="passwordCheck"
            name="passwordCheck"
            placeholder="password"
            required
          />
        </div>

        <input className="signup-btn" type="submit" value="Sign Up!" />

      </form>
    </div>
  )
}

export default SignUpForm
