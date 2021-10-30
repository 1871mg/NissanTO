import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import Main from '../Main/Main';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import Logout from '../Logout/Logout';
import Profile from '../Profile/Profile';
import { sagaCheckSessionAC } from '../../redux/actionCreators/asyncAC/asyncUserAC';
import styles from './App.module.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(sagaCheckSessionAC());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Navbar />

        <Switch>

          <Route exact path="/">
            <Main />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/logout">
            <Logout />
          </Route>

          <Route exact path="/registration">
            <Registration />
          </Route>

          <Route exact path="/profile">
            <Profile />
          </Route>

        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
