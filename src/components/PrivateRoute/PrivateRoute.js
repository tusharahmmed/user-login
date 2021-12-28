import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Preloader from '../Preloader/Preloader';

const PrivateRoute = ({ children, ...rest }) => {

  // const location = useLocation();
  const {user, isLoading} = useAuth();


  if(isLoading){
      return(
        <Preloader></Preloader>
      );
  }

  return (
      <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;