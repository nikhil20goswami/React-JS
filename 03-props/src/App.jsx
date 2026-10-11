
import React from 'react'
import './App.css'
import Card from './components/Card'

const App = () => {
  return (
    <div className="parent">
      <Card user = 'Nikhil' age ={19} img = 'https://images.unsplash.com/photo-1790805511391-f19c8281f7fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'/>
      <Card user = 'Tushar' age = {22} img = 'https://images.unsplash.com/photo-1773622337367-eac1f40bc4a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'/>
     
      
    </div>
  )
}

export default App
