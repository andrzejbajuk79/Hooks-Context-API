import React from 'react'
// import PropTypes from 'prop-types'

const Header = ({user, setUser}) => {
 return (
  <div>
   Welcome, {user}
   <button onClick={() => setUser('')}>Logout</button>
  </div>
 )
}

// Header.propTypes = {}

export default Header
