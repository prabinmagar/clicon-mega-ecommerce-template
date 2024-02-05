import { Link } from "react-router-dom";
import "./PopularTopics.scss";
import { topics } from "../../../../data/mockData";

const PopularTopics = () => {
  return (
    <div className="comp-support-topics">
      <div className="container">
        <div className="segment-support-topics">
          <h3 className="support-topics-ttl">popular topics</h3>
          <div className="support-topics-list">
            {topics?.map((topic) => (
              <div key={topic.id} className="support-topics-item">
                <span className="support-topics-item-dot"></span>
                <Link>{topic.question}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularTopics;
