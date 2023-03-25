import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Freelance from './pages/Freelance'
import Error from './pages/Error'
import Navbar from './components/Navbar'
import Result from './pages/Results'
import Footer from './components/Footer'
import GlobalStyle from './utils/styles/GlobalStyle'
import {ThemeProvider, SurveyProvider} from './utils/context'



 function App() {

  return (
    <ThemeProvider>
      <SurveyProvider>
      <Router>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route index element={<Home />}/>
          <Route path='/survey' element={<Survey />}/>
          <Route path='/survey/:questionNumber' element={<Survey />}/>
          <Route path='/results' element={<Result />}/>
          <Route path='/freelance' element={<Freelance />}/>
          <Route path='*' element={<Error />}/>
        </Routes>
        <Footer />
      </Router>
      </SurveyProvider>
    </ThemeProvider>
  )
}
export default App