import React from 'react'
import Home from "../src/Containers/Home"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
export default function Routes() {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/RrethNesh" component={() => <h2>Rreth nesh</h2>} />
                    <Route path="*" component={() => <h2>404</h2>} />
                </Switch>
            </Router>
        </>
    )
}
