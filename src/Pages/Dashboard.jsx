import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaUtensils, FaUsers, FaChartPie, FaClipboardList, FaSignOutAlt } from "react-icons/fa";
import { Bar, Pie, Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement } from "chart.js";
import { FaBowlFood } from "react-icons/fa6";
import { IoFastFoodOutline } from "react-icons/io5";
import { BsFillGridFill } from "react-icons/bs";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement);

const Dashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Sidebar Menu Items
  const menuItems = [
    { name: "Overview", path: "/dashboard", icon: <BsFillGridFill /> },
    { name: "Menu", path: "/menu", icon: <FaUtensils /> },
    { name: "Orders", path: "/orders", icon: <FaClipboardList /> },
    { name: "Customers", path: "/customers", icon: <FaUsers /> },
    { name: "Analytics", path: "/analytics", icon: <FaChartPie /> },
  ];
  
  // Mock Data
  const [dashboardData, setDashboardData] = useState({
    totalOrders: 120,
    customers: 45,
    revenue: 8450,
    monthlySales: [300, 450, 500, 600, 700, 800, 900, 1000, 950, 870, 760, 620],
    customerGrowth: [5, 10, 15, 25, 35, 45, 50, 60, 80, 95, 110, 130],
    orderDistribution: [
      { category: "Dine-in", count: 50 },
      { category: "Takeaway", count: 40 },
      { category: "Delivery", count: 30 }
    ]
  });

  const barChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      label: "Monthly Sales",
      data: dashboardData.monthlySales,
      backgroundColor: "rgb(51, 51, 51)",
    }]
  };

  const lineChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      label: "Customer Growth",
      data: dashboardData.customerGrowth,
      borderColor: "#3B82F6",
      fill: false
    }]
  };

  const pieChartData = {
    labels: dashboardData.orderDistribution.map(item => item.category),
    datasets: [{
      data: dashboardData.orderDistribution.map(item => item.count),
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    }]
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile Menu Button */}
      <button className="absolute top-4 left-4 text-2xl md:hidden" onClick={() => setMenuOpen(true)}>
        <FaBars />
      </button>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg space-y-6 transform ${menuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform md:relative md:translate-x-0`}>
        <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-1 text-gray-100 rounded-b-lg w-full bg-gray-800 p-4 font-bold text-2xl">
                <FaBowlFood className='text-yellow-500'/> 
                <h1 className=''>JANET<span className='text-yellow-500'>'s_</span>Foo<span className='text-yellow-500'>d</span></h1>
                <IoFastFoodOutline className='text-yellow-500'/>
            </div>
          <button className="text-2xl md:hidden" onClick={() => setMenuOpen(false)}>
            <FaTimes />
          </button>
        </div>
        <nav className="space-y-7 pt-10 p-4">
          {menuItems.map((item, index) => (
            <Link key={index} to={item.path} className="flex items-center space-x-2 text-gray-600 py-2 px-3 rounded-md lg:hover:bg-gray-200 hover:bg-gray-300 duration-150 lg:bg-yellow-200 bg-white font-semibold hover:text-gray-500">
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
          <button className="flex absolute bottom-5 bg-red-600 w-56 rounded-md py-2 px-3 items-center space-x-2 text-red-100 hover:text-red-200" onClick={() => alert("Logging out...")}> 
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </nav>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-y-scroll">
        <header className="lg:bg-yellow-200 bg-white shadow-md p-4 mb-6 rounded-b-lg flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-600 lg:p-0 pl-10">Overview</h1>
        </header>

        {/* Header */}
        <div className="px-3 lg:p-6 w-full">
            <div className="py-4 bg-gray-700 text-center rounded-lg p-3">
                <h1 className="lg:text-3xl text-2xl font-semibold text-gray-300">Welcome to Your Dashboard</h1>
                <p className="text-gray-400 mt-2 lg:text-xl text-sm">Manage your restaurant's menu, orders, customers, and analytics.</p>
            </div>
            
            {/* Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 w-full lg:bg-white lg:p-3">
                <div className="lg:bg-yellow-200 bg-white p-4 shadow rounded-lg">
                    <h2 className="text-xl font-semibold mb-4">Monthly Sales</h2>
                    <Bar data={barChartData} />
                </div>
                <div className="lg:bg-yellow-200 bg-white p-4 shadow rounded-lg">
                    <h2 className="text-xl font-semibold mb-4">Customer Growth</h2>
                    <Line data={lineChartData} />
                </div>
                <div className="bg-white p-4 shadow rounded-lg col-span-1 md:col-span-2">
                    <h2 className="text-xl font-semibold mb-4">Order Distribution</h2>
                    <Pie data={pieChartData} />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
