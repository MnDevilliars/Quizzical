import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

import {
  HomePage,
  QuizesPage,
  AboutPage,
  CategoriesPage,
  StartPage,
  QuestionPage,
  ResultPage
} from './pages/index.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<HomePage />} />
      <Route path='/art-literature' element={<StartPage />} />
      <Route path='/general-knowledge' element={<StartPage />} />
      <Route path='/science' element={<StartPage />} />
      <Route path='/question' element={<QuestionPage />} />
      <Route path='/result' element={<ResultPage />} />
      <Route path='/quizzes' element={<QuizesPage />} />
      <Route path='/categories' element={<CategoriesPage />} />
      <Route path='/about-us' element={<AboutPage />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
