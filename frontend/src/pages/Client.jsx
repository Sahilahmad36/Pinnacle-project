import Marquee from "react-fast-marquee";
import homeLogo from "../assets/img/homeLogo.png"
import buildingLogo from "../assets/img/buildingImage.jpg"

const Clients = () => {
  return (
    <div className="text-[#7A6960] mb-10">

      {/* <p className="text-black text-center mt-7 mb-10 text-lg font-bold lg:px-0 px-6">
      Trusted by over 150+ major companies
      </p> */}

      <Marquee pauseOnHover="true" className="flex items-center">
        <img className="w-28 mr-20  bg-contain" src={homeLogo} alt="img1" />
        <img className="w-28 mr-20 bg-contain" src={buildingLogo} alt="img2" />
        <img className="w-28 mr-20  bg-contain" src={homeLogo} alt="img3" />
        <img className="w-28 mr-20 bg-contain" src={buildingLogo} alt="img4" />
        <img className="w-28 mr-20  bg-contain" src={homeLogo} alt="img5" />
        <img className="w-28 mr-20 bg-contain" src={buildingLogo} alt="img6" />
        <img className="w-28 mr-20  bg-contain" src={homeLogo} alt="img7" />
        <img className="w-28 mr-20 bg-contain" src={buildingLogo} alt="img8" />
        <img className="w-28 mr-20  bg-contain" src={homeLogo} alt="img9" />
        <img className="w-28 mr-20 bg-contain" src={buildingLogo} alt="img8" />
      </Marquee>
    </div>
  );
};

export default Clients;
