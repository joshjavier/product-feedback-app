import { useNavigate } from 'react-router-dom'
import Board from '../features/feedbacks/Board'

const Roadmap = () => {
  const navigate = useNavigate()

  return (
    <main className="container mx-auto xl:max-w-[1110px]">
      <div className="card card-body flex-row justify-between items-center">
        <div>
          <button
            className="btn btn-ghost"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
          <h1 className="card-title">Roadmap</h1>
        </div>
        <button className="btn btn-primary">Add Feedback</button>
      </div>
      <div className="grid lg:grid-cols-3">
        <Board
          status="planned"
          title="Planned"
          description="Ideas prioritized for research"
        />
        <Board
          status="in-progress"
          title="In-Progress"
          description="Currently being developed"
        />
        <Board
          status="live"
          title="Live"
          description="Released features"
        />
      </div>
    </main>
  )
}

export default Roadmap
