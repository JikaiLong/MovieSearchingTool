
import './App.css';
import SearchPage from './components/SearchPage'
import Detail from './components/DetailPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path = '/' exact component = {SearchPage}/>
            <Route path = '/test' component = {Detail}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
