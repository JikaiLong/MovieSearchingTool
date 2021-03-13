
import './App.css';
import SearchPage from './components/SearchPage'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import DetailPage from './components/DetailPage';

function App() {
  return (
    <div className="App">
        <Router>
            <Route exact path = '/' component = {SearchPage}/>
            <Route path = '/:id' component = {DetailPage}/>
        </Router>
    </div>
  );
}

export default App;
