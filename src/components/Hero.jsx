import benson from "../assets/benson.webp";
const Hero = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center">
        <h1 className="m-16 overflow-hidden text-[12vw] font-semibold uppercase leading-none">
          Benson <br />
          Langford
        </h1>
        <div className="mt-8">
          <a href="#"></a>
        </div>
        <div className="w-full ">
          <img src={benson} alt="" className="mt-8 h-96 w-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
