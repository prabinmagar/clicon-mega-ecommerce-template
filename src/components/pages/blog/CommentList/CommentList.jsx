import { ArrowsClockwise } from "@phosphor-icons/react";
import { comments } from "../../../../data/mockData";
import "./CommentList.scss";

const CommentList = () => {
  return (
    <div className="comp-comment-list">
      <div className="segment-comment-list">
        <h4 className="comment-list-ttl">Comments</h4>
        <div className="comment-list">
          {comments?.map((comment) => (
            <div className="comment-item" key={comment.id}>
              <div className="comment-item-avatar">
                <img src={comment.authorImg} alt="" />
              </div>
              <div className="comment-item-info">
                <div className="comment-item-metainfo">
                  <p className="comment-item-author">{comment.author}</p>
                  <span className="comment-item-dot"></span>
                  <p className="comment-item-date">{comment.date}</p>
                </div>
                <div className="comment-item-text">{comment.content}</div>
              </div>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="btn-load btn btn-primary btn-outline btn-sm"
        >
          <span className="btn-icon">
            <ArrowsClockwise size={32} weight="fill" />
          </span>
          <span className="btn-text">load more</span>
        </button>
      </div>
    </div>
  );
};

export default CommentList;
