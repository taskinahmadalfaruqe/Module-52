import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories]= useState([])
    useEffect(()=>{
        fetch('/categories.json')
        .then(res=> res.json())
        .then(data=> setCategories(data))
    },[])
    console.log(categories)
    return (
    <div>
        <div>
            <h2 className=" text-2xl font-semibold">All Category: {categories.length}</h2>
            <ul className="ml-4 space-y-1 mt-5">
                {
                    categories.map(singleCategory=> <Link 
                        key={singleCategory.id} 
                        to={`/category/${singleCategory.id}`}
                        className="block font-semibold hover:bg-slate-200 p-2 rounded-md" 
                        >{singleCategory.name}</Link>)
                }
            </ul>
        </div>
    </div>
    );
};

export default LeftSideNav;