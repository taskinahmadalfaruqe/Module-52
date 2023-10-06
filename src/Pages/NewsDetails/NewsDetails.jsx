import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "../../Component/Header/Header";
import RightSiteNav from "../../Component/RightSiteNav/RightSiteNav";
import { useEffect, useState } from "react";

const NewsDetails = () => {
  const [lodeDetails, setDetails] = useState("");
  const { id } = useParams();
  const news = useLoaderData();
  const { title, image_url, details, category_id} =lodeDetails;
  // const {name, published_date, img} = author;
  // const {number, badge} = rating;
  useEffect(() => {
    const findNews = news.find((value) => value._id == id);
    setDetails(findNews);
  }, [id, news]);
  console.log(lodeDetails)

  return (
    <div>
      <Header></Header>
      <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-4">

        <div className="md:col-span-2 lg:col-span-3">
          <h2 className="text-2xl font-semibold mb-3"> Dragon News</h2>
          <div className=" space-y-5 border p-2 rounded-md ">
            <img className="mx-auto" src={image_url} alt="NewsImage" />
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="md:leading-6 lg:leading-10 ">{details}</p>
          </div>
          <Link to={`/category/${category_id}`}> 
          <button className="btn btn-primary bg-[#D72050] text-white text-md border-[#D72050] font-semibold mt-5">
          See All News This Category 
          </button>
          </Link>
        </div>
        <RightSiteNav className="col-span-1"></RightSiteNav>
      </div>
    </div>
  );
};

export default NewsDetails;
