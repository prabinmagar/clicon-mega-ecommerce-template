import { ArrowsClockwise } from "@phosphor-icons/react";
import { comments } from "../../../../data/mockData";
import "./CommentList.scss";

const CommentList = () => {
  return (
    <div className="comp-cmtlist">
      <div className="seg-cmtlist">
        <h4 className="elem-cmtlist-ttl">Comments</h4>
        <div className="elem-cmtlist">
          {comments?.map((comment) => (
            <div className="cmtitem" key={comment.id}>
              <div className="cmtitem-avatar">
                <img src={comment.authorImg} alt="" />
              </div>
              <div className="cmtitem-info">
                <div className="cmtitem-metainfo">
                  <p className="cmtitem-author">{comment.author}</p>
                  <span className="cmtitem-dot"></span>
                  <p className="cmtitem-date">{comment.date}</p>
                </div>
                <div className="cmtitem-text">{comment.content}</div>
              </div>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="elem-btn-load btn btn-primary btn-outline btn-sm"
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
