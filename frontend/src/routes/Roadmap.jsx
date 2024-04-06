import { Link } from 'react-router-dom'
import Board from '../features/feedbacks/Board'
import BackButton from '../components/BackButton'

const Roadmap = () => {
  return (
    <main className="container mx-auto mt-[78px] mb-[179px] xl:max-w-[1110px]">
      <div className="card bg-neutral text-white mb-12 py-[27px] ps-8 pe-10 flex-row justify-between items-center">
        <div>
          <BackButton theme="dark" />
          <h1 className="font-bold text-2xl tracking-[-0.33px]">Roadmap</h1>
        </div>
        <Link to="/feedback-new" className="btn btn-primary font-bold w-[158px]">
          <span aria-hidden="true">+</span> Add Feedback
        </Link>
      </div>
      <div className="grid lg:grid-cols-3 gap-x-[30px]">
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
