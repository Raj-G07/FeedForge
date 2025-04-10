import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate =useNavigate();

    const logoutFn = ()=>{
        localStorage.removeItem("token")
        navigate("/")
    }
    return (
      <header className="flex items-center justify-between px-6 py-4 border-b">
        <h1 className="text-2xl font-bold">Feedback Hub</h1>
        <button className="border px-4 py-2 rounded-md hover:bg-gray-100" onClick={logoutFn}>Logout</button>
      </header>
    );
  };
  
  export default Header;
  