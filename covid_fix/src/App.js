import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/home/Home'
import Health from './components/health/Health'
import Vaccine from './components/vaccine/Vaccine'
import Helper from './components/helper/Helper'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Helper} />
          <Route path="/home" component={Home} />
          <Route path="/health" component={Health} />
          <Route path="/vaccine" component={Vaccine} />
        </Switch>
      </BrowserRouter>
    </div>
    
  );


}



export default App;

