import PropTypes from "prop-types";
import {BsBookmarkHeart, BsFillShareFill} from "react-icons/bs";
import {AiFillEye} from "react-icons/ai";
import {Link} from "react-router-dom";
const LodeSingleNews = ({singleNews}) => {
    const {title, image_url, author, details, _id,total_view,rating} = singleNews;
    const {name, published_date, img} = author;
    const {number, badge} = rating;
    return (
        <div className="rounded-md my-5 space-y-3 border p-2">
            <div
                className="author bg-[#F3F3F3] flex gap-2 justify-between items-center p-2 rounded-md">
                <div className="flex gap-2 items-center justify-between">
                    <img
                        className="w-12 h-12 rounded-full overflow-hidden"
                        src={img}
                        alt="Author img"/>
                    <div>
                        <h2>{
                                name
                                    ? name
                                    : "Not Defined"
                            }</h2>
                        <p>{
                                published_date
                                    ? published_date
                                    : "Not Defined"
                            }</p>
                    </div>
                </div>
                <div className="flex gap-2 text-base">
                    <BsBookmarkHeart></BsBookmarkHeart>
                    <BsFillShareFill></BsFillShareFill>
                </div>
            </div>
            <img src={image_url} alt="News Image"/>
            <h2 className="text-2xl font-semibold">{title}</h2>
                {
                    details.length>200?
                    <p>{details.slice(0,200)}.... <Link to={`/news/${_id}`} value={_id} className="text-lg font-semibold text-blue-500 hover:text-red-500">Read More</Link></p>
                    :
                    <p>{details}</p>
                }
            <div className="flex justify-between items-center border-t border-b p-2">
                <div className="ratting">
                    <p>{number? number : "Not Yet"} <sup className="text-orange-500 p-1">{badge? badge: "Not Yet"}</sup></p>
                </div>
                <div className="watch flex gap-1 items-center text-base">
                    <AiFillEye></AiFillEye>
                    {total_view}
                </div>
            </div>
        </div>
    );
};

LodeSingleNews.propTypes = {
    singleNews: PropTypes.object.isRequired,
};

export default LodeSingleNews;
