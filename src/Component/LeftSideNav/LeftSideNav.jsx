import moment from "moment";
import { useEffect, useState } from "react";
import { AiOutlineAccountBook } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  console.log(categories);
  return (
    <div>
      <div>
        <h2 className=" text-2xl font-semibold">
          All Category: {categories.length}
        </h2>
        <ul className="ml-4 space-y-1 mt-5">
          {categories.map((singleCategory) => (
            <NavLink
              key={singleCategory.id}
              to={`/category/${singleCategory.id}`}
              className="block font-semibold hover:bg-slate-200 p-2 rounded-md"
            >
              {singleCategory.name}
            </NavLink>
          ))}
        </ul>
      </div>
      <div className="my-5 flex flex-col gap-5">

        <div className="card card-compact w-full bg-base-100 shadow-xl rounded-md">
          <figure>
            <img src="/1.png" alt="Shoes" />
          </figure>
          <div className="card-body">
            <Link className="card-title font-semibold text-lg hover:text-blue-700">
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </Link>
            <div className="flex justify-between items-center text-lg">
              <p>sport</p>
              <div className="flex gap-2 items-center justify-between">
                <AiOutlineAccountBook></AiOutlineAccountBook>
                {moment().format("MMM D, YYYY")}
              </div>
            </div>
          </div>
        </div>

        <div className="card card-compact w-full bg-base-100 shadow-xl rounded-md">
          <figure>
            <img src="/2.png" alt="card" />
          </figure>
          <div className="card-body">
            <Link className="card-title font-semibold text-lg  hover:text-blue-700">
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </Link>
            <div className="flex justify-between items-center text-lg">
              <p>sport</p>
              <div className="flex gap-2 items-center justify-between">
                <AiOutlineAccountBook></AiOutlineAccountBook>
                {moment().format("MMM D, YYYY")}
              </div>
            </div>
          </div>
        </div>

        <div className="card card-compact w-full bg-base-100 shadow-xl rounded-md">
          <figure>
            <img src="/3.png" alt="Card" />
          </figure>
          <div className="card-body">
            <Link className="card-title font-semibold text-lg  hover:text-blue-700">
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </Link>
            <div className="flex justify-between items-center text-lg">
              <p>sport</p>
              <div className="flex gap-2 items-center justify-between">
                <AiOutlineAccountBook></AiOutlineAccountBook>
                {moment().format("MMM D, YYYY")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideNav;
