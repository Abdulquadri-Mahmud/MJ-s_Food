import { useState } from "react";
import { BsFillGridFill } from "react-icons/bs";
import { FaBars, FaTimes, FaUtensils, FaUsers, FaChartPie, FaClipboardList, FaSignOutAlt } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import { IoFastFoodOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const AnalyticsPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Overview", path: "/dashboard", icon: <BsFillGridFill /> },
    { name: "Menu", path: "/menu", icon: <FaUtensils /> },
    { name: "Orders", path: "/orders", icon: <FaClipboardList /> },
    { name: "Customers", path: "/customers", icon: <FaUsers /> },
    { name: "Analytics", path: "/analytics", icon: <FaChartPie /> },
  ];

  // Mock Data
  const analyticsData = {
    totalOrders: 600,
    totalRevenue: 15420,
    totalCustomers: 320,
    ordersByCategory: [
      { name: "Burgers", orders: 150 },
      { name: "Pasta", orders: 100 },
      { name: "Pizza", orders: 120 },
      { name: "Drinks", orders: 80 },
      { name: "Desserts", orders: 50 },
    ],
    revenueByCategory: [
      { name: "Burgers", value: 5200 },
      { name: "Pasta", value: 3200 },
      { name: "Pizza", value: 4000 },
      { name: "Drinks", value: 2000 },
      { name: "Desserts", value: 1020 },
    ],
  };

  const COLORS = ["#FF5733", "#33FF57", "#3357FF", "#FF33A6", "#FFD433"];

  return (
    <div className="flex h-screen bg-gray-100">
      <button className="absolute top-4 left-4 text-2xl md:hidden" onClick={() => setMenuOpen(true)}>
        <FaBars />
      </button>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg space-y-6 transform ${menuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform md:relative md:translate-x-0`}>
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-1 text-gray-100 rounded-b-lg w-full bg-gray-800 p-4 font-bold text-2xl">
            <FaBowlFood className='text-yellow-500'/> 
            <h1>JANET<span className='text-yellow-500'>'s_</span>Foo<span className='text-yellow-500'>d</span></h1>
            <IoFastFoodOutline className='text-yellow-500'/>
          </div>
          <button className="text-2xl md:hidden" onClick={() => setMenuOpen(false)}>
            <FaTimes />
          </button>
        </div>

        <nav className="space-y-7 pt-10 p-4">
          {menuItems.map((item, index) => (
            <Link key={index} to={item.path} className="flex items-center space-x-2 text-gray-600 py-2 px-3 rounded-md bg-gray-200 font-semibold hover:bg-gray-300">
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
          <h1 className="text-xl font-semibold text-gray-600 lg:p-0 pl-10">Analytics</h1>
        </header>

        {/* Stats Cards */}
        <div className="px-3 lg:p-6">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-4 shadow rounded-lg text-center">
              <h2 className="text-gray-500 text-lg">Total Orders</h2>
              <p className="text-3xl font-bold">{analyticsData.totalOrders}</p>
            </div>
            <div className="bg-white p-4 shadow rounded-lg text-center">
              <h2 className="text-gray-500 text-lg">Total Revenue</h2>
              <p className="text-3xl font-bold">${analyticsData.totalRevenue.toLocaleString()}</p>
            </div>
            <div className="bg-white p-4 shadow rounded-lg text-center">
              <h2 className="text-gray-500 text-lg">Total Customers</h2>
              <p className="text-3xl font-bold">{analyticsData.totalCustomers}</p>
            </div>
          </div>

          {/* Charts */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Bar Chart */}
            <div className="bg-white p-4 shadow rounded-lg">
              <h2 className="text-lg font-semibold mb-3">Orders by Category</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={analyticsData.ordersByCategory}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="orders" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Pie Chart */}
            <div className="bg-white p-4 shadow rounded-lg">
              <h2 className="text-lg font-semibold mb-3">Revenue by Category</h2>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={analyticsData.revenueByCategory}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label
                  >
                    {analyticsData.revenueByCategory.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
