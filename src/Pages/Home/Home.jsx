import { useLoaderData } from "react-router-dom";
import Header from "../../Component/Header/Header";
import LeftSideNav from "../../Component/LeftSideNav/LeftSideNav";
import RightSiteNav from "../../Component/RightSiteNav/RightSiteNav";
import LodeSingleNews from "../../Component/LodeSingleNews/LodeSingleNews";
import { useContext } from "react";
import { AuthContext } from "../../Context/Context";
// import { useState } from "react";

const Home = () => {
  const news = useLoaderData();

  const { isLoading } = useContext(AuthContext);
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[100vh] w-full">
        <span className="loading loading-spinner loading-lg text-red-500"></span>
      </div>
    );
  }

  return (
    <div className=" py-10">
      <Header></Header>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        <div className="lg:col-span-1">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold">Dragon News Home</h2>
          <div>
            {news.map((singleNews) => (
              <LodeSingleNews
                key={singleNews._id}
                singleNews={singleNews}
              ></LodeSingleNews>
            ))}
          </div>
        </div>
        <div className="lg:col-span-1">
          <RightSiteNav></RightSiteNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
