import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children, isAuthenticated, ...rest }) => {
  const user = useSelector(state => state.userReducer.user);
  return (
    <Route {...rest}>
      {
        user
          ?
            children
          :
          <Redirect to="/login" />

      }
    </Route>
    
  )
}

export default PrivateRoute

