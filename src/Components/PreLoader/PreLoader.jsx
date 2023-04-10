import { preloaderImage } from "../../Assets";


const Preloader = () => {
  return (
    <div className="preloader fixed top-0 left-0 w-full h-full flex justify-center items-center bg-darkBlue  ">
      <div className="preloader-animation w-[80px] h-[80px]">
        <img src={preloaderImage} alt="" />

      </div>
    </div>
  );
};

export default Preloader;
