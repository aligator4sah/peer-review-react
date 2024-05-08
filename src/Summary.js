import TopicCard from './TopicCard';
import './Summary.css';

function Summary() {
    return (
        <div className="review-summary">
        <div className="sideBar">
          <TopicCard />
          </div>
          <div className="sideBar">
          <TopicCard/>
        </div>
        </div>
    )
}

export default Summary