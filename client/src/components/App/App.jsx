import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../Navbar/Navbar'
import Main from '../Main/Main'
import Login from '../Login/Login'
import Registration from '../Registration/Registration'
import Profile from '../Profile/Profile'
import AddCar from '../AddCar/AddCar';
import ServiceList from '../ServiceList/ServiceList';
import History from '../History/History';
import Order from '../Order/Order';
import { sagaCheckSessionAC } from '../../redux/actionCreators/asyncAC/asyncUserAC'
import { sagaCheckSessionAdminAC } from '../../redux/actionCreators/asyncAC/asyncAdminAC'
import { sagaGetServiceInfoAC } from '../../redux/actionCreators/asyncAC/asyncServiseInfoAC'
import { sagaGetOrdersAC } from '../../redux/actionCreators/asyncAC/asyncOrdersAC'
import styles from './App.module.css'
import Calendar from '../Calendar/Calendar'
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import Admin from '../Admin/Admin'
import AdminProfile from '../AdminProfile/AdminProfile'


function App() {
  const dispatch = useDispatch()
  let user = useSelector(state => state.userReducer.user);

  useEffect(() => {
    dispatch(sagaCheckSessionAC());
    dispatch(sagaCheckSessionAdminAC())
    dispatch(sagaGetServiceInfoAC());
    // dispatch(sagaGetOrdersAC());
  }, [])

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

          <Route exact path="/registration">
            <Registration />
          </Route>

          <Route exact path="/profile">
            <Profile />
          </Route>

          <Route exact path="/servicelist">
            <ServiceList />
          </Route>

          <Route exact path="/car">
            <AddCar />
          </Route>

            
          <PrivateRoute exact path="/calendar" isAuthenticated={user}>
            console.log(user);
            <Calendar />
          </PrivateRoute>

	        <Route exact path="/history">
		        <History />
	        </Route>

	        <Route exact path="/order">
		        <Order />
	        </Route>

          <Route exact path="/admin/profile">
		        <AdminProfile />
	        </Route>
          <Route exact path="/admin">
		        <Admin />
	        </Route>

        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
