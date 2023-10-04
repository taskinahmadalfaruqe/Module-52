import Marquee from "react-fast-marquee";

const BrakingNews = () => {
    return (
        <div className="flex justify-start">
            <button className=" p-2 px-5 rounded-md uppercase bg-[#D72050] text-white ">Latest</button>
            <Marquee gradient='200' pauseOnHover='true'>
                 I can be a React component, multiple React components, or just some text.
            </Marquee>
        </div>
    );
};

export default BrakingNews;