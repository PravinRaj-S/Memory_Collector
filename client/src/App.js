import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' Component={ Login } />
        <Route path='/register' Component={ Register } />
        <Route path='/' Component={ Home } />
      </Routes>
    </Router>
    
  )
}

export default App