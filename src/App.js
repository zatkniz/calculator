import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Calculator from './pages/calculator'

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <div className="app">
      {/* <Navbar /> */}
      <Switch>
        <Route path="/">
          <Calculator />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
