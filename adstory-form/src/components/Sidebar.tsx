import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[300px] h-screen bg-black p-10 border-r-2">
      <h1 className="text-white text-[50px] font-bold">Adstory</h1>
      <button
        onClick={() => {
          navigate("/form");
        }}
        className="text-xl font-bold mt-10 text-white hover:bg-gray-700 hover:text-gray-300 w-[200px] text-center p-3 rounded transition-colors"
      >
        URL Form
      </button>
    </div>
  );
};

export default Sidebar;
