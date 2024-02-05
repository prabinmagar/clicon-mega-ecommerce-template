import {
  ArrowRight,
  CalendarBlank,
  ChatTeardropDots,
  UserCircle,
} from "@phosphor-icons/react";
import { Images } from "../../../../assets/images";
import Title from "../../../common/Title/Title";
import "./News.scss";

const News = () => {
  return (
    <div className="comp-news">
      <div className="container">
        <Title titleText={"Latest News"} isCentered={true} />
        <div className="segment-news">
          <div className="news-item card-item">
            <div className="card-item-img">
              <img src={Images.News1} alt="" />
            </div>
            <div className="card-item-body">
              <div className="card-item-mdata">
                <div className="card-item-mdata-byline">
                  <span className="card-item-mdata-icon">
                    <UserCircle size={18} />
                  </span>
                  <span className="card-item-mdata-text">Kristin</span>
                </div>
                <div className="card-item-mdata-date">
                  <span className="card-item-mdata-icon">
                    <CalendarBlank size={18} />
                  </span>
                  <span className="card-item-mdata-text">19 Dec, 2013</span>
                </div>
                <div className="card-item-mdata-comment">
                  <span className="card-item-mdata-icon">
                    <ChatTeardropDots size={18} />
                  </span>
                  <span className="card-item-mdata-text">453</span>
                </div>
              </div>
              <h3 className="card-item-title">
                Cras nisl dolor, accumsan et metus sit amet, vulputate
                condimentum dolor.
              </h3>
              <div className="card-item-text">
                Maecenas scelerisque, arcu quis tempus egestas, ligula diam
                molestie lectus, tincidunt malesuada arcu metus posuere metus.
              </div>
              <button className="btn btn-primary btn-outline">
                <span className="btn-text">shop now</span>
                <span className="btn-icon">
                  <ArrowRight size={16} />
                </span>
              </button>
            </div>
          </div>

          <div className="news-item card-item">
            <div className="card-item-img">
              <img src={Images.News2} alt="" />
            </div>
            <div className="card-item-body">
              <div className="card-item-mdata">
                <div className="card-item-mdata-byline">
                  <span className="card-item-mdata-icon">
                    <UserCircle size={18} />
                  </span>
                  <span className="card-item-mdata-text">Kristin</span>
                </div>
                <div className="card-item-mdata-date">
                  <span className="card-item-mdata-icon">
                    <CalendarBlank size={18} />
                  </span>
                  <span className="card-item-mdata-text">19 Dec, 2013</span>
                </div>
                <div className="card-item-mdata-comment">
                  <span className="card-item-mdata-icon">
                    <ChatTeardropDots size={18} />
                  </span>
                  <span className="card-item-mdata-text">453</span>
                </div>
              </div>
              <h3 className="card-item-title">
                Cras nisl dolor, accumsan et metus sit amet, vulputate
                condimentum dolor.
              </h3>
              <div className="card-item-text">
                Maecenas scelerisque, arcu quis tempus egestas, ligula diam
                molestie lectus, tincidunt malesuada arcu metus posuere metus.
              </div>
              <button className="btn btn-primary btn-outline">
                <span className="btn-text">shop now</span>
                <span className="btn-icon">
                  <ArrowRight size={16} />
                </span>
              </button>
            </div>
          </div>

          <div className="news-item card-item">
            <div className="card-item-img">
              <img src={Images.News3} alt="" />
            </div>
            <div className="card-item-body">
              <div className="card-item-mdata">
                <div className="card-item-mdata-byline">
                  <span className="card-item-mdata-icon">
                    <UserCircle size={18} />
                  </span>
                  <span className="card-item-mdata-text">Kristin</span>
                </div>
                <div className="card-item-mdata-date">
                  <span className="card-item-mdata-icon">
                    <CalendarBlank size={18} />
                  </span>
                  <span className="card-item-mdata-text">19 Dec, 2013</span>
                </div>
                <div className="card-item-mdata-comment">
                  <span className="card-item-mdata-icon">
                    <ChatTeardropDots size={18} />
                  </span>
                  <span className="card-item-mdata-text">453</span>
                </div>
              </div>
              <h3 className="card-item-title">
                Cras nisl dolor, accumsan et metus sit amet, vulputate
                condimentum dolor.
              </h3>
              <div className="card-item-text">
                Maecenas scelerisque, arcu quis tempus egestas, ligula diam
                molestie lectus, tincidunt malesuada arcu metus posuere metus.
              </div>
              <button className="btn btn-primary btn-outline">
                <span className="btn-text">shop now</span>
                <span className="btn-icon">
                  <ArrowRight size={18} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
