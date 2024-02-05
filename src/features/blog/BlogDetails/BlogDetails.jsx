import {
  CalendarBlank,
  ChatCircleDots,
  Stack,
  UserCircle,
} from "@phosphor-icons/react";
import "./BlogDetails.scss";
import { Images } from "../../../assets/images";
import { Link } from "react-router-dom";
import CommentForm from "../../../components/pages/blog/CommentForm/CommentForm";
import CommentList from "../../../components/pages/blog/CommentList/CommentList";

const BlogDetails = () => {
  return (
    <div className="comp-blog-details">
      <div className="segment-blog-details">
        <div className="blog-details-mdata">
          <div className="blog-details-mdata-list">
            <div className="blog-details-mdata-item">
              <span className="blog-details-mdata-icon">
                <Stack size={24} />
              </span>
              <span className="blog-details-mdata-text">Electronics</span>
            </div>
            <div className="blog-details-mdata-item">
              <span className="blog-details-mdata-icon">
                <UserCircle size={24} />
              </span>
              <span className="blog-details-mdata-text">Marvin McKinney</span>
            </div>
            <div className="blog-details-mdata-item">
              <span className="blog-details-mdata-icon">
                <CalendarBlank size={24} />
              </span>
              <span className="blog-details-mdata-text">8 Sep, 2020</span>
            </div>
            <div className="blog-details-mdata-item">
              <span className="blog-details-mdata-icon">
                <ChatCircleDots size={24} />
              </span>
              <span className="blog-details-mdata-text">738</span>
            </div>
          </div>
        </div>
        <h2 className="blog-details-ttl">
          How artist collective Meow Wolf’s website complements their immersive
          venues
        </h2>
        <div className="blog-details-top">
          <div className="blog-details-author">
            <div className="details-author-img">
              <img src={Images.Author} alt="" />
            </div>
            <span className="details-author-name">Cameron Williamson</span>
          </div>
          <div className="blog-details-links">
            <Link to="/" className="details-link-item">
              <img src={Images.WhatsappIcon} alt="" />
            </Link>
            <Link to="/" className="details-link-item">
              <img src={Images.FacebookIcon} alt="" />
            </Link>
            <Link to="/" className="details-link-item">
              <img src={Images.TwitterIcon} alt="" />
            </Link>
            <Link to="/" className="details-link-item">
              <img src={Images.LinkedinIcon} alt="" />
            </Link>
            <Link to="/" className="details-link-item">
              <img src={Images.PinterestIcon} alt="" />
            </Link>
            <Link to="/" className="details-link-item">
              <img src={Images.LinkIcon} alt="" />
            </Link>
          </div>
        </div>
        <div className="blog-details-content">
          <div className="content-stylings">
            <p>
              Sed a laoreet erat, in vehicula erat. Vivamus a viverra ipsum, ut
              interdum tellus. Donec quis ex quis metus sodales facilisis ut nec
              ex. Ut commodo lacus vel odio venenatis, sit amet lacinia lacus
              cursus. Ut sodales laoreet dapibus. Sed aliquam nisl odio, sed
              blandit erat placerat sed. Mauris eleifend, magna in convallis
              congue, orci est fermentum leo, at tincidunt massa ligula semper
              dolor. Nunc tristique enim in risus tristique rutrum eget ac eros.
            </p>
            <blockquote>
              Vintage meets vogue is the only way to describe this serif
              typeface. Neue World encompasses the mode high-fashion aesthetic
              of the 1960s with a commercial take.
            </blockquote>
            <p>
              Mauris fermentum faucibus risus a efficitur. Morbi sit amet arcu
              turpis. Ut nisl velit, mattis at augue vel, molestie egestas
              justo. Aliquam elementum nibh neque, eu ornare nunc feugiat sed.
              Aliquam erat volutpat. Praesent vitae orci blandit, semper felis
              ac, interdum lacus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              iaculis nunc urna, id lobortis elit dapibus et. Etiam ultricies
              leo justo, nec vehicula augue auctor et. Sed finibus volutpat dui.
              Nunc vitae urna dictum tellus luctus tincidunt quis feugiat dolor.
              Aliquam malesuada tristique urna, quis ornare diam venenatis quis.
              Nunc ligula lectus, posuere sit amet ultrices ut, porttitor
              efficitur mauris. Aliquam bibendum vitae turpis sed molestie.
              Donec massa lorem, semper vel pellentesque ut, ultrices in enim.
              Sed fringilla, mi porttitor sodales vehicula, felis enim gravida
              nisi, at mollis ante leo et ligula. Quisque non aliquam eros, in
              aliquet tellus. Mauris ullamcorper quam erat, vehicula rhoncus
              velit interdum eget.
            </p>
            <img src={Images.BlogDetailsImg1} alt="" />
            <img src={Images.BlogDetailsImg2} alt="" />
            <p>
              Proin pulvinar quam at aliquet sagittis. Quisque laoreet luctus
              bibendum. Aenean in dignissim orci. Suspendisse at augue eget
              neque dictum vestibulum eu ac orci. Integer imperdiet lectus nec
              urna mollis euismod. Proin et risus nulla. Cras at diam in risus
              feugiat accumsan. Nulla sit amet blandit mi, a convallis mauris.
              Quisque lacus dolor, cursus ac quam ac, tempus ultrices sem. Ut
              porttitor.
            </p>
            <ul>
              <li>
                Aliquam malesuada tristique urna, quis ornare diam venenatis
                quis. Nunc ligula lectus, posuere sit amet ultrices ut.
              </li>
              <li>
                Aenean in dignissim orci. Suspendisse at augue eget neque dictum
                vestibulum eu ac orci.
              </li>
              <li>
                Praesent vitae orci blandit, semper felis ac, interdum lacus.
              </li>
            </ul>
          </div>
        </div>
        <CommentForm />
        <CommentList />
      </div>
    </div>
  );
};

export default BlogDetails;
