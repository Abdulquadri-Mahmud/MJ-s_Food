import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaUtensils, FaUsers, FaChartPie, FaClipboardList, FaSignOutAlt } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import { IoFastFoodOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { BsFillGridFill } from "react-icons/bs";


// Mock Data
const menuItems = [
  { id: 1, name: "Burger", category: "Fast Food", price: "$8", image: "https://via.placeholder.com/100" },
  { id: 2, name: "Pizza", category: "Fast Food", price: "$12", image: "https://via.placeholder.com/100" },
  { id: 3, name: "Pasta", category: "Italian", price: "$10", image: "https://via.placeholder.com/100" },
  { id: 4, name: "Sushi", category: "Japanese", price: "$15", image: "https://via.placeholder.com/100" },
  { id: 5, name: "Ramen", category: "Japanese", price: "$13", image: "https://via.placeholder.com/100" },
];

const categories = ["All", "Fast Food", "Italian", "Japanese"];

const MenuPage = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    const menuItems = [
        { name: "Overview", path: "/dashboard", icon: <BsFillGridFill /> },
        { name: "Menu", path: "/menu", icon: <FaUtensils /> },
        { name: "Orders", path: "/orders", icon: <FaClipboardList /> },
        { name: "Customers", path: "/customers", icon: <FaUsers /> },
        { name: "Analytics", path: "/analytics", icon: <FaChartPie /> },
    ];
    
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredMenu = selectedCategory === "All"
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

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
                <h1 className="text-xl font-semibold text-gray-600 lg:p-0 pl-10">Order</h1>
            </header>
            <div className="lg:m-6 m-3 lg:p-6 p-3 rounded-lg bg-white">
                {/* Tabs */}
                <div className="flex justify-center space-x-4 mb-6 bg-gray-800 py-3 rounded-md">
                    {categories.map(category => (
                    <button key={category} className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                        selectedCategory === category ? "bg-yellow-400 text-white" : "bg-gray-200 hover:bg-yellow-300"
                        }`}
                        onClick={() => setSelectedCategory(category)}>
                        {category}
                    </button>
                    ))}
                </div>

                {/* Animated Menu List */}
                <div className="lg: bg-gray-200 p-3">
                    <AnimatePresence mode="wait">
                        <motion.div
                        key={selectedCategory}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                        >
                        {filteredMenu.map(item => (
                            <motion.div
                            key={item.id}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                            className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
                            >
                            <img src={item.image} alt={item.name} className="w-24 h-24 object-cover mb-2 rounded-md" />
                            <h2 className="text-lg font-bold">{item.name}</h2>
                            <p className="text-gray-600">{item.category}</p>
                            <p className="text-yellow-500 font-semibold">{item.price}</p>
                            </motion.div>
                        ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    </div>
  );
};

export default MenuPage;
