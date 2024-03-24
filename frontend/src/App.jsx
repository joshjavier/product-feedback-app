import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { initializeFeedbacks } from './reducers/feedbacksReducer'
import { initializeUser } from './reducers/userReducer'
import { Route, Routes } from 'react-router-dom'
import Index from './routes/Index'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeFeedbacks())
    dispatch(initializeUser())
  }, [dispatch])

  return (
    <Routes>
      <Route path="/" element={<Index />} />
    </Routes>
  )
}

export default App
