import React from 'react'
import Home from "../src/Containers/Home"
import CreateCv from "./Containers/CreateCV/Create"
import Header from "./Components/Pages/Header/Index"
import { BrowserRouter as Router, Routes as RoutesComponents, Route } from 'react-router-dom';
import Sidebar from "./Components/Pages/Header/MobileMenu/Sidebar"
import NotFound from "./assets/NotFound.svg"
import CvExamples from "../src/Containers/CvExamples/Examples"
import Download from "../src/Containers/Download"
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
                <Header />
                <Sidebar />

                <RoutesComponents>

                    <Route exact path="" element={<Home/>} />
                    {/* <Route path="/RrethNesh" component={() => <h2>Rreth nesh</h2>} /> */}
                    <Route path="/Krijo" element={<CreateCv/>} />
                    <Route path="/Cv/shembuj" element={<CvExamples/>} />
                    <Route path="/CV/Download" element={<Download/>} />
                    <Route path="*" element={ <div>
                        <img src={NotFound} style={imageStyles} />
                        <h1 style={Erororr}>404</h1>
                        <h2 style={Description}>Faqja e kerkuar nuk gjendet</h2>
                    </div>} />
                </RoutesComponents>
            </Router>
        </>
    )
}
