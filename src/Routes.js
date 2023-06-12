import React from 'react'
import Home from "../src/Containers/Home"
import CreateCv from "./Containers/CreateCV/Create"
import Header from "./Components/Pages/Header/Index"
import { Routes as RoutesComponents, Route,useLocation } from 'react-router-dom';
import Sidebar from "./Components/Pages/Header/MobileMenu/Sidebar"
import NotFound from "./assets/NotFound.svg"
import CvExamples from "../src/Containers/CvExamples/Examples"
import Download from "../src/Containers/Download"
import Auth from 'Containers/Auth/Auth';
import JobListingPage from 'Containers/JobListingPage/JobListingPage';
import Dashboard from 'Containers/Dashboard/Dashboard';
import CreateJob from 'Containers/Jobs/CreateJobs';
import UpdateJob from 'Containers/Jobs/UpdateJob';
import PrivateRoutes from 'routes/privateRoutes';
import GetAllJobs from 'Containers/Jobs/GetAllJobs';
import Applicants from 'Containers/Applicants';
import Messages from 'Containers/Messages';
import Profile from 'Containers/Profile';
import ViewAppicant from 'Containers/Applicants/ViewAppicant';
import SavedJobs from 'Containers/JobListingPage/SavedJobs';
import UserListingPage from 'Containers/UserListingPage';
import ViewUserProfile from 'Containers/UserListingPage/ViewUserProfile';

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
    const location = useLocation()
    const showHeader = location.pathname.includes("auth")
    return (
        <>
                {/* <Sidebar /> */}
               {!showHeader && <Header /> } 

                <RoutesComponents>

                    <Route  path="" element={<Home/>} />
                    {/* <Route path="/RrethNesh" component={() => <h2>Rreth nesh</h2>} /> */}
                    <Route path="/Krijo" element={<CreateCv/>} />
                    <Route path="/Cv/shembuj" element={<CvExamples/>} />
                    <Route path="/CV/Download" element={<Download/>} />
                    <Route path="/auth" element={<Auth/>} />
                    <Route path="/jobs/list" element={<JobListingPage/>} />
                    <Route path="/users/list" roles={["company"]} element={<UserListingPage/>} />
                    <Route path="/users/profile/:id" roles={["company"]} element={<ViewUserProfile/>} />

                    <Route path="dashboard" element={<PrivateRoutes roles={["company","user"]}> <Dashboard/> </PrivateRoutes>} />
                    <Route path="/job/create" element={<PrivateRoutes roles={["company"]}>
                        <CreateJob/>
                    </PrivateRoutes>} />
                    <Route path="/jobs/all" element={<PrivateRoutes roles={["company"]}>
                        <GetAllJobs/>
                    </PrivateRoutes>} />
                    <Route path="applicants" element={<PrivateRoutes roles={["company","user"]}>
                        <Applicants/>
                    </PrivateRoutes>} />
                    <Route path="applicant/:id" element={<PrivateRoutes roles={["company","user"]}>
                        <ViewAppicant/>
                    </PrivateRoutes>} />
                    <Route path="messages" element={<PrivateRoutes roles={["company","user"]}>
                        <Messages/>
                    </PrivateRoutes>} />
                    <Route path="profile" element={<PrivateRoutes roles={["company","user"]}>
                        <Profile/>
                    </PrivateRoutes>} />
                    <Route path="/jobs/saved" element={<PrivateRoutes roles={["user"]}>
                        <SavedJobs/>
                    </PrivateRoutes>} />
                    <Route path="/job/update/:id" element={<UpdateJob/>}  />

                    <Route path="*" element={ <div>
                        <img src={NotFound} style={imageStyles} />
                        <h1 style={Erororr}>404</h1>
                        <h2 style={Description}>Faqja e kerkuar nuk gjendet</h2>
                    </div>} />
                </RoutesComponents>
        </>
    )
}
