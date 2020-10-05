import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { localContext } from "../../App";

const PrivateRoute = ({ children, ...rest }) => {
  const [logedInUser, setLogedInUser] = useContext(localContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        logedInUser.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
