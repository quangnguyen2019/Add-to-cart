import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import TopMenu from './components/TopMenu';
import Product from './pages/Product';

import { CartProvider } from './contexts/Cart';

const Home = () => <h2 className="mt-3">Home</h2>

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Router>
          <div>
            <TopMenu />

            <Switch>
              <Route path="/products"><Product /></Route>
              <Route path="/"><Home /></Route>
            </Switch>
          </div>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
