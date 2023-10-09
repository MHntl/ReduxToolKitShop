import React from "react";
import Slider from "react-slick";

const SliderComp = () => {
  var settings = {
    //dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex h-[32rem] text-black items-center bg-gray-100 px-6">
          <div>
            <p className="text-6xl font-bold">Best Sneakers</p>
            <p className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              incidunt sint numquam laudantium distinctio temporibus, repellat
              enim pariatur illo, voluptate reprehenderit? Quod nulla quaerat
              sint provident harum soluta sit eveniet.
            </p>
            <p className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 bg-gray-300 flex items-center justify-center">
              Details
            </p>
          </div>
          <img
            className="w-[72rem]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqlKDxb4Lkf-AjnOtlUvinHmqbsyvnlsywTrvdheQBuRKHFanhGUQjuslS6kD5UI6sHR8&usqp=CAU"
            alt=""
          />
        </div>
        <div className="!flex h-[32rem] text-black items-center bg-gray-100 px-6">
          <div>
            <p className="text-6xl font-bold">Best Sneakers</p>
            <p className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              incidunt sint numquam laudantium distinctio temporibus, repellat
              enim pariatur illo, voluptate reprehenderit? Quod nulla quaerat
              sint provident harum soluta sit eveniet.
            </p>
            <p className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 bg-gray-300 flex items-center justify-center">
              Details
            </p>
          </div>
          <img
            className="w-[72rem]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIfDsip1I7uODrAIua3U-U1QIKARXgqeHwTEHjqYWJ-eIhZ7VxlfB5kyg_j2wwX6ZrUhk&usqp=CAU"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
