import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-gray-50 px-6 md:px-12 lg:px-24 pt-8 md:pt-0"> {/* Added top padding for smaller screens */}
      {/* Text Section */}
      <div className="max-w-lg flex flex-col justify-center space-y-4 md:mr-8 text-left">
        <h1 className="font-urbanist font-semibold text-3xl md:text-5xl text-black">
          We understand that being a student can be{" "}
          <span className="text-red-500">challenging.</span>
        </h1>
        <p className="font-urbanist font-normal text-lg text-gray-700">
          Join our dynamic team right here on campus. Earn, learn, and be part of
          the community that powers your daily essentials. Apply now and shape
          your campus experience!
        </p>
        <div className="flex flex-col md:flex-row justify-start gap-4">
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate("/register");
            }}
            className="bg-red-500 text-white font-semibold text-lg py-2 px-6 rounded-lg transition duration-300 hover:bg-red-600"
          >
            Sign Up
          </button>
          <p className="font-poppins font-medium text-lg text-gray-500 self-center">OR</p>
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate("/login");
            }}
            className="border border-gray-600 bg-white text-gray-600 font-semibold text-lg py-2 px-6 rounded-lg transition duration-300 hover:bg-gray-100"
          >
            Login
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex flex-col md:flex-row items-center justify-center space-x-4 mt-8 md:mt-0">
        <img
          src="/images/landingpage_image1.png"
          alt="Landing Page Image 1"
          className="w-1/2 max-w-[350px] h-auto"
        />
        <img
          src="/images/landingpage_image2.png"
          alt="Landing Page Image 2"
          className="w-1/2 max-w-[350px] h-auto"
        />
      </div>
    </div>
  );
};

export default LandingPage;
