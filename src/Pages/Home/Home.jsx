import Header from "../../Component/Header/Header";
import LeftSideNav from "../../Component/LeftSideNav/LeftSideNav";
import RightSiteNav from "../../Component/RightSiteNav/RightSiteNav";

const Home = () => {
    return (
        <div className=" py-10">
            <Header></Header>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                <div className="lg:col-span-1">
                    <LeftSideNav ></LeftSideNav>
                </div>
                <div className="lg:col-span-2">
                    hello from home
                </div>
                <div className="lg:col-span-1">
                    <RightSiteNav ></RightSiteNav>
                </div>
            </div>
        </div>
    );
};

export default Home;
