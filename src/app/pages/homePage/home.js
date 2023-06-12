import React from "react";
import Header from "../../components/Header";
import manImage from "../../asserts/images/man.png";
import StarBucks from "../../asserts/images/starbucks.png";
import nike from "../../asserts/images/Nike.png";
import fIcon from "../../asserts/icons/f.svg";
import pinterstIcon from "../../asserts/icons/pintrest.svg";
import pwaIcon from "../../asserts/icons/pwa.svg";
import vIcon from "../../asserts/icons/v.svg";
import sassIcon from "../../asserts/icons/sass.svg";
import manIcon from "../../asserts/icons/man.svg";
import Footer from "../../components/Footer";
import { LazyLoadImage } from "react-lazy-load-image-component";
const HomePage = () => {
  const imagesData = [
    {
      img: StarBucks,
      title: "STARBUCKS ",
      sub: "Our ad campaign brought 80% footfall to the company   ",
    },
    {
      img: nike,
      title: "Nike",
      sub: "Our ad campaign brought 80% footfall to the company   ",
    },
    {
      img: nike,
      title: "Nike",
      sub: "Our ad campaign brought 80% footfall to the company   ",
    },
    {
      img: StarBucks,
      title: "STARBUCKS ",
      sub: "Our ad campaign brought 80% footfall to the company   ",
    },
  ];

  const Icons = [
    {
      img: pinterstIcon,
      title: "Pinterest ",
    },
    {
      img: fIcon,
      title: "Pinterest ",
    },
    {
      img: pwaIcon,
      title: "PWA ",
    },
    {
      img: vIcon,
      title: "Saas ",
    },
    {
      img: sassIcon,
      title: "Pinterest ",
    },
    {
      img: pinterstIcon,
      title: "Pinterest ",
    },
    {
      img: fIcon,
      title: "Pinterest ",
    },
    {
      img: pwaIcon,
      title: "PWA ",
    },
    {
      img: vIcon,
      title: "Saas ",
    },
    {
      img: sassIcon,
      title: "Pinterest ",
    },
  ];
  const renderImageBanner = () => {
    return (
      <>
        <div className="w-[100%] h-[100vh]">
    
          <LazyLoadImage src={manImage} className=" w-full h-full xl:object-fill " />
        </div>
        <div className="absolute w-[100vw] md:w-[60vw] top-[15vh] md:top-[40vh] xl:top-[30vh]  text-24 md:text-40 xl:text-60  bg-imgtrans text-bluebg font-700 opacity-60  p-[2vw] md:p-[6vh] xl:p-[6vh]">
          <div className="flex flex-col items-center md:items-start xl:items-start">
            <div className="flex flex-row md:flex-col xl:flex-col justify-center">
              <div>We are&nbsp;</div>
              <div className="text-redText">Extensive</div>
            </div>

            <div className="text-[0.9rem] md:text-20 xl:text-28 xl:w-[30vw]">
              Helping you stand out in a crowded market
            </div>
          </div>
        </div>
      </>
    );
  };
  const renderBook = () => {
    return (
      <div className="flex flex-col mx-auto w-[90%] font-400 py-[3vh]">
        <div className="text-10 md:text-16 xl:text-16">WHO WE ARE</div>
        <div className="font-900 text-24 md:text-40 xl:text-60 my-10">
          We are Extensive.
        </div>
        <div className="w-full md:w-[95%] xl:w-[95%] text-10 md:text-16 xl:text-20 text-justify mb-10">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </div>
        <div className=" text-10 bg-bluebg py-[2vh] px-[3vw] relative w-[84%] md:w-[40vw] xl:w-[23vw] text-imgtrans text-center rounded-4 xl:rounded-8 my-[4vh] hover:bg-redText hover:text-imgtrans">
          BOOK A FREE MARKETING AUDIT
        </div>
      </div>
    );
  };
  const renderWhatweDO = () => {
    return (
      <div className="w-full md:w-[95vw] xl:w-[95vw] flex flex-col md:flex-row xl:flex-row  justify-around my-[4vh] xl:my-[8vh]">
             <div className="bg-roundedboxbg w-full md:w-[50vw] xl:w-[40vw] p-[3vw] md:rounded-tl-[30vw] md:rounded-tr-[90vw] md:rounded-br-[25vw] md:rounded-bl-[40vw] md:-ml-[10vw] xl:rounded-tl-[30vw] xl:rounded-tr-[90vw] xl:rounded-br-[25vw] xl:rounded-bl-[40vw] xl:-ml-[10vw] ">
          <div className="font-700 text-24 md:text-36 xl:text-60">
            WHAT
            <div>WE DO.</div>
          </div>
          <div className="w-full text-[0.78rem] xl:text-20 xl:w-5/6">
            We do lots of stuffs , basically adding value to your product .
          </div>
        </div>

        <div className="ml-[4vw]  xl:mr-[0vw] text-20 md:text-[2.2rem] xl:text-36 font-700 md:font-400 xl:font-400">
          <div className="my-[4vh]">Digital Marketing </div>
          <div className="my-[4vh]">Digital Marketing </div>

          <div className="my-[4vh]">Digital Marketing </div>

          <div className="mt-[4vh]">Digital Marketing </div>
          <button className="bg-bluebg text-imgtrans text-[0.94rem] md:text-12 xl:text-[1.25rem] p-3 px-8 rounded-4 md:rounded-4 xl:rounded-8 hover:bg-redText font-400">
            View All
          </button>
        </div>
      </div>
    );
  };
  const renderOurWork = () => {
    return (
      <div className="bg-bluebg ">
        <div className="w-11/12  mx-auto py-[2vh]">
          <div className="text-24 md:text-40 xl:text-60 text-imgtrans font-700 font-serif mt-10 ml-[2vw]">
            Our <div>Work.</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
            {imagesData.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" w-full md:w-[40vw] xl:w-[40vw] my-20 md:m-20  text-imgtrans"
                >
                  <LazyLoadImage src={item.img} className="w-full object-cover" />
                  <div className="text-redText text-8 md:text-10 xl:text-[1.1rem] my-4">
                    DIGITAL MARKETING
                  </div>
                  <div className="text-20 md:text-[2.2rem] xl:text-[3rem]">
                    {item.title}
                  </div>
                  <div className="text-[0.9rem] md:text-16 xl:text-20 font-sans">
                    {item.sub}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };
  const renderPartners = () => {
    return (
      <div className="bg-imgtrans">
        <div className="w-5/6 mx-auto my-[4vh]">
          <div className="text-24 md:text-40 xl:text-60 text-bluebg font-500">
            <div>Our</div> <div>Partners.</div>
          </div>
          <div className="text-redText text-10 md:text-16 xl:text-[2.2rem]">
            Your success is our success.
          </div>
          <div className="grid grid-cols-5 items-center my-[2vw]">
            {Icons.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex w-[8vw] flex-col items-center mx-auto my-20 text-10 md:text-16 xl:text-[2.2rem]"
                >
                  <LazyLoadImage src={item.img} className="h-[10vh]" />
                  <div className="flex items-end">{item.title}</div>
                </div>
              );
            })}
          </div>
          <div className="text-bluebg font-700 text-24 md:text-40 xl:text-60">
            Testimonials
          </div>
          <div className="w-[80vw] border-border my-[10vh] shadow-10 border-1 rounded-8 flex flex-col md:flex-row xl:flex-row md:justify-center xl:justify-center items-center hover:scale-110">
            <LazyLoadImage src={manIcon} className=" w-[20vw] xl:w-[10vw] ml-[2vw]" />
            <div className="flex flex-col w-full">
              <span className="font-400 text-10 md:text-[1.8rem] xl:text-36 mx-auto">
                “Working with Extensive is great”
              </span>
              <div className="flex flex-row items-center mr-auto ml-[8vw] md:mr-0 md:ml-auto xl:mr-0 xl:ml-auto ">
                <div className="h-2 w-[2vw] md:[10vw] xl:w-[10vw] bg-bluebg ml-auto mr-[2vw] -mt-10 md:mt-0 xl:mt-0"></div>
                <div>
                  <div className="text-[0.9rem] md:text-[2.2rem] xl:text-28">
                    Hershel
                  </div>
                  <div className="text-redText text-8 md:text-12 xl:text-16 md:w-4/6 xl:w-4/6">
                    Head of director GGPL PVT LTD.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderChat = () => {
    return (
      <div className="bg-bluebg py-[4vh]">
        <div className="text-blueText text-24 md:text-40 xl:text-60 font-700  md:w-3/6 xl:w-3/6 ml-[10vw]">
          Looking to drive results?{" "}
          <span className="text-orangeText">Lets chat</span>
        </div>
      </div>
    );
  };

  return (
    <div className="w-[100%]">
      <Header />
      <div className="w-[100%] mt-[10vh]">
        {renderImageBanner()}
        <div className="bg-imgtrans text-bluebg pt-[10vh] pb-[2vh] ">
          {renderBook()}
          {renderWhatweDO()}
          {renderOurWork()}
          {renderPartners()}
          {renderChat()}
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default HomePage;
