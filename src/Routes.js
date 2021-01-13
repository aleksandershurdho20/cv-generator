import React from 'react'
import Home from "../src/Containers/Home"
import CreateCv from "./Containers/CreateCV/Create"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import NotFound from "./assets/NotFound.svg"
const imageStyles = {
    width: '27%',
    position: 'relative',
    left: '33%',
    top: '55px'
}
const Erororr = {
    color: '#e74645',
    textAlign: 'center',
    paddingTop: '4%'

}
const Description = {
    textAlign: 'center'
}
export default function Routes() {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/RrethNesh" component={() => <h2>Rreth nesh</h2>} />
                    <Route path="/Krijo" component={CreateCv} />
                    <Route path="*" component={() => <div>
                        <img src={NotFound} style={imageStyles} />
                        <h1 style={Erororr}>404</h1>
                        <h2 style={Description}>Faqja e kerkuar nuk gjendet</h2>
                    </div>} />
                </Switch>
            </Router>
        </>
    )
}
