import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className=" customNav navbar navbar-expand-md navbar-dark">
        <div className="container-fluid">
            <a className="navbar-brand customTitle" href="/">Memory Collector</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ms-auto mb-2 mb-md-0">
                <li className="nav-item">
                    <Link to='/login' className='nav-link'>Login</Link>
                </li>
                <li className="nav-item">
                    <Link to='/register' className='nav-link'>Sign Up</Link>
                </li>                    
            </ul>
            
            </div>
        </div>
    </nav>
    
  )
}

export default Navbar               