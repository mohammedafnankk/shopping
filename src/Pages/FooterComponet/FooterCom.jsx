import React from "react";

function FooterCom() {
  const links = [
    {
      heading: "Products",
      name1: "Web Studio",
      name2: "DynamicBox Flex",
      name3: "Programming",
      name4: "Integrations",
      name5: "Command-line",
      headingStyles:"text-[#703BF7] pb-[10px] max-sm:pb-0 max-sm:pt-[15px]",
      nameStyles:"text-[#ebebeb] text-[13.5px] pb-[18px] hover:text-gray-400"
    },
    {
      heading: "Resources",
      name1: "Documentation",
      name2: "Tutorials & Guides",
      name3: "Blog",
      name4: "Support Center",
      name5: "Partners",
      headingStyles:"text-[#703BF7] pb-[10px] max-sm:pb-0 max-sm:pt-[15px]",
      nameStyles:"text-[#ebebeb] text-[13.5px] pb-[18px] hover:text-gray-400"
    },
    {
      heading: "Company",
      name1: "Home",
      name2: "About",
      name3: "Company",
      name4: "Pricing",
      name5: "Privacy Policy",
      headingStyles:"text-[#703BF7] pb-[10px] max-sm:pb-0 max-sm:pt-[15px]",
      nameStyles:"text-[#ebebeb] text-[13.5px] pb-[18px] hover:text-gray-400",
    },
  ];
  return (
    <div className="pt-[10%] px-12 max-sm:pt-0 max-sm:px-[20px]">
      <div className="flex justify-between py-[50px] px-[25px] border-y-solid border-y-[1px] border-y-white max-sm:flex-col max-sm:px-0 sm:max-lg:grid sm:max-lg:grid-cols-2">
        <div className="text-white max-lg:col-start-2 max-lg:row-start-3">
          <a
            href="#"
            className="text-white font-[13px] hover:underline text-sm pr-1"
          >
            Terms
          </a>
          .{" "}
          <a
            href="#"
            className="text-white font-[13px] hover:underline text-sm"
          >
            Privacy Policy
          </a>
        </div>

        {links.map((item,index) => (
          <div key={index}>
            <h4 className={item.headingStyles}>
              {item.heading}
            </h4>
            <a href="#" className={item.nameStyles}>
              {" "}
              {item.name1}
            </a>{" "}
            <br />
            <a href="#" className={item.nameStyles}>
              {" "}
              {item.name2}
            </a>
            <br />
            <a href="#" className={item.nameStyles}>
              {" "}
              {item.name3}
            </a>
            <br />
            <a href="#" className={item.nameStyles}>
              {" "}
              {item.name4}
            </a>
            <br />
            <a href="#" className={item.nameStyles}>
              {" "}
              {item.name5}
            </a>
            <br />
          </div>
        ))}
        <div className="">
          <h4 className="text-[#703BF7] pb-[10px] max-sm:pb-0 max-sm:pt-[15px]">
            Subscribe
          </h4>
          <p className="text-[13.5px] font-extralight	pb-[18px] text-[#ebedeb]">
            Get the latest news and articles to your <br /> inbox every month.
          </p>
          <input
            type="email"
            placeholder="Your email"
            className="bg-black text-white border-r-solid border-r-[1px] w-4/5 h-8 text-xs outline-none "
          />{" "}
          <span className="text-[#703BF7] pl-3">
            {" "}
            <i class="fa-solid fa-arrow-right-long "></i>
          </span>
        </div>
      </div>
      <div className="text-white p-8 text-4xl flex justify-between max-sm:px-0 max-sm:items-center">
        <p className="text-xs">
          Designed by me <i class="fa-solid fa-heart text-[#703BF7]"></i>
        </p>
        <a href="https://github.com/mohammedafnankk/shopping">
        <i class="fa-brands fa-github"></i>
        </a>
      </div>
    </div>
  );
}

export default FooterCom;
