import { Images } from "../../../assets/images";
import "./BlogGallery.scss";

const BlogGallery = () => {
  return (
    <div className="blog-gallery-block blog-sidebar-block">
      <h3 className="blog-sidebar-ttl">gallery</h3>
      <div className="blog-gallery-list">
        <div className="blog-gallery-item">
          <img src={Images.Gallery1} alt="" />
        </div>
        <div className="blog-gallery-item">
          <img src={Images.Gallery2} alt="" />
        </div>
        <div className="blog-gallery-item">
          <img src={Images.Gallery3} alt="" />
        </div>
        <div className="blog-gallery-item">
          <img src={Images.Gallery4} alt="" />
        </div>
        <div className="blog-gallery-item">
          <img src={Images.Gallery5} alt="" />
        </div>
        <div className="blog-gallery-item">
          <img src={Images.Gallery6} alt="" />
        </div>
        <div className="blog-gallery-item">
          <img src={Images.Gallery7} alt="" />
        </div>
        <div className="blog-gallery-item">
          <img src={Images.Gallery8} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BlogGallery;
