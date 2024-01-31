import {
  ArrowRight,
  CalendarBlank,
  ChatTeardropDots,
  UserCircle,
} from "@phosphor-icons/react";
import "./BlogListItem.scss";
import "./BlogListItem.scss";
import { PropTypes } from "prop-types";

const BlogListItem = ({ blogItem }) => {
  return (
    <div className="comp-blogitem">
      <div className="seg-blogitem">
        <div className="blogitem-img">
          <img src={blogItem.image} alt="" />
        </div>
        <div className="blogitem-body">
          <div className="blogitem-metadata">
            <div className="metadata-byline">
              <span className="meta-icon">
                <UserCircle size={24} />
              </span>
              <span className="meta-text">{blogItem.author}</span>
            </div>
            <div className="metadata-date">
              <span className="meta-icon">
                <CalendarBlank size={24} />
              </span>
              <span className="meta-text">{blogItem.publishedDate}</span>
            </div>
            <div className="metadata-comment">
              <span className="meta-icon">
                <ChatTeardropDots size={24} />
              </span>
              <span className="meta-text">{blogItem.comments}</span>
            </div>
          </div>
          <h3 className="blogitem-title">{blogItem.title}</h3>
          <div className="blogitem-text">{blogItem.description}</div>
        </div>
        <div className="blogitem-foot">
          <button className="btn btn-primary btn-outline">
            <span className="btn-text">read more</span>
            <span className="btn-icon">
              <ArrowRight size={20} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogListItem;

BlogListItem.propTypes = {
  blogItem: PropTypes.object,
};
