
import Cards from "../../components/Cards/Cards";
import AnimatedBtn from "../../components/AnimatedBtn";
import Lottie from "lottie-react";
import hero from "../../lottie/hero.json";

function Home() {

  return (
    <div className="relative w-full flex justify-center items-center flex-col">
      {/* Hero section */}
      <div className="relative z-10 flex flex-row items-center w-full h-screen p-5 justify-end">
        {/* Left Side */}
        <div className="wrapper-1 w-1/2 h-screen flex flex-col justify-center items-center"
        style={{marginLeft: "80px"
        }}>
          <div className=" w-full">
            {/* Border + Content */}
            <div className="flex flex-col items-start gap-2">
              <h1 className="text-7xl md:text-8xl font-bold">Connect.</h1>
              <h1 className="text-7xl md:text-8xl font-bold">Share.</h1>
              <h1 className="text-7xl md:text-8xl font-bold">Learn.</h1>

              {/* Paragraph inside border */}
              <p className="!mt-6 !ml-1 max-w-xl text-left">
                NestNotes is a fast and easy note-sharing platform where students
                can access, share, and learn from class notes instantly. A
                smarter way to collaborate and study together.
              </p>
          <AnimatedBtn 
            to="/explore"
            btntext="Explore Notes"
          />

              {/* Button inside border for consistent alignment */}
            </div>
          </div>
        </div>
        <div className="wrapper-2 w-1/2 h-screen flex justify-center items-center">
          <div className="h-[80%] w-[80%] mt-[100px]">
            <Lottie animationData={hero} loop={true} />
          </div>
        </div>
      </div>

      {/* Page 2 */}
      {/* <div className="relative z-20 flex w-[90%] text-center rounded-2xl !mb-20 gap-10 !mt-20 flex-wrap flex-row justify-around items-center" id="about">
        <Cards
          src="../../../public/easy.png"
          title="Easy Access to Notes"
          desc="Students can quickly find and access semester-wise notes in one place without wasting time searching across different sources."
        />
        <Cards
          src="/easy.png"
          title="Easy Access to Notes"
          desc="Students can quickly find and access semester-wise notes in one place without wasting time searching across different sources."
        />
        <Cards
          src="/easy.png"
          title="Easy Access to Notes"
          desc="Students can quickly find and access semester-wise notes in one place without wasting time searching across different sources."
        />
        <Cards
          src="/easy.png"
          title="Easy Access to Notes"
          desc="Students can quickly find and access semester-wise notes in one place without wasting time searching across different sources."
        />
      </div> */}

      {/* Page 3 */}
      {/* <div className="relative z-10 flex flex-col items-center justify-center w-full h-screen text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white">
          College Notes
        </h1>
        <p className="mt-4 text-white text-lg max-w-xl">
          Access and share notes with your college peers.
        </p>
        <Link to="/explore">
          <button className="mt-6 px-6 py-3 bg-[#687FE5] text-white rounded-lg hover:bg-[#5563c1] transition duration-300">
            Explore Notes
          </button>
        </Link>
      </div> */}

      {/* Explore Button */}
        {/* <div className={`fixed top-0 left-0 transform translate-x-[40%] translate-y-[80%] w-full h-screen z-1000 ${
        isFooterVisible ? "relative bottom-0" : "fixed bottom-10"}`}>
          <Link to="/explore">
                <button className="group !mt-6 !px-6 !py-3 border-b-2  border-[#4d4b4b] !text-black rounded-lg hover:bg-[#4d4b4b] hover:!text-white transition duration-300 h-15 w-80 font-light text-2xl shadow-md shadow-[#4d4b4b] outline-none backdrop-blur-md"
                >
                  Explore Notes <i className="ri-arrow-right-line !text-black group-hover:!text-white transition duration-300"></i>
                </button>
              </Link>
        </div> */}
    </div>

  );
}

export default Home;
