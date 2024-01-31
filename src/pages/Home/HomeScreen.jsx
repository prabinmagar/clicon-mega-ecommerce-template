import Newsletter from "../../components/common/Newsletter/Newsletter";
import Banner from "../../components/pages/home/Banner/Banner";
import BestDeals from "../../components/pages/home/BestDeals/BestDeals";
import Categories from "../../components/pages/home/Categories/Categories";
import FeaturedTabs from "../../components/pages/home/FeaturedTabs/FeaturedTabs";
import Features from "../../components/pages/home/Features/Features";
import News from "../../components/pages/home/News/News";
import ProductShowcase from "../../components/pages/home/ProductShowcase/ProductShowcase";
import SingleBanner from "../../components/pages/home/SingleBanner/SingleBanner";
import SubCategoryTabs from "../../components/pages/home/SubCategoryTabs/SubCategoryTabs";
import { products } from "../../data/mockData";

const HomeScreen = () => {
  const productShowcaseData = [
    {
      id: 1,
      title: "flash sale today",
      products: products.slice(0, 3),
    },
    {
      id: 2,
      title: "best sellers",
      products: products.slice(3, 6),
    },
    {
      id: 3,
      title: "top rated",
      products: products.slice(6, 9),
    },
    {
      id: 4,
      title: "new arrival",
      products: products.slice(9, 12),
    },
  ];

  return (
    <div className="pg-home">
      <Banner />
      <Features />
      <BestDeals />
      <Categories />
      <FeaturedTabs />
      <SubCategoryTabs />
      <SingleBanner />
      <ProductShowcase productShowcaseData={productShowcaseData} />
      <News />
      <Newsletter />
    </div>
  );
};

export default HomeScreen;
