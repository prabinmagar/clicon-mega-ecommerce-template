import BlogFilter from "../../../../features/blog/BlogFilter/BlogFilter";
import BlogGallery from "../../../../features/blog/BlogGallery/BlogGallery";
import BlogLatest from "../../../../features/blog/BlogLatest/BlogLatest";
import BlogTags from "../../../../features/blog/BlogTags/BlogTags";
import "./BlogSidebar.scss";

const BlogSidebar = () => {
  return (
    <div className="comp-blog-sidebar">
      <div className="seg-blog-sidebar">
        <div className="elem-blog-blocklist">
          <BlogFilter />
          <BlogLatest />
          <BlogGallery />
          <BlogTags />
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
