import { blogs } from "../../../data/mockData";
import BlogListItem from "../BlogListItem/BlogListItem";
import "./BlogList.scss";

const BlogList = () => {
  return (
    <div className="comp-blog-list">
      <div className="segment-blog-list">
        {blogs?.map((blogItem) => {
          return <BlogListItem key={blogItem.id} blogItem={blogItem} />;
        })}
      </div>
    </div>
  );
};

export default BlogList;
