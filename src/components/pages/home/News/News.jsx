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
        <div className="seg-news">
          <div className="elem-news-item">
            <div className="item-img">
              <img src={Images.News1} alt="" />
            </div>
            <div className="item-body">
              <div className="item-metadata">
                <div className="metadata-byline">
                  <span className="meta-icon">
                    <UserCircle size={18} />
                  </span>
                  <span className="meta-text">Kristin</span>
                </div>
                <div className="metadata-date">
                  <span className="meta-icon">
                    <CalendarBlank size={18} />
                  </span>
                  <span className="meta-text">19 Dec, 2013</span>
                </div>
                <div className="metadata-comment">
                  <span className="meta-icon">
                    <ChatTeardropDots size={18} />
                  </span>
                  <span className="meta-text">453</span>
                </div>
              </div>
              <h3 className="item-title">
                Cras nisl dolor, accumsan et metus sit amet, vulputate
                condimentum dolor.
              </h3>
              <div className="item-text">
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

          <div className="elem-news-item">
            <div className="item-img">
              <img src={Images.News2} alt="" />
            </div>
            <div className="item-body">
              <div className="item-metadata">
                <div className="metadata-byline">
                  <span className="meta-icon">
                    <UserCircle size={18} />
                  </span>
                  <span className="meta-text">Kristin</span>
                </div>
                <div className="metadata-date">
                  <span className="meta-icon">
                    <CalendarBlank size={18} />
                  </span>
                  <span className="meta-text">19 Dec, 2013</span>
                </div>
                <div className="metadata-comment">
                  <span className="meta-icon">
                    <ChatTeardropDots size={18} />
                  </span>
                  <span className="meta-text">453</span>
                </div>
              </div>
              <h3 className="item-title">
                Cras nisl dolor, accumsan et metus sit amet, vulputate
                condimentum dolor.
              </h3>
              <div className="item-text">
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

          <div className="elem-news-item">
            <div className="item-img">
              <img src={Images.News3} alt="" />
            </div>
            <div className="item-body">
              <div className="item-metadata">
                <div className="metadata-byline">
                  <span className="meta-icon">
                    <UserCircle size={18} />
                  </span>
                  <span className="meta-text">Kristin</span>
                </div>
                <div className="metadata-date">
                  <span className="meta-icon">
                    <CalendarBlank size={18} />
                  </span>
                  <span className="meta-text">19 Dec, 2013</span>
                </div>
                <div className="metadata-comment">
                  <span className="meta-icon">
                    <ChatTeardropDots size={18} />
                  </span>
                  <span className="meta-text">453</span>
                </div>
              </div>
              <h3 className="item-title">
                Cras nisl dolor, accumsan et metus sit amet, vulputate
                condimentum dolor.
              </h3>
              <div className="item-text">
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
