import React from "react"
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom"
import {Footer,Characters,CharacterPage,NotFoundPage,Input,Results,VisitedCharacters} from './pages'
import {FindPathProvider} from "./pages/Input"
import './styles/global.css'

function App() {
  return (
      <Router>
        <Routes>
            <Route path="/" element={
                <>
                    <Input/>
                    <Characters/>
                    <VisitedCharacters/>
                </>
            }/>
            <Route path="/people/:name" element={<CharacterPage/>}/>
                <Route path="/results/:findPath" element={
                    <FindPathProvider>
                        <Results/>
                    </FindPathProvider>
                }/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
        <Footer/>
      </Router>
  )
}

export default App