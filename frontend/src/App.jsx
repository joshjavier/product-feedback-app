const App = () => {
  return (
    <div className="container mx-auto px-4 max-w-[1110px] flex flex-col md:flex-row gap-[30px]">
      <div className="sidebar md:max-w-[255px]">
        <div className="card card-body">
          <div>Frontend Mentor</div>
          <div>Feedback Board</div>
        </div>
        <div className="card card-body">
          <div className="card-actions">
            <button className="btn btn-outline">All</button>
            <button className="btn btn-outline">UI</button>
            <button className="btn btn-outline">UX</button>
            <button className="btn btn-outline">Enhancement</button>
            <button className="btn btn-outline">Bug</button>
            <button className="btn btn-outline">Feature</button>
          </div>
        </div>
        <div className="card card-body">
          <div className="card-title">Roadmap</div>
          <div>Planned 0</div>
          <div>In-Progress 0</div>
          <div>Live 0</div>
        </div>
      </div>
      <div>
        <div className="card card-body">
          <div>0 Suggestions</div>
          <div>Sort by: Most Upvotes</div>
          <button className="btn btn-primary">Add Feedback</button>
        </div>
        <div className="card card-body">
          <div>There is no feedback yet.</div>
          <div>Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</div>
          <button className="btn btn-primary">Add Feedback</button>
        </div>
      </div>
    </div>
  )
}

export default App
