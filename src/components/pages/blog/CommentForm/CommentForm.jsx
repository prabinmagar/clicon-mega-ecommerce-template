import "./CommentForm.scss";

const CommentForm = () => {
  return (
    <div className="comp-comment-form">
      <div className="segment-comment-form">
        <form className="comment-form">
          <h4 className="comment-form-ttl">Leave a Comments</h4>
          <div className="form-wrapper">
            <div className="form-elem-cols-2">
              <div className="form-elem">
                <label htmlFor="" className="form-lbl">
                  Full Name
                </label>
                <input type="text" className="form-ctrl" />
              </div>
              <div className="form-elem">
                <label htmlFor="" className="form-lbl">
                  Email Address
                </label>
                <input type="text" className="form-ctrl" />
              </div>
            </div>
            <div className="form-elem">
              <label htmlFor="" className="form-lbl">
                Description
              </label>
              <textarea
                name=""
                className="form-ctrl"
                placeholder="What's your thought about this blog ..."
              ></textarea>
            </div>
          </div>
          <button type="button" className="form-btn btn btn-primary">
            <span className="btn-text">post comments</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommentForm;
