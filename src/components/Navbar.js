
import news from './news.png'
import home from './home.png'
import {Link } from "react-router-dom";
import './Navbar.css';

  const Navbar = ()=>{

    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <strong> <Link className="navbar-brand" to="/"><img src={news} alt= "news"/> </Link> </strong>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent"style={{padding:'0 0.5em'}}>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        <li className="nav-item">
          <Link a className="nav-link" aria-current="page" to="/"><img src={home} alt= "home" style={{padding:'0 0.5em'}}/></Link>
        </li>

        <li className="nav-item">
          <Link a className="nav-link" to="/business"> Business </Link>
        </li>

        <li className="nav-item">
          <Link a className="nav-link" to="/entertainment"> Entertainment </Link>
        </li>

        <li className="nav-item">
          <Link a className="nav-link" to="/health"> Health </Link>
        </li>

        <li className="nav-item">
          <Link a className="nav-link" to="/science"> Science </Link>
        </li>

        <li className="nav-item">
          <Link a className="nav-link" to="/sports"> Sports </Link>
        </li>

        <li className="nav-item">
          <Link a className="nav-link" to="/technology"> Technology </Link>
        </li>

      </ul>
    </div>
  </div>
</nav>
      </div>
    )
  }
// }

export default Navbar