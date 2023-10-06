import {FcGoogle} from "react-icons/fc";
import {AiFillGithub} from "react-icons/ai";
import {AiOutlineTwitter} from "react-icons/ai";
import {PiInstagramLogoBold} from "react-icons/pi";
import {BsFacebook} from "react-icons/bs";

const RightSiteNav = () => {
    return (
        <div className="flex gap-5 flex-col">
            {/* Login With US */}
            <div className="space-y-3">
                <h2 className="text-2xl font-semibold text-start">Login With</h2>
                <button
                    className="flex gap-2 justify-center items-center outline-1 outline-double p-1 px-2 rounded-md w-full">
                    <FcGoogle></FcGoogle>
                    <span>Login With Google</span>
                </button>
                <button
                    className="flex gap-2 justify-center items-center outline-1 outline-double p-1 px-2 rounded-md w-full">
                    <AiFillGithub></AiFillGithub>
                    <span>Login With Git Hub</span>
                </button>
            </div>

            {/* Find  US */}
            <div className="space-y-3 mt-5">
                <h2 className="text-2xl font-semibold text-start">Find US On</h2>
                <div className="border rounded-md ">
                <a href="#"
                    className="flex gap-2 justify-start items-center hover:bg-red-50 hover:text-blue-500 transition duration-150 text-xl p-1 px-2  w-full border-b">
                    <BsFacebook></BsFacebook>
                    <span>Facebook</span>
                </a>
                <a href="#"
                    className="flex gap-2 justify-start items-center hover:bg-red-50 hover:text-blue-500 transition duration-150 text-xl p-1 px-2  w-full border-b ">
                    <PiInstagramLogoBold></PiInstagramLogoBold>
                    <span>Instagram</span>
                </a>
                <a href="#"
                    className="flex gap-2 justify-start items-center hover:bg-red-50 hover:text-blue-500 transition duration-150 text-xl p-1 px-2 rounded-md w-full">
                    <AiOutlineTwitter></AiOutlineTwitter>
                    <span>Twitter</span>
                </a>
                </div>
            </div>

            <div className="Q_zon bg-[#F3F3F3] w-full p-3 space-y-3 rounded-md flex justify-center items-center flex-col">
                <img src="/qZone1.png" alt="Q Zone" />
                <img src="/qZone2.png" alt="Q Zone" />
                <img src="/qZone3.png" alt="Q Zone" />
            </div>
            <div style={{background:`url(/bg.png)`, backgroundRepeat: 'no-repeat', backgroundSize: "cover"}} className="p-2 rounded-md space-y-5 text-white text-center py-10">
                <h2 className="text-2xl font-semibold ">
                Create an Amazing Newspaper
                </h2>
                <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <button className="btn bg-[#D72050] hover:text-[#D72050] hover:border-[#D72050] text-white w-full">Learn More</button>
            </div>
        </div>
    );
};

export default RightSiteNav;
