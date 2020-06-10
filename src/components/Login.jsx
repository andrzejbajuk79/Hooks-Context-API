/* eslint-disable no-undef */
import React, {useState} from 'react'
// import PropTypes from 'prop-types'

const Login = ({setUser}) => {
 const [username, setUsername] = useState('')
 function handleSubmit(e) {
  e.preventDefault()
  setUser(username)
 }
 return (
  <div>
   <h2>Login</h2>
   <form onSubmit={handleSubmit}>
    <input
     type="text"
     name="name"
     onChange={(e) => setUsername(e.target.value)}
    />
    <button type="submit">Submit</button>
   </form>
  </div>
 )
}

// Login.propTypes = {}

export default Login
