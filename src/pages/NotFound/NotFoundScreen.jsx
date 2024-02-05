import { Link } from "react-router-dom";
import { Images } from "../../assets/images";
import { ArrowLeft, House } from "@phosphor-icons/react";
import "./NotFoundScreen.scss";

const NotFoundScreen = () => {
  return (
    <div className="pg-not-found">
      <div className="container">
        <div className="segment-not-found">
          <div className="not-found">
            <div className="not-found-img">
              <img src={Images.PageNotFound} alt="" />
            </div>
            <h2 className="not-found-ttl">404, Page not found!</h2>
            <p className="not-found-lead">
              Something went wrong. It’s look that your requested could not be
              found. It’s look like the link is broken or the page is removed.
            </p>
            <div className="not-found-btns">
              <Link to="/" className="btn btn-primary btn-outline">
                <span className="btn-icon">
                  <ArrowLeft size={20} weight="bold" />
                </span>
                <span className="btn-text">go back</span>
              </Link>
              <Link to="/" className="btn btn-primary">
                <span className="btn-icon">
                  <House size={20} />
                </span>
                <span className="btn-text">go to home</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundScreen;
