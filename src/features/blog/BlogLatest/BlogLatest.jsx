import { blogs } from "../../../data/mockData";
import "./BlogLatest.scss";

const BlogLatest = () => {
  return (
    <div className="blog-late-block">
      <h3 className="blog-sidebar-ttl">latest blog</h3>
      <div className="blog-late-list">
        {blogs?.slice(0, 3)?.map((blog) => {
          return (
            <div className="blog-late-item" key={blog.id}>
              <div className="blog-late-img">
                <img src={blog.image} alt="blog image" />
              </div>
              <div className="blog-late-content">
                <h4 className="blog-late-ttl">{blog.title}</h4>
                <p className="blog-late-date">{blog.publishedDate}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogLatest;
