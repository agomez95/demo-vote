import * as React from "react"
import Votes from "./pages/Votes"
import Candidates from "./pages/Candidates"
import Amphoras from "./pages/Amphoras"
import Results from "./pages/Results"
import Participants from "./pages/Participants"
import MainLayout from "./layouts/MainLayout"
import NotFound from "./layouts/NotFound"
import NotConnected from "./layouts/NoConnected"
import Home from "./layouts/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Home />}/>
                <Route path="/" element={<MainLayout />}>
                    <Route path="votes" element={<Votes />} />
                    <Route path="candidates" element={<Candidates />} />
                    <Route path="amphoras" element={<Amphoras />} />
                    <Route path="notconnected" element={<NotConnected />} />

                    <Route path="results" element={<Results />} />
                    <Route path="participants" element={<Participants />} />
                </Route>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default App;