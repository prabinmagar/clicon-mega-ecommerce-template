import Breadcrumb from "../../components/common/Breadcrumb/Breadcrumb";
import BlogDisplay from "../../components/pages/blog/BlogDisplay/BlogDisplay";
import BlogSidebar from "../../components/pages/blog/BlogSidebar/BlogSidebar";
import "./BlogScreen.scss";

const BlogScreen = () => {
  const breadData = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "Pages",
      link: "/pages",
    },
    {
      text: "Blog",
      link: "/blog",
    },
  ];

  return (
    <div className="pg-blog">
      <Breadcrumb breadData={breadData} />
      <div className="container">
        <div className="segment-blog-gridbox">
          <BlogSidebar />
          <BlogDisplay />
        </div>
      </div>
    </div>
  );
};

export default BlogScreen;
