import * as React from "react";
import { Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom'
import Contacts from "../Screens/Contacts/Contacts";
import Home from "../Screens/Home/Home";
import NotFound from './NotFound/NotFound' 
import './Route.css'
import HomeIcon from '@material-ui/icons/Home';
import PermContactCalendarRoundedIcon from '@material-ui/icons/PermContactCalendarRounded';

 function Rute(){
    return(
        <Router>
    <div>
      <ul  className="nav">
        <li>
    <Link to="/">{<div><HomeIcon /></div>}Home</Link>
        </li>
        <li>
    <Link to="/contacts">{<div><PermContactCalendarRoundedIcon /></div>}Contacts</Link>
        </li>
      </ul>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/contacts" component={Contacts} />
      <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
    )
}
export default Rute;