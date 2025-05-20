import HomeGridArticle from "@/components/HomeGridArticle";
import { HomeGrideArticleType } from "@/utils/types";

const article:HomeGrideArticleType[] = [
  {
    title: "Sunny days",
    image: "/image1.jpg",
    style: "primary",
  },
  {
    title: "Cute Bugs",
    image: "/image2.jpg",
    style: "secondary",
  },
  {
    title: "Dancing Pokemon",
    image: "/image3.jpg",
    style: "tertiary",
  },
  {
    title: "Fire + Fighting",
    image: "/image4.jpg",
    style: "featured",
  },
  {
    title: "New Models released",
    image: "/image5.jpg",
    style: "primary",
  },
  {
    title: "Small but Tough",
    image: "/image6.jpg",
    style: "seconday",
  }

];

export default function Home() {
  return (
    <div className="home-grid">
      {/* instead of this we use the spread operator */}
      {/* {article.map((item:HomeGrideArticleType, index:number) => <HomeGridArticle  key={index} title={item.title} image={item.image} style={item.style}/>)} */}
     {article.map((item:HomeGrideArticleType, index:number) =>
       <HomeGridArticle key={index} {...item}/>)}
    </div>
  );
}
