import React from "react";
import {Route, Redirect} from "react-router-dom"

export default function PrivateRoute({children, ...rest}) {
    return (
        <Route {...rest}>
            { localStorage.getItem('access_token') ? children : <Redirect to={'/login'} />}
        </Route>
    )
}