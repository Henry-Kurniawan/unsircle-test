import React from "react";
import {Route, Redirect} from "react-router-dom"

export default function PrivateRouteLoggedIn({children, ...rest}) {
    return (
        <Route {...rest}>
            { localStorage.getItem('access_token') ? <Redirect to={'/'} />  : children}
        </Route>
    )
}