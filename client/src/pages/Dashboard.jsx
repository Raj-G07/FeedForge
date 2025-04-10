import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <>
            <div className="min-h-screen bg-white flex flex-col">
      {/* Navbar */}
      <Header/>
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center flex-1 text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Your Opinion Matters</h2>
        <p className="text-gray-500 mb-6 max-w-md">
          Help us improve our product by sharing your valuable feedback
        </p>
        <button className="bg-black text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-900" onClick={()=>navigate("/feedback")}>
          Get Started
        </button>
      </div>
    </div>
    </>
  )
}

export default Dashboard