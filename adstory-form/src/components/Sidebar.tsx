import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[300px] h-screen bg-white p-8 border-r-2 border-gray-200 shadow-lg">
      <h1 className="text-black text-4xl font-semibold mb-10">Adstory</h1>
      <button
        onClick={() => {
          navigate("/form");
        }}
        className="w-full text-xl font-semibold text-black bg-gray-100 hover:bg-blue-500 hover:text-white p-4 rounded-lg transition-all duration-300 ease-in-out shadow-sm hover:shadow-lg"
      >
        URL Form
      </button>
    </div>
  );
};

export default Sidebar;
