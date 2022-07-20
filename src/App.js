import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Dashboard from './Dashboard/Dashboard';
import './App.css'
import Sidebar from './sidebar/sidebar';
import Topbar from './topbar/topbar';
import { BrowserRouter, Route, Router, Routes,Switch } from 'react-router-dom'
import Login from './Login/Login';
import Navbar from './navbar';
import Sign_up from './Login/Sign_up';
import Profile from './Profile/Profile';
import Class from './Class/Class';
import task from './task';
import hackathon from './hackathon';

function App() {


  return (
    <div className="App">
          {/* <Navbar/> */}
      <BrowserRouter>
        <Switch>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/register' component={Sign_up}/>
          <>
            <Navbar/>
            <Route exact path='/dashboard' component={Dashboard}/>
            <Route exact path='/profile' component={Profile}/>
            <Route exact path='/class' component={Class}/>
            <Route exact path='/task' component={task}/>
            <Route exact path='/hackathon' component={hackathon}/>

          </>
        </Switch>
      </BrowserRouter>
      {/* <Login/> */}
      {/* <Sign_up/> */}
    </div>
        
  );
}

export default App;


