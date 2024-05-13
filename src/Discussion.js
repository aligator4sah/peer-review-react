import TopicCard from './TopicCard';
import './Summary.css';
import Comments from './Comments';
import Message from './Message';

function Discussion() {
    return (
        <div className="review-summary">
            <div className="sideBar">
                <TopicCard />
            </div>
            <div className="sideBar">
                <Message />
            </div>
        </div>
    )
}

export default Discussion