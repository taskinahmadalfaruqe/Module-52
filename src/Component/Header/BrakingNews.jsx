import Marquee from "react-fast-marquee";

const BrakingNews = () => {
    return (
        <div className="flex justify-start">
            <button className="btn btn-secondary">Latest</button>
            <Marquee gradient='200' pauseOnHover='true'>
                 I can be a React component, multiple React components, or just some text.
            </Marquee>
        </div>
    );
};

export default BrakingNews;