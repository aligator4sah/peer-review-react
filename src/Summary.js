import TopicCard from './TopicCard';
import './Summary.css';
import Comments from './Comments';

function Summary() {
  return (
    <div className="review-summary">
      <div className="sideBar">
        <TopicCard />
      </div>
      <div className="sideBar">
        <Comments />
      </div>
    </div>
  )
}

export default Summary