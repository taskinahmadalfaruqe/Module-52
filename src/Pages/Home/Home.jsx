import LeftSideNav from "../../Component/LeftSideNav/LeftSideNav";
import RightSiteNav from "../../Component/RightSiteNav/RightSiteNav";


const Home = () => {
    return (
        <div className="grid grid-cols-4 gap-5">
            <div>Header</div>
            <LeftSideNav className="col-span-1"></LeftSideNav>
            <div className="col-span-2">
                hello from home
            </div>
            <RightSiteNav className="col-span-1"></RightSiteNav>
        </div>
    );
};

export default Home;