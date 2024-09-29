import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";


const Logout = () => {
  // const navigate = useNavigate()
  const handleLogout = async() => {
    // const res = await axios.get("/logout");
      Cookies.remove("my-token");
      window.location.replace('/login')
      // navigate('/login')
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-green-600 font-bold text-3xl text-center">You have been logged out</h2>
        </div>
        <div className="mt-8 space-y-6">
          <button
            onClick={handleLogout}
            className="w-full flex justify-center py-2 px-4 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-5"
          >
            Log in again
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
