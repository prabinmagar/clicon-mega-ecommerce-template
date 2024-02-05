import { blogs } from "../../../data/mockData";
import "./BlogLatest.scss";

const BlogLatest = () => {
  return (
    <div className="blog-latest-block blog-sidebar-block">
      <h3 className="blog-sidebar-ttl">latest blog</h3>
      <div className="blog-latest-list">
        {blogs?.slice(0, 3)?.map((blog) => {
          return (
            <div className="blog-latest-item" key={blog.id}>
              <div className="blog-latest-img">
                <img src={blog.image} alt="blog image" />
              </div>
              <div className="blog-latest-content">
                <h4 className="blog-latest-ttl">{blog.title}</h4>
                <p className="blog-latest-date">{blog.publishedDate}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogLatest;
