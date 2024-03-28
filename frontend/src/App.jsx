import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchProductRequests } from './features/feedbacks/feedbacksSlice'
import { initializeUser } from './features/currentUser/currentUserSlice'
import { Route, Routes } from 'react-router-dom'
import Index from './routes/Index'
import FeedbackNew from './routes/FeedbackNew'
import FeedbackDetail from './routes/FeedbackDetail'
import Roadmap from './routes/Roadmap'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProductRequests())
    dispatch(initializeUser())
  }, [dispatch])

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/feedback-new" element={<FeedbackNew />} />
      <Route path="/feedback/:id" element={<FeedbackDetail />} />
      <Route path="/roadmap" element={<Roadmap />} />
    </Routes>
  )
}

export default App
