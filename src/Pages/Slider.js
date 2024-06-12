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
              <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
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
    review: `Together, We Thrive: Understanding Unite`
},
  {
    name: `Heartfelt Ventures`,
    img: `/src/assets/startup/project-2.jpg`,
    review: `Building Dreams, Bridging Realities`
  },
  {
    name: `SheSpark Innovations`,
    img: `/src/assets/startup/project-6.png`,
    review: `Empowering Unity, Empowering Tomorrow`
  },
  {
    name: `Hope Phoenix`,
    img: `/src/assets/startup/project-4.jpg`,
    review: `Embracing Tomorrow's Promise`
  },
  {
    name: `Just Brew`,
    img: `/src/assets/startup/project-5.png`,
    review: `Turning Ideas into Impact`
  },
  
];

export default Slide;