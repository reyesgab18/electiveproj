import './App.css'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import About from './components/Login/About'
import Reset from './components/Login/Reset'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Login/>}/>
        <Route path = "/signup" element = {<Signup/>}/>
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/reset" element = {<Reset/>}/>
        
        {/* design a web page kapag non-existing yung page na nisearch */}
      </Routes>
    </Router>
  )
}

export default App
