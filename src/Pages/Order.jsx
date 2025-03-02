import { useState } from "react";
import { BsFillGridFill } from "react-icons/bs";
import { FaBars, FaTimes, FaUtensils, FaUsers, FaChartPie, FaClipboardList, FaSignOutAlt } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import { IoFastFoodOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Order = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const menuItems = [
        { name: "Overview", path: "/dashboard", icon: <BsFillGridFill /> },
        { name: "Menu", path: "/menu", icon: <FaUtensils /> },
        { name: "Orders", path: "/orders", icon: <FaClipboardList /> },
        { name: "Customers", path: "/customers", icon: <FaUsers /> },
        { name: "Analytics", path: "/analytics", icon: <FaChartPie /> },
    ];
  const ordersPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const orders = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    name: `Customer ${index + 1}`,
    order: `Order #${index + 1}`,
    amount: (Math.random() * 50 + 10).toFixed(2),
    date: new Date().toISOString().split("T")[0],
    status: index % 2 === 0 ? "Completed" : "Pending",
  }));

  const totalPages = Math.ceil(orders.length / ordersPerPage);
  const displayedOrders = orders.slice(
    (currentPage - 1) * ordersPerPage,
    currentPage * ordersPerPage
  );

  return (
    <div className="flex h-screen bg-gry-100">
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
                <Link key={index} to={item.path} className="flex items-center space-x-2 text-gray-600 py-2 px-3 rounded-md lg:hover:bg-gray-200 hover:bg-gray-300 duration-150 lg:bg-yellow-200 bg-gray-200 font-semibold hover:text-gray-500">
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
        <div className="flex-1 overflow-y-scroll">
            <header className="lg:bg-yellow-200 bg-white shadow-md p-4 mb-6 rounded-b-lg flex justify-between items-center">
                <h1 className="text-xl font-semibold text-gray-600 lg:p-0 pl-10">Customer</h1>
            </header>
            <div className="px-3 lg:p-6 w-full">    
                <div className="bg-white p-4 shadow rounded-lg">
                    <table className="w-full border-collapse border border-gray-200">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border p-2 rounded-t-md">ID</th>
                                <th className="border p-2">Customer</th>
                                <th className="border p-2">Order</th>
                                <th className="border p-2">Amount ($)</th>
                                <th className="border p-2">Date</th>
                                <th className="border p-2 rounded-l-md">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayedOrders.map((order) => (
                            <tr key={order.id} className="text-center">
                                <td className="border p-2 text-sm text-gray-600">{order.id}</td>
                                <td className="border p-2 text-sm text-gray-600">{order.name}</td>
                                <td className="border p-2 text-sm text-gray-600">{order.order}</td>
                                <td className="border p-2 text-sm text-gray-600">{order.amount}</td>
                                <td className="border p-2 text-sm text-gray-600">{order.date}</td>
                                <td className={`border p-2 ${
                                    order.status === "Completed" ? "text-green-600" : "text-yellow-600"
                                }`}>
                                {order.status}
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                    {/* Pagination Controls */}
                    <div className="flex justify-between mt-4">
                        <button  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}  disabled={currentPage === 1}  className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50">
                            Prev
                        </button>
                        <span className="px-4 py-2">Page {currentPage} of {totalPages}</span>
                        <button  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}  disabled={currentPage === totalPages}  className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Order;
