import './App.css';
import About from './components/about';
import Shop from './components/shop';
import Nav from './components/Nav';
import ItemDetail from './components/itemDetail';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
      <Nav/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About}/>
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={ItemDetail} />

        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
 return <h1>home page</h1>
}

export default App;
