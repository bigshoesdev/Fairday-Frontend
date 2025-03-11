import { Link } from "react-router-dom";

const BlankLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <h1 className="text-5xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
        FairdayJobs.com
      </h1>
      <div className="relative mt-8">
        <h1 className="text-9xl sm:text-[150px] font-extrabold text-gray-100 opacity-10 blur-[5px] absolute -top-2 left-1/2 transform -translate-x-1/2">
          404
        </h1>
        <h1 className="text-7xl sm:text-[100px] font-bold text-gray-300 relative">
          404
        </h1>
      </div>
      <p className="mt-4 text-lg sm:text-xl text-gray-400">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 text-lg sm:text-xl font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default BlankLayout;

