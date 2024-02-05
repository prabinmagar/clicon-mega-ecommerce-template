import Breadcrumb from "../../components/common/Breadcrumb/Breadcrumb";
import BlogSidebar from "../../components/pages/blog/BlogSidebar/BlogSidebar";
import "./BlogDetailsScreen.scss";
import BlogDetails from "../../features/blog/BlogDetails/BlogDetails";
import { Images } from "../../assets/images";

const BlogDetailsScreen = () => {
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
    {
      text: "Blog Detail",
      link: "/blog/detail",
    },
  ];

  return (
    <div className="pg-blog-details">
      <Breadcrumb breadData={breadData} />
      <div className="container">
        <div className="segment-blog-details-wrap">
          <div className="blog-details-hero">
            <img src={Images.BlogDetailsImg} alt="" />
          </div>
          <div className="blog-details-gridbox">
            <BlogDetails />
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsScreen;
