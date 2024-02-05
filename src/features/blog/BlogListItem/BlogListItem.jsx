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
    <div className="comp-blog-item">
      <div className="segment-blog-item">
        <div className="blog-item-img">
          <img src={blogItem.image} alt="" />
        </div>
        <div className="blog-item-body">
          <div className="blog-item-mdata">
            <div className="blog-item-mdata-byline">
              <span className="blog-item-mdata-icon">
                <UserCircle size={24} />
              </span>
              <span className="blog-item-mdata-text">{blogItem.author}</span>
            </div>
            <div className="blog-item-mdata-date">
              <span className="blog-item-mdata-icon">
                <CalendarBlank size={24} />
              </span>
              <span className="blog-item-mdata-text">
                {blogItem.publishedDate}
              </span>
            </div>
            <div className="blog-item-mdata-comment">
              <span className="blog-item-mdata-icon">
                <ChatTeardropDots size={24} />
              </span>
              <span className="blog-item-mdata-text">{blogItem.comments}</span>
            </div>
          </div>
          <h3 className="blog-item-title">{blogItem.title}</h3>
          <div className="blog-item-text">{blogItem.description}</div>
        </div>
        <div className="blog-item-foot">
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
