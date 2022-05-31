
import './App.css';
import AddIssue from './components/addIssue';
import Login from './components/Login';
import QueueWindow from './components/queuewindow';
import Register from './components/register';
import Notification from './components/notification';
import {Route,Switch} from 'react-router-dom';
import NavBar from './components/navbar';
import CLogin from './components/cLogin';
import CissueCounter from './components/cissuecounter';
import Ccall from './components/oneissue';
import CallissueCounter from './components/allissue';
import CissueCountertwo from './components/cissuecountertwo';
import CissueCounterthree from './components/cissuecounterthree';
import CounterChecker from './components/counterChecker';

function App() {
  return (
    <div className="App">
     
    <Switch>

     <Route exact path="/" component={Login}  />
     <Route exact path="/reg" component={Register} />
     <Route exact path="/clogin" component={CLogin} />
     <Route exact path="/cissuecounter" component={CissueCounter} />
     <Route exact path="/cissuecountertwo" component={CissueCountertwo} />
     <Route exact path="/cissuecounterthree" component={CissueCounterthree} />
     <Route exact path="/call/:iid" component={Ccall} />
     <Route exact path="/callissue" component={CallissueCounter} />
     <Route exact path="/countercheker" component={CounterChecker} />
     

    <div>
     <NavBar / >
     <Route exact path="/queue" component={QueueWindow} />
     <Route exact path="/notifi" component={Notification} />
     <Route exact path="/issue" component={AddIssue} />

    {/* </NavBar>
    */}
    
  
  
     </div> 

      {/* <CNavBar>
     <Route exact path="/cissuecounter"  />
     </CNavBar>  */}

     
     

    
       {/* <CNavBar/>
     <Route exact path="/cissuecounter"  /> */}
     
     </Switch>
    
  
    </div>
  );
}

export default App;
