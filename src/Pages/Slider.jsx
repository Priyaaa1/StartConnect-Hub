import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Slide() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div className='w-3/4 m-auto'>
      <div className="mt-20">
      <Slider {...settings}>
        {data.map((d) => (
          <div key={d.name} className="bg-white h-[450px] text-black rounded-xl">
            <div className='h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl'>
              <img src={d.img} alt="" className="h-44 w-44 rounded-full"/>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 p-4">
              <p className="text-xl font-semibold">{d.name}</p>
              <p className="text-center">{d.review}</p>
              <a href={d.link} target="_blank" rel="noopener noreferrer"><button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Read More</button></a>
            </div>
          </div>
        ))}
      </Slider>
      </div>
      
    </div>
  );
}

const data = [
  {
    name: `Understanding United`,
    img: `/src/assets/startup/project-1.png`,
    review: `Together, We Thrive: Understanding Unite`,
    link: `/Pages/Startups/UnderstandingUnited.jsx`
},
  {
    name: `Heartfelt Ventures`,
    img: `/src/assets/startup/project-2.jpg`,
    review: `Building Dreams, Bridging Realities`,
    link: `/Pages/Startups/HeartfeltVentures.jsx`
  },
  {
    name: `SheSpark Innovations`,
    img: `/src/assets/startup/project-6.png`,
    review: `Empowering Unity, Empowering Tomorrow`,
    link: `/Pages/Startups/SheSparkInnovations.jsx`
  },
  {
    name: `Hope Phoenix`,
    img: `/src/assets/startup/project-4.jpg`,
    review: `Embracing Tomorrow's Promise`,
    link: `/Pages/Startups/HopePhoenix.jsx`
  },
  {
    name: `Just Brew`,
    img: `/src/assets/startup/project-5.png`,
    review: `Turning Ideas into Impact`,
    link: `/Pages/Startups/JustBrew.jsx`
  },
  
];

export default Slide;