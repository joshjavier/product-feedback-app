import CommentCount from "./comment-count";
import UpvoteButton from "./upvote-button";

export default function RequestCard() {
  return (
    <article className="bg-white">
      <h3>title</h3>
      <p>In Progress</p>
      <p>description</p>
      <p>category</p>
      <UpvoteButton total={99} />
      <CommentCount />
    </article>
  );
}
