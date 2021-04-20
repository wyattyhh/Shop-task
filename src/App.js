import './App.less'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//pages
import CartPage from './pages/CartPage'
import ShoppingPage from './pages/ShoppingPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={ShoppingPage}/>
          <Route path="/cart" component={CartPage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
