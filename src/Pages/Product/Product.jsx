import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function Product() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  // const [mainImage,setMainImage]= useState(product.images[0])
  console.log(id);

  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="text-white px-[40px] pt-[70px] px-[80px] max-lg:px-[20px] max-lg:pb-[50px]">
      <div className="bg-[#1A1A1A] border-[1.5px] border-[#262626] p-10 rounded-xl flex max-lg:flex-col max-lg:p-[20px] max-sm:">
      
        <div className="flex justify-start item-center w-[45%] max-lg:grid max-lg:w-full max-lg:justify-center">
          <div className="flex flex-col justify-around max-lg:grid max-lg:row-start-2 max-lg:grid-cols-3 max-lg:mt-[30px] max-lg:justify-center">
            <img
              src={product?.images?.[0]}
              alt=""
              className="rounded-xl w-28 max-lg:w-full max-lg:px-[10px] max-lg:rounded-3xl  "
            />
            <img
              src={product?.images?.[1]}
              alt=""
              className="rounded-xl w-28 max-lg:w-full max-lg:px-[10px] max-lg:rounded-3xl  "
            />
            <img
              src={product?.images?.[2]}
              alt=""
              className="rounded-xl w-28 max-lg:w-full max-lg:px-[10px] max-lg:rounded-3xl  "
            />
          </div>
          <img
            src={product?.images?.[0]}
            alt=""
            className="ml-10 rounded-xl object-cover w-9/12 max-lg:ml-0 max-lg:w-full"
          />
        </div>
        <div className="flex flex-col w-[60%] max-lg:w-fit max-sm:">
        <div className="flex justify-end mt-[-30px] mb-2.5 mr-[-20px] max-sm:">
<Link to='/home' className="text-zinc-400 border-[1.5px] border-[#262626] rounded-full py-2.5 px-3 bg-black text-xs"> <i class="fa-solid fa-angle-left text-white mr-[13px]"></i>Back</Link>
</div>
            
          <div className="pl-9 max-lg:pl-0 max-lg:mt-9">
            <h1 className="text-4xl font-semibold max-md:text-2xl">{product?.title}</h1>
            <div className="mt-3.5 ">
              <div className="flex flex-none">
                <p className="text-sm border-solid border-[1.5px] border-[#262626] rounded-[30px] p-2.5 bg-black">
                  {product?.category?.name}
                </p>
              </div>
            </div>
            <p className="text-xl text-zinc-400 mt-10 mb-6 max-md:text-base max-lg:w-full font-light">
              {product?.description}
            </p>
            <p className="text-lg text-zinc-400">Price</p>
            <div className="flex justify-between">
              <p className="font-bold text-2xl text-zinc-100">
              <i class="fa-solid fa-dollar-sign"></i> {product?.price}
              </p>
              <button className="h-8 px-4 bg-[#703bf7] rounded-[10px] text-lg">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
