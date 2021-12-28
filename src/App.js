import logo from './logo.svg';
import './App.css';
import Account from './components/Login/Account';
import AuthProvider from './context/AuthProvider';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path="/">
            <Home></Home>
          </PrivateRoute>
          <Route exact path="/login">
            <Account></Account>
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
