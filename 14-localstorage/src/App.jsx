import React from 'react'

const App = () => {

  const user = {
    username: 'Nikhil',
    age: 20,
    city: 'Indore'
  }

  localStorage.setItem('user', JSON.stringify(user))

  
  return (
    <div>App</div>
  )
}

export default App