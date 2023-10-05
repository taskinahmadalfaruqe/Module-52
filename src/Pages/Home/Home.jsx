import { useLoaderData } from "react-router-dom";
import Header from "../../Component/Header/Header";
import LeftSideNav from "../../Component/LeftSideNav/LeftSideNav";
import RightSiteNav from "../../Component/RightSiteNav/RightSiteNav";
import LodeSingleNews from "../../Component/LodeSingleNews/LodeSingleNews";
// import { useState } from "react";

const Home = () => {
    const news = useLoaderData();

    // const[getNews,setNews]=useState();

    const handelGetNews=(allNews)=>{
        console.log(allNews)
    }


    return (
        <div className=" py-10">
            <Header></Header>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                <div className="lg:col-span-1">
                    <LeftSideNav ></LeftSideNav>
                </div>
                <div className="lg:col-span-2">
                    <h2 className="text-2xl font-semibold">Dragon News Home</h2>
                    <div>
                        {
                            news.map(singleNews=><LodeSingleNews key={singleNews._id} handelGetNews={handelGetNews} singleNews={singleNews} ></LodeSingleNews>)
                        }
                    </div>
                </div>
                <div className="lg:col-span-1">
                    <RightSiteNav ></RightSiteNav>
                </div>
            </div>
        </div>
    );
};

export default Home;
