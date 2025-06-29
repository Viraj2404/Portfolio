import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import User from './User.jsx'
import Education from './Education.jsx'
import Projects from './Projects.jsx'
import Skills from './Skills.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Router>
     <Routes>
       <Route path="/" element={<User />} />
       <Route path="/education" element={<Education />} />
       <Route path="/projects" element={<Projects />} />
       <Route path="/skills" element={<Skills />} />
     </Routes>
   </Router>
  )
}

export default App
