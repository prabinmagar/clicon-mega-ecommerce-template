import { Link } from "react-router-dom";
import "./PopularTopics.scss";
import { topics } from "../../../../data/mockData";

const PopularTopics = () => {
  return (
    <div className="comp-ptopics">
      <div className="container">
        <div className="seg-ptopics">
          <h3 className="elem-ptopics-ttl">popular topics</h3>
          <div className="elem-ptopics-list">
            {topics?.map((topic) => (
              <div key={topic.id} className="ptopics-item">
                <span className="ptopics-item-dot"></span>
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
