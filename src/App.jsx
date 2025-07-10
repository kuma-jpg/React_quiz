import { BrowserRouter, HashRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import { ROUTES } from './const'
import HomePage from './Pages/HomePage'
import QuizPage from './Pages/QuizPage'
import ResultPage from './Pages/ResultPage'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage/>} />
        <Route path={ROUTES.QUIZ} element={<QuizPage />} />
        <Route path={ROUTES.RESULT} element={<ResultPage />} />
      </Routes>
    </HashRouter>
  )
}

export default App
