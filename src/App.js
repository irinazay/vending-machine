import './App.css';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Soda from './Soda';
import Chips from './Chips';
import Sardines from './Sardines';
import './Nav.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <NavLink exact to="/soda">
            Soda
          </NavLink>
          <NavLink exact to="/chips">
            Chips
          </NavLink>
          <NavLink exact to="/sardines">
            Fresh Sardines
          </NavLink>
        </nav>

        <Route path="/" exact>
          <VendingMachine />
        </Route>
        <Route exact path="/soda">
          <Soda />
        </Route>
        <Route exact path="/chips">
          <Chips />
        </Route>
        <Route exact path="/sardines">
          <Sardines />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
