import logo from "../images/loghorrea_logo_small.png"
import { Link } from "react-router-dom";

const Header = () => {

  return (<>
    <div className="App-header">
      <Link to="/"><img className="App-logo" src={logo} alt="" /></Link>
      <div className="App-title"> Logorrhea</div>

    </div>

  </>)
}

export default Header;