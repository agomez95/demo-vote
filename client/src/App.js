import * as React from "react"
import Votes from "./pages/Votes"
import Candidates from "./pages/Candidates"
import Amphoras from "./pages/Amphoras"
import MainLayout from "./layouts/MainLayout"
import NotFound from "./layouts/NotFound"
import NotConnected from "./layouts/NoConnected"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route path="votes" element={<Votes />} />
                    <Route path="candidates" element={<Candidates />} />
                    <Route path="amphoras" element={<Amphoras />} />
                    <Route path="notconnected" element={<NotConnected />} />
                </Route>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default App;