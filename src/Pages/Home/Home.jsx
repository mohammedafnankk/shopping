import React, { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate, useSearchParams } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");

  const category = searchParams.get("category");
  // console.log(category);

  const categoriess = [
    {
      id: "1",
      categoryname: "Clothes",
    },
    {
      id: "2",
      categoryname: "Electronics",
    },
    {
      id: "3",
      categoryname: "Furniture",
    },
    {
      id: "4",
      categoryname: "Shoes",
    },
    {
      id: "5",
      categoryname: "Miscellaneous",
    },
  ];

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products/")
      .then((res) => {
        // console.log(res.data);
        setDatas(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const categaries = (id) => {
    setSearchParams({
      category: id,
    });
  };

  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/categories/${category}/products`)
      .then((res) => {
        // console.log(res.data);
        setDatas(res.data);
      })
      .catch((err) => console.log(err));
  }, [category]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <img src="./loading.svg" className="" alt="" />
      </div>
    );
  }
  const allitems = () => {
    axios
      .get("https://api.escuelajs.co/api/v1/products/")
      .then((res) => {
        setDatas(res.data);
        navigate("?category=");
      })
      .then(() => {});
  };

  return (
    <div className="text-white p-10 max-sm:p-[20px]">
      <div className="flex ml-[5px]">
        <div className="">
          <i class="fa-solid fa-magnifying-glass bg-[#703bf7] p-1.5 rounded-md absolute max-sm:ml-[1px] ml-[8px] mt-[7.9px] max-sm:ml-[1px]"></i>
        </div>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
          className=" bg-black border-solid border-[1px] border-[#262626] p-3 rounded-[10px] text-slate-100 w-[30%] outline-none text-[13px] focus:outline-violet-700 focus:outline-[1px] focus:outline-none focus:border-none max-md:w-full pl-[50px] max-sm:ml-[-7px]"
        />
      </div>

      <div className="flex flex-row-reverse max-lg:flex-col">
        <div className="mt-[25px] border-solid border-[1px] border-[#262626] py-[10px] pr-[40px] rounded-[10px] lg:ml-[10px] h-[300px]">
          <h1 className="text-lg font-bold pl-[9px]">
            <i class="fa-solid fa-layer-group text-[#703bf7] text-2xl"></i> Categories :
          </h1>

          <ul className="text-lg font-extralight">
            <li
              onClick={allitems}
              className={`${
                category ? "" : "border-l-[2px] border-[#703bf7]"
              } my-3 pl-[8px] cursor-pointer text-md bg-gradient-to-r from-zinc-900`}
            >
              All
            </li>
            {categoriess.map((item, index) => (
              <div key={index}>
                <li
                  onClick={() => categaries(item.id)}
                  className={`${
                    category === item.id
                      ? "border-l-[2px] border-[#703bf7]"
                      : "border-none"
                  } my-3 pl-[8px] cursor-pointer text-md bg-gradient-to-r from-zinc-900`}
                >
                  {item.categoryname}
                </li>
              </div>
            ))}
          </ul>
        </div>
        <div className="w-10/12 grid grid-cols-1 grid-cols-2 grid-cols-3 gap-7 mt-[25px] max-sm:grid-cols-1 max-sm:w-full max-lg:grid-cols-2 max-lg:w-full m-auto ">
          {datas
            .filter((item) => {
              if (search == "") {
                return item;
              } else if (
                item.title.toLowerCase().includes(search.toLowerCase())
              ) {
                return item;
              }   
              
            })
            .map((item, index) => (
              <div
                key={index}
                className="border-solid border-[1px] border-[#262626] p-7 rounded-[10px] text-white"
              >
                <img
                  onClick={() => navigate(`${item.id}`)}
                  src={item.images}
                  className="w-full rounded-lg self-stretch h-72 min-h-52 mb-7 object-cover cursor-pointer "
                />
                <h3 className="font-semibold text-xl mb-3.5 h-auto">
                  {item.title}
                </h3>
                <div className="flex justify-between">
                  <p className="text-xs text-gray-400 truncate w-40 pb-3">
                    {item.description}{" "}
                  </p>
                  <span
                    className="font-semibold text-white text-xs pr-8 cursor-pointer"
                    onClick={() => navigate(`${item.id}`)}
                  >
                    Read More
                  </span>
                </div>
                {/* <p className='text-xs text-gray-400 truncate w-40 pb-3'>{item.description} </p><span className='font-semibold text-white text-xs'>Read More</span>           */}
                <span className="text-xs border-solid border-[1.5px] border-[#262626] rounded-[20px] p-2.5 bg-[#1A1A1A]">
                  {item.category.name}
                </span>
                <p className="text-xs text-gray-400 mt-[15px]">Price</p>
                <p className="font-semibold text-lg pt-0.5 flex justify-between ">
                  $ {item.price}
                  <button
                    onClick={() => navigate(`${item.id}`)}
                    className=" h-8 px-4 bg-[#703bf7] rounded-[10px] text-lg"
                  >
                    Add To Cart
                  </button>

                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
